var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new); // rendering form to the user to let them create a new flight
router.post('/new', flightsCtrl.create); //takes what they put in the form and submits it to the controller
router.get('/:id', flightsCtrl.detail); 
// router.delete('/flights/:id', flightsCtrl.delete);

module.exports = router;
