var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let tool = new Schema({
	name: {type:String, required: true},
	description: {type:String, required: true},
	link: {type:String},
	tasks: [String],
	tags: [String],
	img_url: {type:String}
})


module.exports = mongoose.model('tool', tool);