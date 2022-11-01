const { PubSub } = require('@google-cloud/pubsub');

let pubSubClient;
exports.handler = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send();
    return;
  }
  console.log('CUSTOM_PUBSUB_API_ENDPOINT', process.env.PUBSUB_API_ENDPOINT);
  pubSubClient = pubSubClient || new PubSub({ apiEndpoint: process.env.PUBSUB_API_ENDPOINT });
  pubSubClient
    .topic(process.env.PUBSUB_TOPIC)
    .publishMessage({ json: req.body })
    .then(() => {
      res.send('OK');
    });
};
