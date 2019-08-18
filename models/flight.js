var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var destSchema = new Schema({
    destAirport: {
        type: String,
        },
        arrives: {
            type: Date
        }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        require: true,
        enum: ["United", "Southwest", "Delta", "Alaska", "Virgin", "Quantas"]
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    
    depart: { type: Date,
        default: function () {
        var redate = new Date();
        redate.setFullYear(redate.getFullYear()+1)
        return redate.toLocaleDateString();}
    },

    destination: [destSchema],
    depAirport: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Flight", flightSchema);