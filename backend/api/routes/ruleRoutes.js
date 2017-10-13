'use strict';
module.exports = function(app) {
    var rules = require('../controllers/ruleController');

    // rule Routes
    app.route('/rules')
        .get(rules.list_all_rules)
        .post(rules.create_a_rule);


    app.route('/rules/:ruleId')
        .get(rules.read_a_rule)
        .put(rules.update_a_rule)
        .delete(rules.delete_a_rule);
};