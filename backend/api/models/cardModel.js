'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
    id: {
        type: String,
        required: 'Kindly enter the name of the device'
    },
    title: {
        type: String
    }
});

module.exports = mongoose.model('Card', CardSchema);