const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const { FlightMiddleWares } = require("../../middlewares/index");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getCities);

router.post(
  "/flights",
  FlightMiddleWares.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);

router.post("/airports", AirportController.create);

module.exports = router;
