'use strict';


var mongoose = require('mongoose'),
    Card = mongoose.model('Card');

exports.list_all_cards = function(req, res) {

    Card.find({}, function(err, new_card) {
        if (err)
            res.send(err);
        res.json(new_card);
    });
};




exports.create_a_card = function(req, res) {
    //console.log(req.query.cardid);
    //console.log(req.query.title);

    var new_card = new Card(req.body);
    new_card.save(function (err, card) {
        if (err)
            res.send(err);
        res.json(card);
    });
    // new_card.save(function(err, Card) {
    //     if (err)
    //         res.send(err);
    //         console.log('Error Occured while Saving');
    //     res.json(Card);
    //     console.log(Card);
    // });
};
