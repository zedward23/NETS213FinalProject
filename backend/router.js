const express = require('express')
const router = express.Router()



//post request
router.post('/attach', (req, res) => {
  // /attach is attached to / -> http://localhost:3000/attach

  //sets the cookie to some value from the frontend that can be passed 
  req.session.body = ''
  //example code for grabbing from the frontend
  //javascript allows destructuring variables and values -> must be same variable name
  //retrieves the variable data & its value from the request passed through by the 
  // request
  const { data } = req.body
  res.send('success!')
})

//get request
router.get('/get', (req, res) => {
  //same thing
  //difference is that you would work with the params 
  //meaning url 
  //generally can stick with post requests
})

//exports all the paths
module.exports = router