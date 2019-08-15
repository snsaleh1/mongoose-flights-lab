var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema ({
    airline: {
        type: String, 
        enum: ['United', 'Southwest', 'Delta']
    },
    flightNo: {
        type: Number,
        required: true
    }, 
    departs: {
        type: [Date]
    }
});

module.exports = mongoose.model('Flight', flightSchema);