const { Storage } = require('@google-cloud/storage');

let storageClient;
exports.handler = (eventData, context, callback) => {
  const { bucket, name } = eventData;
  console.log(`detected file ${name} in bucket ${bucket}`);
  storageClient = storageClient || new Storage();
  storageClient
    .bucket(bucket)
    .file(name)
    .download()
    .then((content) => {
      console.log(`file ${name} in bucket ${bucket} has content ${content.toString()}`);
      callback();
    });
};
