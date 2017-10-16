'use strict';


var mongoose = require('mongoose'),
    RuleWidget = mongoose.model('RuleWidget');

exports.list_all_ruleWidgets = function (req, res) {
    RuleWidget.find({}, function (err, ruleWidget) {
        if (err)
            res.send(err);
        res.json(ruleWidget);
    });
};


exports.create_a_ruleWidget = function (req, res) {
    var new_ruleWidget = new RuleWidget(req.body);
    new_ruleWidget.save(function (err, ruleWidget) {
        if (err)
            res.send(err);
        res.json(ruleWidget);
    });
};


exports.read_a_ruleWidget = function (req, res) {
    RuleWidget.findById(req.params.ruleWidgetId, function (err, ruleWidget) {
        if (err)
            res.send(err);
        res.json(ruleWidget);
    });
};


exports.update_a_ruleWidget = function (req, res) {
    RuleWidget.findOneAndUpdate({_id: req.params.ruleWidgetId}, req.body, {new: true}, function (err, ruleWidget) {
        if (err)
            res.send(err);
        res.json(ruleWidget);
    });
};


exports.delete_a_ruleWidget = function (req, res) {
    RuleWidget.remove({
        _id: req.params.ruleWidgetId
    }, function (err, ruleWidget) {
        if (err)
            res.send(err);
        res.json({message: 'Rule Widget successfully Removed'});
    });
};

