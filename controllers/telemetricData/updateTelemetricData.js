const Telemetry = require('../../utils/Telemetry');
const { response } = require('../../utils/response');


module.exports = async (req, res, next) => {
  const { carIdentity } = req.params;

  const data = await Telemetry.updateOne({ carIdentity }, { ...req.body });
  if (!data) throw new Error("Invalid car identity");

  return response(res, next, 201, null, 'Telemetric data updated successfully');
};
