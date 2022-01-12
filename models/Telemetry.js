const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    carIdentity: {
      type: String,
      trim: true,
      required:true,
    },
    carTemperature: {
      type: String,
      trim: true,
      required:true,
    },
    carSpeed: {
      type: String,
      trim: true,
      required:true,
    },
    carLongitude: {
      type: String,
      trim: true,
      required:true,
    },
    carLatitude: {
      type: String,
      trim: true,
      required:true,
    },
    fuelConsumptionRate: {
      type: String,
      trim: true,
      required:true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Telemetry", schema);
