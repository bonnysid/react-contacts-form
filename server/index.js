const root = require('./resolvers')
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const {graphqlHTTP} = require("express-graphql")
const schema = require('./scheme/scheme')
const jwt = require('jsonwebtoken')
const isAuth = require('./middleware/middleware')

const app = express()

app.use(cors())

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('Server started on 5000 port'))