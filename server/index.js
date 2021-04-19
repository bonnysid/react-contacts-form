const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const {graphqlHTTP} = require("express-graphql");
const schema = require('./scheme/scheme')
const users = require('./data')
const jwt = require('jsonwebtoken')

const root = {
    getAllUsers: () => users,
    getUser: ({id}) => users.find(u => u.id == id),
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
    }

}

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('Server started on 5000 port'))