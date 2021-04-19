const bcrypt = require('bcrypt')

const bonnysid = {
    id: 1,
    username: 'bonnysid',
    password: bcrypt.hashSync('admin', 10),
    status: 'sleeping...',
    followed: []
}

const midorun = {
    id: 2,
    username: 'midorun',
    password: bcrypt.hashSync('midorun', 10),
    status: 'something...',
    followed: [bonnysid]
}

const hero = {
    id: 3,
    username: 'hero',
    password: bcrypt.hashSync('hero', 10),
    status: null,
    followed: [bonnysid, midorun]
}

const users = [bonnysid, midorun, hero]

module.exports = users