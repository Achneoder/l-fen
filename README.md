## Description

**l-fen** is a small runtime to execute a bundle of Serverless Functions like they were running in the cloud.

:warning: only [GCP](https://cloud.google.com/) supported right now

## Motivation

When working on backend services and applications built by a multitude of individual Serverless Functions with various triggers, like HTTP, Pub/Sub or Storage/Bucket-Events, I always struggled with testing the whole setup locally.  
Even if there's a 100% test coverage for each function itself, one function of the whole application might expect a different event than another function publishes.

So my approach was always to test the code itself with unit and e2e tests, deploy to a test or dev environment and test the whole process of the application again. If something fails, I had to look into the logs, hoping that I logged enough to narrow down the problem and ideally get the line where my code broke or wasn't working as expected.

After a while, I decided to write something like an emulator for the various triggers and events.  
The goal was to locally run my backend service, which had several HTTP functions writing files to buckets, triggering other functions, publishing events via Pub/Sub with other functions subscribing to these.

In the end, I came up with **l-fen**, the _local function environment_.

## Usage

First, you have to build your Functions, since **l-fen** `requires()` the JS file.

When that's done, you can start to create your `.fenrc.json` file.  
This file contains the whole configuration of your setup and the individual Functions.
It's required to to tell **l-fen** which Functions to load and when to call these.

When everything is set up, just call `npx l-fen` to do it's magic.

### Configuration

```jsonc
{
  // the local folder containg all buckets and their files
  "storageDir": "./local-test-storage",
  // the port of the proxy, handling all HTTP requests and forwarding to the related HTTP Functions
  "httpProxyPort": "8080",
  // the port of the gRPC server handling stuff like Pub/Sub
  "grpcProxyPort": "50051",
  // the log level for l-fen. To print logs, created by Functions, set it to "verbose" or lower
  "loglevel": "verbose",
  // configuration for the Cloud Provider
  "provider": {
    // the Cloud Provider itself, right now, only GCP is supported
    "name": "GCP",
    // name of the project, used for some internal authentication processes
    "project": "my-test-project"
  },
  // list of all Functions to be managed by l-fen
  "services": [
    {
      // name of the Function, in case of HTTP Functions, it serves as the base route for the proxy
      "name": "http-handler",
      // path to the built main JS file
      "path": "./http-handler/index.js",
      // the exported entry point of the function
      "entryPoint": "handler",
      // the type of the function, "HTTP", "PUBSUB" or "BUCKET"
      "triggerType": "HTTP",
      // environment variables to be used by the Function
      "envVars": {
        "PUBSUB_API_ENDPOINT": "localhost:50051",
        "PROJECT_ID": "my-test-project",
        "PUBSUB_TOPIC": "generic-topic"
      }
    },
    {
      "name": "file-writer",
      "path": "./file-writer/index.js",
      "entryPoint": "handler",
      "triggerType": "PUBSUB",
      // if triggerType is either "PUBSUB" or "BUCKET", additional configuration has to be done here.
      "triggerConfig": {
        // the topic, the Pub/Sub function should subscribe
        "topic": "generic-topic"
      },
      "envVars": {
        "MY_BUCKET": "my-bucket"
      }
    },
    {
      "name": "file-reader",
      "path": "./file-reader/index.js",
      "entryPoint": "handler",
      "triggerType": "BUCKET",
      "triggerConfig": {
        // file events the Function should listen on. Right now, only "WRITE" is supported
        "events": ["WRITE"],
        // the bucket the Function should listen on.
        "targetBucket": "my-bucket"
      },
      "envVars": {}
    }
  ],
  "extensions": ["/path/to/my/extension.js"]
}
```

## Restrictions

### Cloud Providers

Right now, **l-fen** is only capable of handling Google Cloud Functions.  
Other Cloud Providers are not yet supported.

### Pub/Sub

The original idea was, to use **l-fen** out of the box, without the need of changing the Functions code to work with **l-fen**.
Unfortunately, I didn't achieve that completely for Pub/Sub.

To allow **l-fen** to handle published event, the publisher has to use the gRPC server provided by **l-fen**.  
When using the [Google Cloud Pub/Sub:Node.js Client](https://www.npmjs.com/package/@google-cloud/pubsub), the endpoint can be changed by instantiating the client with `new PubSub({apiEndpoint: 'localhost:50051'})`.

I suggest to introduce an environment variable to the Function publishing events, to dynamically override the default endpoint and set that environment variable within the functions configuration in the `.fenrc.json`.

## Under the hood

**l-fen** consists of two main parts, the **orchestrator** and the **bootloader**, the brain and the heart of **l-fen**.

The orchestrator, the brain, plans the whole environment and knows what to do in certain cases and events.
The bootloader, the heart, is executing the Functions and providing all necessary data.

The orchestrator spawns new bootloader processes by executing the bootloader with required arguments.

### The orchestrator

The orchestrator is responsible for loading the `.fenrc.json`, managing the Functions and setting up the local environment itself.

Depending on the type of Functions, it adds a file watcher to the `storageDir` and calls the bootloader of the Functions that might be triggered by certain events in buckets.  
The same applies to HTTP and Pub/Sub Functions. The orchestrator provides a HTTP proxy and forwards any requests to the responsible Functions. It also starts the gRPC server that can be used by Pub/Sub to handle events and topics and call the according Functions.

### The bootloader

The bootloader is responsible for starting a Function and providing all the required stuff the Function needs.
It's really nothing else like a small CLI tool, that expects certain arguments, like the payload it should forward to the Function or the environment variables the Function should be provided with.

For bucket and Pub/Sub Functions, it's quite straight forward. It `requires()` the Functions JS file, mapping the payload to the corresponding object and calling the `entryPoint` method with that object.

In case of an HTTP Function, the bootloader makes use of [express](https://www.npmjs.com/package/express) and [SuperTest](https://www.npmjs.com/package/supertest) to create a proper request and handle stuff like different HTTP methods and headers.

The orchestrator is loading the `.fenrc.json`, managing all Functions, providing some basic setup like configuring a fake service account and file watcher on the specified `storageDir` and start the HTTP proxy.

It's also possible to start the bootloader without the orchestrator by running something like
`npx l-fen-boot --event='{\"bucket\": \"user\", \"name\": \"111/b.json\"}' --path="../../../path/to/function/index.js" --entryPoint="handleEvent" --name="name-of-the-function"`

### Custom extension

l-fen allows adding custom extensions that are executed for each loaded Function right before starting it.

Create your extension by exporting a class implementing the `LFenExtension` interface from `l-fen/types/extension.interface` and adding the absolute path to the config:

```jsonc
{
  // all the other stuff, see above
  ...
  // here we add out extension
  "extensions": ["/path/to/my/extension.js"]
}
```
