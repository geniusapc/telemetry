const { createClient } = require('redis');
const debug = require('debug')('app:start');
const { REDIS_URL } = require('./keys');

module.exports = async function () {
  const client = createClient({ url: REDIS_URL });
  client.on('error', (err) => debug('Redis Client Error', err));
  await client.connect();
  return client;
};
