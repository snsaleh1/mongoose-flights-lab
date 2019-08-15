var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema ({
    airline: {
        type: String, 
        enum: ['United', 'Southwest', 'Delta']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        required: true,
        default: function (){
            var redate = new Date();
            redate.setFullYear(redate.getFullYear()+1)
            return redate;
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);