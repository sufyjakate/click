'use strict';
module.exports = function(app) {

    var card = require('../controllers/cardController');
    // todoList Routes
    app.route('/cards')
        .get(card.list_all_cards)
        .post(card.create_a_card);

    app.route('/getAllCards')
        .get(card.list_all_cards);

};