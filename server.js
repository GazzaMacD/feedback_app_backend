// initialize the passport config
require('./services/passport.js')
const express = require('express')
const app = express()

// Route imports
const authRoutes = require('./routes/authRoutes.js')

authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
