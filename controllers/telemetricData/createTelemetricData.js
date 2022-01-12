const Telemetry = require('../../utils/Telemetry');
const { response } = require('../../utils/response');

module.exports = async (req, res, next) => {
  const { carIdentity } = req.body;

  const data = await Telemetry.findOne({ carIdentity });
  if (data) throw new Error('Telemetric data already exist');


  await Telemetry.create({ ...req.body });
  return response(res, next, 201, null, 'Telemetric data created successfully');
};
