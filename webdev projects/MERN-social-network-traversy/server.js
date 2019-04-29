const express = require('express')
const mongoose = require('mongoose')

const app = express()

// DB config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongoDB Connected'))
  .catch(err => console.log(err))

// mongoose.connect(db, err => {
//   if (err) console.log(err)
//   console.log('mongoDB Connected')
// })

app.get('/', (req, res) => res.send('Hello world'))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
