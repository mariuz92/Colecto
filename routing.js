var controller = require('./controller')

module.exports = function(app){
	app.get('/', function (req, res) {
	  res.sendFile('static/html/index.html');
	});

	app.get('/all_tools', controller.get_all_tools)

	app.post('/add_tool', controller.add_tool)
}