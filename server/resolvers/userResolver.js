const findUserById = require('../utils/findUserById')
const users = require('../data')

module.exports = {
    getAllUsers: () => users,
    getUser: ({id}) => findUserById(id),
}