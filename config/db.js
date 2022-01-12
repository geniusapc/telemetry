const mongoose = require('mongoose');
const debug = require('debug')('app:start');
const { MONGODB_URI } = require('./keys');

module.exports = async () => {
  await mongoose
    .connect(MONGODB_URI)
    .then(() => {
      debug('connected to db');
    })
    .catch((e) => {
      debug(`Error: ${e}`);
    });
};
