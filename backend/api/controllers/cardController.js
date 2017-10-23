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

    var new_card = new Card();
    new_card.cardid = req.body.cardid;
    new_card.title = req.body.title;
    new_card.height = req.body.height;
    new_card.width = req.body.width;
    new_card.x = req.body.x;
    new_card.y = req.body.y;
    new_card.deviceName = req.body.deviceName;

    console.log('id' + req.body.cardid);
    console.log(req.body.title);
    console.log(req.body.deviceName);
    new_card.save();
    // new_card.save(function(err, Card) {
    //     if (err)
    //         res.send(err);
    //         console.log('Error Occured while Saving');
    //     res.json(Card);
    //     console.log(Card);
    // });
};
