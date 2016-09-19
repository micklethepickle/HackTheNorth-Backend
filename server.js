var express = require('express');
var mongoose = require('mongoose');
var bodyParser =require('body-parser');

//mongo
mongoose.connect('mongodb://localhost/restDeuceTracker');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

app.listen(80);
