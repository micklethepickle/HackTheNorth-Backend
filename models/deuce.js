var restful =require('node-restful');
var mongoose = restful.mongoose;

//schema
var deuceSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	longestDeuce: Number,
	shortestDeuce: Number,
	numberOfDeuces: Number,
	averageLengthOfDeuce: Number
});

//return model
module.exports = restful.model('Deuces', deuceSchema);