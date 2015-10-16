
/** User Details Service **/
module.exports = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.who = function() {
        return this.firstName +' '+ this.lastName ;
    };
};