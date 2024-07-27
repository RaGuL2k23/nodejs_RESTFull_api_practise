// src/middleware/authMiddleware.js
var jwt = require('jsonwebtoken');

var SECRET_KEY = process.env.SECRET_KEY || 'ITS2SECret';

// Middleware to verify JWT token
exports.authenticateToken = function (req, res, next) {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.status(401).json({ message: 'Unauthorized' });
    jwt.verify(token, SECRET_KEY, function (err, user) {
        if (err) return res.status(403).json({ message: 'Forbidden' });
        req.user = user;
        next();
    });
};
