'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
        cardid: {
            type: Number
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
        },
        deviceName: {
            type: String
        }

});

module.exports = mongoose.model('Card', CardSchema);