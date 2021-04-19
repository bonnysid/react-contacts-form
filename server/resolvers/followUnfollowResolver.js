const findUserById = require('../utils/findUserById')
const users = require('../data')

module.exports = {
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
    },
}