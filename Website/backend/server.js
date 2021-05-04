const express = require('express')
//cookie session creates cookies, stores based off on session
//manipulates states in the background 
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')

//express is a easy library that lets you route http
const app = express()
const AllRouters = require('./router')

//Below is a mongodb url, generally connect with localhost 27017/database name 
//Download robo3t and mongodb 
//const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/550'


//mongoose.connect(MONGO_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
//})

//serves static files, index.html
app.use(express.static('dist'))

//creates session for the cookie session
app.use(
  cookieSession({
    name: 'session',
    keys: ['secret-code'],
  }),
)

//grabs all routing paths 
app.use('/', AllRouters)


// Integration
app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

//http://localhost:3000/ -> can also change to any port you want
app.listen(3000, () => {
  console.log('listening on 3000')
})


