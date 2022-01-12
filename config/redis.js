const { createClient } = require('redis');
const { REDIS_URL } = require('./keys');

module.exports = async function () {
  const client = createClient({ url: REDIS_URL });
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  return client;
};
