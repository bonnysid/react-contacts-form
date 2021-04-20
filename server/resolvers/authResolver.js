const findUserById = require('../utils/findUserById')
const users = require('../data')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    login: ({username, password}) => {
        const user = users.find(u => u.username === username)
        if(!user) throw new Error('User doesn\'t exists')

        const isEqual = bcrypt.compareSync(password, user.password)
        if(!isEqual) throw new Error('Password incorrect!')

        const token = jwt.sign({id: user.id, username: user.username}, 'test', {
            expiresIn: '2h'
        })

        return {
            id: user.id,
            token: token,
            tokenExpiration: 2,
            username: user.username
        }
    },
    authMe: (args, req) => {
        return {
            id: req.id,
            isAuth: req.isAuth
        }
    },
    createUser: ({input}) => {
        const user = {
            id: Date.now(),
            username: input.username,
            password: bcrypt.hashSync(input.password, 10),
            status: null,
            followed: []
        }
        users.push(user)
        return user
    },
}