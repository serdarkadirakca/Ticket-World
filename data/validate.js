var passwordValidator = require('password-validator');
var schema = new passwordValidator();

schema
.is().min(4)              
.is().max(10)

module.exports = schema;