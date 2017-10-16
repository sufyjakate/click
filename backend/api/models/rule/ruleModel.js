'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RuleSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the rule'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['activated', 'deactivated', 'created', 'deleted', 'triggered']
        }],
        default: ['ON']
    },
    config: {
        type: String
    },
});

module.exports = mongoose.model('Rule', RuleSchema);