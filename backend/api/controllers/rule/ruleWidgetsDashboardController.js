'use strict';


var mongoose = require('mongoose'),
    RuleWidgetDashboard = mongoose.model('RuleWidgetDashboard');

exports.list_all_ruleWidgetsDashboard = function (req, res) {
    RuleWidgetDashboard.find({}, function (err, ruleWidgetDashboard) {
        if (err)
            res.send(err);
        res.json(ruleWidgetDashboard);
    });
};


exports.create_a_ruleWidgetDashboard = function (req, res) {
    var new_ruleWidgetDashboard = new RuleWidgetDashboard(req.body);
    new_ruleWidgetDashboard.save(function (err, ruleWidgetDashboard) {
        if (err)
            res.send(err);
        res.json(ruleWidgetDashboard);
    });
};


exports.read_a_ruleWidgetDashboard = function (req, res) {
    RuleWidgetDashboard.findById(req.params.ruleWidgetDashboardId, function (err, ruleWidgetDashboard) {
        if (err)
            res.send(err);
        res.json(ruleWidgetDashboard);
    });
};


exports.update_a_ruleWidgetDashboard = function (req, res) {
    RuleWidgetDashboard.findOneAndUpdate({_id: req.params.ruleWidgetDashboardId}, req.body, {new: true}, function (err, ruleWidgetDashboard) {
        if (err)
            res.send(err);
        console.log(ruleWidgetDashboard);
        res.json(ruleWidgetDashboard);
    });
};


// exports.updateState_ruleWidgetDashboard = function (req, res) {
//     RuleWidgetDashboard.findOneAndUpdate({}, req.body, {new: true}, function (err, ruleWidgetDashboard) {
//         if (err)
//             res.send(err);
//         res.json(ruleWidgetDashboard);
//     });
// };


exports.delete_a_ruleWidgetDashboard = function (req, res) {
    RuleWidgetDashboard.remove({
        _id: req.params.ruleWidgetDashboardId
    }, function (err, ruleWidgetDashboard) {
        if (err)
            res.send(err);
        res.json({message: 'Rule Widget Dashboard successfully Removed'});
    });
};

