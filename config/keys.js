require('dotenv').config();
const { env } = process;

module.exports = {
  PORT: env.PORT || env.npm_package_config_port,
  NODE_ENV: env.NODE_ENV,
  MONGODB_URI: env.MONGODB_URI,
  REDIS_URL: env.REDIS_URL,
};
