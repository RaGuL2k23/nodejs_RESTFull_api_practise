// src/utils/authHelper.js
var jwt = require('jsonwebtoken');

var SECRET_KEY = 'ITS2SECret';

exports.generateToken = function (user) {
    return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};
