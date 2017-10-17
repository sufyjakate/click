var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3333,
    mongoose = require('mongoose'),
    Device = require('./api/models/deviceModel'), //created model loading here
<<<<<<< HEAD
    Rule = require('./api/models/ruleModel'),
    Card = require('./api/models/cardModel'), //created model loading here
=======
    Rule = require('./api/models/rule/ruleModel'), //created model loading here
    RuleWidget = require('./api/models/rule/ruleWidgetModel'), //created model loading here
>>>>>>> b753468f71119fb5c8129a00e7106ab86181303c
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://admin:admin123@ds113915.mlab.com:13915/clickdb');
mongoose.connect('mongodb://admin:admin@ds111754.mlab.com:11754/click');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/deviceRoutes'); //importing route
routes(app); //register the route

<<<<<<< HEAD
var cardRoutes = require('./api/routes/cardRoutes');
cardRoutes(app);

var routesRule = require('./api/routes/ruleRoutes'); //importing routes for rule
=======
var routesRule = require('./api/routes/rule/ruleRoutes'); //importing routes for rule
>>>>>>> b753468f71119fb5c8129a00e7106ab86181303c
routesRule(app); //register the route

var routesRuleWidget = require('./api/routes/rule/ruleWidgetsRoutes'); //importing routes for rule
routesRuleWidget(app); //register the route


app.listen(port);

app.on('listening', function () {
    console.log('Server already running');
});

console.log('RESTful API server started on: ' + port);

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});