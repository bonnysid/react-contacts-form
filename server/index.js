const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const {graphqlHTTP} = require("express-graphql");
const schema = require('./scheme/scheme')
const users = require('./data')
const jwt = require('jsonwebtoken')
const isAuth = require('./middleware/middleware')

const findUserById = (id) => {
    return users.find(u => u.id == id)
}

const root = {
    getAllUsers: () => users,
    getUser: ({id}) => findUserById(id),
    login: ({username, password}) => {
        const user = users.find(u => u.username === username)
        if(!user) throw new Error('User doesn\'t exists')

        console.log(password, user.password, bcrypt.compareSync(password, user.password))
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
    follow: ({id}, req) => {
        if(!req.isAuth) throw new Error('You need to authorize!')

        const loggedUser = findUserById(req.id)
        const user = findUserById(id)
        if(!user || !loggedUser) throw new Error(`User with this ${id} doesn't exists!`)

        loggedUser.push(user)

        return true;
    },
    unfollow: ({id}, req) => {
        if(!req.isAuth) throw new Error('You need to authorize!')

        const loggedUser = findUserById(req.id)
        const user = findUserById(id)
        if(!user || !loggedUser) throw new Error(`User with this ${id} doesn't exists!`)

        loggedUser.followed = loggedUser.followed.filter(u => u.id != id)

        return true;
    }
}

const app = express()

app.use(cors())

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('Server started on 5000 port'))