'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = mongoose.Schema({

    card_id		    	    : {type: Integer, unique: true},
    card_title              : String

});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin123@ds113915.mlab.com:13915/clickdb');

module.exports = mongoose.model('card', cardSchema);