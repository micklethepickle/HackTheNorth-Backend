var express = require('express');
var router = express.Router();


//models
var Deuce = require('../models/deuce');

//Routes
Deuce.methods(['get','put','post','delete']);
Deuce.register(router, '/deuces');



//Return router
module.exports = router;