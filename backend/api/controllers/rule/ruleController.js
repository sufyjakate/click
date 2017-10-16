'use strict';


var mongoose = require('mongoose'),
    Rule = mongoose.model('Rule');

exports.list_all_rules = function (req, res) {
    Rule.find({}, function (err, rule) {
        if (err)
            res.send(err);
        res.json(rule);
    });
};


exports.create_a_rule = function (req, res) {
    var new_rule = new Rule(req.body);
    new_rule.save(function (err, rule) {
        if (err)
            res.send(err);
        res.json(rule);
    });
};


exports.read_a_rule = function (req, res) {
    Rule.findById(req.params.ruleId, function (err, rule) {
        if (err)
            res.send(err);
        res.json(rule);
    });
};


exports.update_a_rule = function (req, res) {
    Rule.findOneAndUpdate({_id: req.params.ruleId}, req.body, {new: true}, function (err, rule) {
        if (err)
            res.send(err);
        res.json(rule);
    });
};


exports.delete_a_rule = function (req, res) {


    Rule.remove({
        _id: req.params.ruleId
    }, function (err, rule) {
        if (err)
            res.send(err);
        res.json({message: 'Rule successfully Removed'});
    });
};

