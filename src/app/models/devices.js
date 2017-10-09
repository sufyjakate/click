'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = mongoose.Schema({

    device_name 			: String,
    device_id			    : {type: Integer, unique: true},
    device_type             : String

});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin123@ds113915.mlab.com:13915/clickdb');

module.exports = mongoose.model('device', deviceSchema);