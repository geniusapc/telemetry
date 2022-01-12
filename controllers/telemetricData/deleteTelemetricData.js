const Telemetry = require('../../utils/Telemetry');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { carIdentity } = req.params;
  const data = await Telemetry.deleteOne({ carIdentity });
  if (!data) throw new Error('Telemetric data not found');
  return response(res, next, 201, null, 'Telemetric data deleted successfully');
};
