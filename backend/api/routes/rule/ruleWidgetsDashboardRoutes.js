'use strict';
module.exports = function (app) {
    var ruleWidgetsDashboard = require('../../controllers/rule/ruleWidgetsDashboardController');

    // rule RoutesWidgets
    app.route('/ruleWidgetsDashboard')
        .get(ruleWidgetsDashboard.list_all_ruleWidgetsDashboard)
        .post(ruleWidgetsDashboard.create_a_ruleWidgetDashboard);


    app.route('/ruleWidgetsDashboard/:ruleWidgeDashboardtId')
        .get(ruleWidgetsDashboard.read_a_ruleWidgetDashboard)
        .put(ruleWidgetsDashboard.update_a_ruleWidgetDashboard)
        .delete(ruleWidgetsDashboard.delete_a_ruleWidgetDashboard);
};