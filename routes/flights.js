var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

//CREATE new flight
router.get('/', flightsCtrl.index);

// router.post('/newFlights', flightsCtrl.new);
router.get('/newFlights', flightsCtrl.index);
router.post('/', flightsCtrl.flightList);



module.exports = router;

