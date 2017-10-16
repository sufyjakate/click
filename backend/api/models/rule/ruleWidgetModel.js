'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RuleWidgetSchema = new Schema({
    widgetType: {
        type: String
    },
    widgetView: {
        type: String
    },
    widgetTitle: {
        type: String
    },
    x: {
        type: String
    },
    y: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    sequence: {
        type: String
    },
});

module.exports = mongoose.model('RuleWidget', RuleWidgetSchema);