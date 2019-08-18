var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.post("/new", flightsCtrl.create);
router.get("/:id", flightsCtrl.detail);

// router.get("/:id", flightsCtrl.show);
// router.post("/", flightsCtrl.create);

module.exports = router;