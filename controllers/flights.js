var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    detail
}


function detail(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
      Ticket.find({flight: flights._id}, function(err, tickets) {
        res.render('flights/detail', { title: 'Flight Detail', flights, tickets });
      })
    })
  }

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req, res) {
    console.log(req.body);
    var flight = new Flight(req.body);
    flight.save(function(err) {
    if (err) return res.redirect('/flights/new', {title: 'Add Flight'});
    res.redirect('/flights');
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
}