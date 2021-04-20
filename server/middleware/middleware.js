const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) {
        req.isAuth = false
        return next()
    }

    const token = authHeader.split(' ')[1]

    if(!token || token === '') {
        req.isAuth = false
        return next()
    }

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'test')
    } catch (e) {
        req.isAuth = false
        return next()
    }

    if(!decodedToken) {
        req.isAuth = false
        return next()
    }

    req.id = decodedToken.id
    req.isAuth = true
    req.username = decodedToken.username
    next()
}