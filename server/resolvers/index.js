const adminResolver = require("./adminResolver")
const userResolver = require("./userResolver")
const authResolver = require("./authResolver")
const followUnfollowResolver = require("./followUnfollowResolver")

module.exports = {
    ...adminResolver,
    ...userResolver,
    ...followUnfollowResolver,
    ...authResolver
}