var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3333,
    mongoose = require('mongoose'),

    Device = require('./api/models/deviceModel'), //created model loading here

    Card = require('./api/models/cardModel'), //created model loading here

    Rule = require('./api/models/rule/ruleModel'), //created model loading here
    RuleWidget = require('./api/models/rule/ruleWidgetModel'), //created model loading here
    RuleWidgetDashboard = require('./api/models/rule/ruleWidgetDashboardModel'), //created model loading here
    bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin123@ds113915.mlab.com:13915/clickdb');
//mongoose.connect('mongodb://admin:admin@ds111754.mlab.com:11754/click');

// mongoose.connect('mongodb://admin:admin123@ds113915.mlab.com:13915/clickdb');
// mongoose.connect('mongodb://admin:admin@ds111754.mlab.com:11754/click');
mongoose.connect('mongodb://localhost/click');


app.disable('view cache');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/deviceRoutes'); //importing route
routes(app); //register the route

var cardRoutes = require('./api/routes/cardRoutes');
cardRoutes(app);

var routesRule = require('./api/routes/rule/ruleRoutes'); //importing routes for rule
routesRule(app); //register the route

var routesRuleWidget = require('./api/routes/rule/ruleWidgetsRoutes'); //importing routes for rule
routesRuleWidget(app);
var routesRuleWidgetDashboard = require('./api/routes/rule/ruleWidgetsDashboardRoutes'); //importing routes for rule
routesRuleWidgetDashboard(app); //register the route


app.listen(port);

app.on('listening', function () {
    console.log('Server already running');
});

console.log('RESTful API server started on: ' + port);

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});