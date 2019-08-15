var Flight = require('../models/flight');

module.exports = {
  
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', {flights});
    });
  }

function newFlight(req, res) {
    res.render('flights/new');
  }