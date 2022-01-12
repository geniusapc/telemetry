const Telemetry = require('../../utils/Telemetry');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { carIdentity } = req.params;
  const telemetricData = await Telemetry.findOne({ carIdentity });
  return response(res, next, 200, telemetricData);
};
