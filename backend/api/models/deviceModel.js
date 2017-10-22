'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DeviceSchema = new Schema({
    name: {
        type: String
    },
    Device_type: {
        type: String
    },
    Date: {
        type: Date
    },
    status: {
        type: [{
            type: String,
            enum: ['ON', 'OFF']
        }]
    },
    DeviceID: {
        type: Number
    }
});

module.exports = mongoose.model('Device', DeviceSchema);