//express server
let express = require('express');
let app = express();
let bodyParser = require('body-parser')

let db_connection = require('./models/db_connection')
let configure_routing = require('./routing');

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
db_connection()
app.use(bodyParser.json());
configure_routing(app)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
