var jwt = require('jwt-simple');

//export function with arguments

module.exports = function(obj,password){
    return jwt.encode(obj,password);

};