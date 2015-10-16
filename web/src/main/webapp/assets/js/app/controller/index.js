//Import the service
var User = require('../services');

/** Route for home page **/
exports.home = function(request, response) {
    response.render('home', {
        title: 'Home page'
    });
};

/** Route for about page **/
exports.submit = function(request, response) {
	console.log(request.body)
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var usr = new User(firstName, lastName);
    response.render('submit', {
        title: 'Home page',
        //Call the method in User service to get the data
        message: usr.who()
    });
};
/** Route for about page **/
exports.about = function(request, response) {
    response.render('default', {
        title: 'About page'
    });
};