const mongoose = require('mongoose')

async function connectDB() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not defined. Add it to the .env file.')
    return
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })

    console.log(`MongoDB connected: ${connection.connection.host}`)
    console.log(`Database name: ${connection.connection.name}`)
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
  }
}

module.exports = connectDB
