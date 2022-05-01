import { GraphQLString } from 'graphql'
import { userModel } from '../models/User'

export const register = {
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    try {
      const newUser = await userModel.create(args)
      console.log(newUser)
      return 'New user created'
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}
