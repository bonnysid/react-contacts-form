const users = require('../data')

module.exports = findUserById = (id) => {
    return users.find(u => u.id == id)
}