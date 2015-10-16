var express = require('express');
var bodyParser = require('body-parser')
var app = express();
//Register the routes controller
var routes = require('./app/controller');
var http_port = process.argv[2];


//Setting ejs template
app.set('view engine', 'ejs');

//Reference the static files like css, images, js etc
app.use(express.static(__dirname + '/assets'));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));


//Route for home page
app.get('/', routes.home);
//Route for submit page
app.post('/submit/', routes.submit);
//Route for blocking any unwanted requests
app.get('*', function(request, response) {
    response.send('Bad route');
});


//For starting the server in port 
var server = app.listen(http_port, function() {
    console.log("|*******|Server Started on port : "+http_port+"|*******|");
});