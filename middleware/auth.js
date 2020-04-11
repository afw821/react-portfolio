const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).send('Access denied. No token provided');
        const decoded = jwt.verify(token, 'jwtPrivateKey');
        req.user = decoded;
        res.token = token;
        next();
    } catch (ex) {
        res.status(400).send('Invalid acces token');
    }
}

module.exports = auth;