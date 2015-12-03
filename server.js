var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path = require('path');
var cons = require('consolidate');
var swig = require('swig');

var Hacker = require('./app/models/hacker');
var apiRouter = require('./app/routers/apiRouter');
var siteRouter = require('./app/routers/siteRouter');

//Be careful this user is read-only, if you need to test the CRUD Api, please connect your own database (free on https://mongolab.com)
mongoose.connect('mongodb://public:public@ds061474.mongolab.com:61474/treviso-js-mongo');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('app/public'));

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');

//disable cache to see page changes
app.set('view cache', false);
swig.setDefaults({ cache: false });

var port = process.env.port || 8080;

app.use('/', siteRouter);
app.use('/api', apiRouter);

app.listen(port);
console.log("Server is listening on port "+port);


