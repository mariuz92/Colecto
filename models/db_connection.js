var mongoose = require('mongoose');

module.exports = function(){
	let url = 'mongodb://localhost:27017/colecto'
	mongoose.connect(url, { useNewUrlParser: true });
	mongoose.connection.on('open', function(){
		console.log('mongoose is connected');
	})
}



