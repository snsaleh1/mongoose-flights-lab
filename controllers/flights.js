const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

// !this takes the output of the form and submits to the database
function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: "Flights", flights });
    });
  }

function create (req, res) {
    //is this what connects to the route? or the view?
    const flight = new Flight(req.body); 
    console.log(req.body)
    //take the contents of the request BODY and submit schema
    flight.save(function(err) {  // saves it to the database  
      // one way to handle errors
      // console.log(flight);
      if (err) return res.send(err);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
}

// ! this renders the empty form 
function newFlight(req, res) {
    res.render('flights/new', {title: "Flights"});
  }