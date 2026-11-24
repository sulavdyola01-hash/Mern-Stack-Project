require('dotenv').config({ quiet: true })
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contactRoutes')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Health check
app.get('/', (req, res) => {
  res.send('M.EVS backend is running.')
})

// API routes
app.use('/api/contact', contactRoutes)

// Connect to MongoDB, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
})
