const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models")

const resolvers = {
    Query: {
        users: async () => {
        return User.find().select("-__v -password").populate("power");
    },
    }
}

module.exports = resolvers;