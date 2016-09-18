var restful =require('node-restful');
var mongoose = restful.mongoose;

//schema
var deuceSchema = new mongoose.Schema({
	name: String,
	lengthOfDeuce: String,
	timeOfDeuce: String
});

//return model
module.exports = restful.model('Deuces', deuceSchema);