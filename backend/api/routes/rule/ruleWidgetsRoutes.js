'use strict';
module.exports = function (app) {
    var ruleWidgets = require('../../controllers/rule/ruleWidgetsController');

    // rule RoutesWidgets
    app.route('/ruleWidgets')
        .get(ruleWidgets.list_all_ruleWidgets)
        .post(ruleWidgets.create_a_ruleWidget);


    app.route('/ruleWidgets/:ruleWidgetId')
        .get(ruleWidgets.read_a_ruleWidget)
        .put(ruleWidgets.update_a_ruleWidget)
        .delete(ruleWidgets.delete_a_ruleWidget);
};