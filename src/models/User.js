import { Schema, model } from 'mongoose'

const useSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Provide a valid email address'
      ]
    },
    displayName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const userModel = model('User', useSchema)
