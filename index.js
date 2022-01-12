require('./middlewares/unCaughtErrors');
const serverless = require('serverless-http');
const express = require('express');

const debug = require('debug');
const dbConnect = require('./config/db');
const routes = require('./routes');
const { PORT, AWS_DEFAULT_REGION } = require('./config/keys');

const requiredKeys = require('./middlewares/requiredKeys');
const startupMiddlewares = require('./middlewares/startUpMiddlewares');

debug.enable('app:start');
const debugAppStart = debug('app:start');

const app = express();

const main = async () => {
  requiredKeys();
  startupMiddlewares(app);
  await dbConnect();
  routes(app);

  if (!AWS_DEFAULT_REGION) {
    app.listen(PORT, () => {
      debugAppStart(`Listening on port ${PORT}`);
    });
  }
};

main();
module.exports.handler = serverless(app);
