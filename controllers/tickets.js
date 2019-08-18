const Flight = require('..models/flight');
const Ticket = require('..models/ticket');

module.exports={
    new: newTicket,
    create,
    addToTicket
};

function newTicket(req, res){
    Ticket.find({}, function(err, ticket){
    res.render('tickets/new', {
        title: 'Add Ticket',
        tickets
        });
    })
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/tickets/new')
    })
}

function addToTicket(req, res) {
    Ticket.findById(req.params.id, function(err, movie) {
        flight.ticket.push(req.body.ticketId);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}