var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
 
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, tickets) {
        res.render('tickets/new', {title: 'Add Ticket', tickets});
    });
} ;


function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {  
      let newTicket = new Ticket(req.body);
      newTicket.save(function(err, result) {
          res.redirect(`/flights/${req.params.id}`);
      })
    });
  }

// function newTicket(req, res){
//     Ticket.find({}, function(err, ticket){
//     res.render('tickets/new', {
//         title: 'Add Ticket',
//         tickets
//         });
//     })
// }

// function create(req, res) {
//     Ticket.create(req.body, function(err, ticket){
//         res.redirect('/tickets/new')
//     })
// }

// function addToTicket(req, res) {
//     Ticket.findById(req.params.id, function(err, movie) {
//         flight.ticket.push(req.body.ticketId);
//         flight.save(function(err) {
//             res.redirect(`/flights/${flight._id}`);
//         });
//     });
// }