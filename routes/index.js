const v1 = require("./v1")
const NotFound = require('../middlewares/pageNotFound');
const errorHandler = require('../middlewares/errorHandler');


module.exports = (app) => {
  app.use('/api/v1/', v1);
  app.use(NotFound);
  app.use(errorHandler);
};
