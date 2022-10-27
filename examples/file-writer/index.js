const { Storage } = require('@google-cloud/storage');

let storageClient;
exports.handler = (eventData, context, callback) => {
  const json = Buffer.from(eventData.data, 'base64').toString();
  storageClient = storageClient || new Storage();
  storageClient
    .bucket(process.env.MY_BUCKET)
    .file(new Date().getTime() + '.json')
    .save(json)
    .then(() => {
      callback();
    });
};
