'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var RuleWidget = require('./ruleWidgetModel');

var RuleWidgetDashboardSchema = new Schema({
    state:
        [{
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
            themeColor: {
                type: String
            },
            sequence: {
                type: String
            },
            _id: {
                type: String
            },
            __v: {
                type: String
            },

        }],
    widgetType: {
        type: String
    },
});

module.exports = mongoose.model('RuleWidgetDashboard', RuleWidgetDashboardSchema);