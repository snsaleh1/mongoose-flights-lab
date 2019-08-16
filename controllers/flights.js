const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: "Flights", flights });
    });
  }

  // !this takes the output of the form and submits to the database
  function create (req, res) {
      //is this what connects to the route? or the view?
      const flight = new Flight(req.body); //take the contents of the request BODY and submit schema
      flight.save(function(err) {  // saves it to the database  
        // one way to handle errors
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect('/flights');
      });
  }


// ! this renders the empty form 
function newFlight(req, res) {
    res.render('flights/new', {title: "Flights"});
  }


// function create(req, res) {
//     req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//     var flight = new Flight(req.body);
//     flight.save(function(err) {
//       if (err) return res.redirect('/flights/new');
//         console.log(flight);
//         res.render('flights/new')
//     })
// };

