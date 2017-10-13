'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DeviceSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the device'
    },
    Device_type: {
        type: String,
        required: 'Enter Device Type'
    },
    Added_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['ON', 'OFF']
        }],
        default: ['ON']
    }
});

module.exports = mongoose.model('Device', DeviceSchema);