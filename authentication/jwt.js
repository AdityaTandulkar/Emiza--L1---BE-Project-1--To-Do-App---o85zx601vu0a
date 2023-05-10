const jwt = require("jsonwebtoken");


function genToken(email, key){
    return jwt.sign({email}, key, {expiresIn : "1h"});
}

module.exports = {
    genToken,
}