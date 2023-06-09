require('dotenv').config()
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {

        const headerToken = req.get('Authorization')

        if (!headerToken) {
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }

        let setToken
        
        try {
            token = jwt.verify(headerToken, SECRET)
            req.userId = token.id
            console.log("TOKEN-----------------", token)
        } catch (err) {
            err.statusCode = 500
            throw err
        }

        if (!token) {
            const err = new Error('Not authenticated.')
            error.statusCode = 401
            throw error
        }

        next()
    }
}