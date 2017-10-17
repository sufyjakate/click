var express = require('express'),
    app = express(),
    port = process.env.PORT || 3333,
    mongoose = require('mongoose'),
    Device = require('./api/models/deviceModel'), //created model loading here
    Rule = require('./api/models/ruleModel'),
    Card = require('./api/models/cardModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin123@ds113915.mlab.com:13915/clickdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/deviceRoutes'); //importing route
routes(app); //register the route

var cardRoutes = require('./api/routes/cardRoutes');
cardRoutes(app);

var routesRule = require('./api/routes/ruleRoutes'); //importing routes for rule
routesRule(app); //register the route


app.listen(port);

app.on('listening', function () {
   console.log('Server already running');
});

console.log('RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});