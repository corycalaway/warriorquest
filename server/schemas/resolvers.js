const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models")


const resolvers = {
    Query: {
        users: async () => {
        return User.find().select("-__v -password").populate("power");
    }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log("token:", token, "user:", user)
      return { token, user };
    } 
    }
}

module.exports = resolvers;