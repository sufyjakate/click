'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RuleWidgetSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the ruleWidget'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['activated', 'deactivated', 'created', 'deleted', 'triggered' ]
        }],
        default: ['ON']
    },
    config: {
        type: String
    },
});

module.exports = mongoose.model('RuleWidget', RuleWidgetSchema);