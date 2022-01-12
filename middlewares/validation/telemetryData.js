const Joi = require("joi");

const carIdentity = Joi.string().trim().label("car identity");
const carTemperature = Joi.string().trim().label("car temperature");
const carSpeed = Joi.string().trim().label("car speed");
const carLongitude = Joi.string().trim().label("car longitude");
const carLatitude = Joi.string().trim().label("car latitude");
const fuelConsumptionRate = Joi.string().trim().label("fuel consumption rate");

module.exports.valCreateTelemeter = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      carIdentity: carIdentity.required(),
      carTemperature: carTemperature.required(),
      carSpeed: carSpeed.required(),
      carLongitude: carLongitude.required(),
      carLatitude: carLatitude.required(),
      fuelConsumptionRate: fuelConsumptionRate.required(),
    })
    .validate(req.body);

  if (error) throw error;

  req.body = value;
  next();
};

module.exports.valUpdateTelemeter = (req, res, next) => {
  const { error, value } = Joi.object()
    .keys({
      carTemperature: carTemperature.optional(),
      carSpeed: carSpeed.optional(),
      carLongitude: carLongitude.optional(),
      carLatitude: carLatitude.optional(),
      fuelConsumptionRate: fuelConsumptionRate.optional(),
    })
    .validate(req.body);

  if (error) throw error;
  if (!Object.keys(value).length) throw new Error("Specify atleast one field to update");

  req.body = value;
  next();
};
