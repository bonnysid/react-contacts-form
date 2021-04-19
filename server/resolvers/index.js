const adminResolver = require("./adminResolver")
const userResolver = require("./userResolver")
const followUnfollowResolver = require("./followUnfollowResolver")

module.exports = {
    ...adminResolver,
    ...userResolver,
    ...followUnfollowResolver
}