require("express-async-errors");
const router = require("express").Router();
const {
  createTelemetricData,
  deleteTelemetricData,
  getTelemetricDatabyId,
  updateTelemetricData,
} = require("../controllers/telemetricData");
const {
  valCreateTelemeter,
  valUpdateTelemeter,
} = require("../middlewares/validation/telemetryData");

router.post("/cars/telemetric-data", valCreateTelemeter, createTelemetricData);
router.get("/cars/:carIdentity/telemetric-data", getTelemetricDatabyId);
router.delete("/cars/:carIdentity/telemetric-data", deleteTelemetricData);
router.patch("/cars/:carIdentity/telemetric-data", valUpdateTelemeter, updateTelemetricData);

module.exports = router;
