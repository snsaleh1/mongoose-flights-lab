const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  detail
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render("flights/index", { title: "Flights", flights });
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Flights" });
}

// !this takes the output of the form and submits it to the database
function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  });
}

function detail(req, res) {
    Flight.findById(req.params.id, function(err, flights){ 
  res.render("flights/detail", { title: "Flight Detail", flights })
})
}; 