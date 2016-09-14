var express = require('express');
var path = require('path');        //https://github.com/rupalirathod/pc_repair_node_app.git
var favicon = require('server-favicom');   //A favicon is a visual cue that client software, like browsers, use to identify a site
var logger = require('morgan');  //HTTP request logger middleware for node.js
var cookieParser = require('cookie-parser'); //Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
var bodyParser = require('body-parser'); //Parse incoming request bodies in a middleware before your handlers, availabe under the req.body property.

var routes = require('./routes/index'); //routes lets you easily dispatch based on url-style strings
var users = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(___dirname, 'public')));

app.use('/', routes);
app.use('/users', routes);

//catch error 404 and forward to error handlers
app.use(function(req, res, next){
    var err = new Error('Not Found');
});