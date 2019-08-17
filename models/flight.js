var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destSchema = new Schema({
    destination: {
        type: String,
        enum : ['PAR', 'LAX', 'DFW', 'SEA']
    }
    // arrival: {
    //     type: Date,
    //     default: function (){
    //         var redate = new Date();
    //         redate.setFullYear(redate.getFullYear()+1)
    //         return redate;
    //     }
    // }});
});

var flightSchema = new Schema ({

    airline: {
        type: String, 
        enum: ['United', 'Southwest', 'Delta', 'Alaska', 'Virgin']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    depart: {
        type: Date,
        required: true,
        default: function (){
            var redate = new Date();
            redate.setFullYear(redate.getFullYear()+1)
            return redate;
        }
    },
    depAirport: {
        type: String,
        required: true
    },
});



module.exports = mongoose.model('Flight', flightSchema);