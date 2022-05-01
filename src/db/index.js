import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://josfradev:josfradev@cluster0.psh1f.mongodb.net/myblog?retryWrites=true&w=majority'
  )
  console.log('MongoDB Connected')
}
