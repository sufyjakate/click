'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
    cardid: {
        type: Number,
        unique: true
    },
    height: {
        type: Number
    },
    title: {
        type: String
    },
    width: {
        type: Number
    },
    x: {
        type: Number
    },
    y: {
        type: Number
    }
});

module.exports = mongoose.model('Card', CardSchema);