import React, { useState, useEffect } from 'react'
import s from 'styled-components'

import {
  BrowserRouter as Router, Switch, Route, Link, useHistory,
} from 'react-router-dom'

//import homepage
import Homepage from './Homepage'


//main component that gets rendered
//so everything -> want all component to eventually be here
//import all the components from the frontend

//cant change the exact path, otherwise will reroute every page because
//every page contains '/'
//currently reroutes to homepage, but notice how state can be changed
const App = () => {

  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/clicked'>
            <h2> Hello! </h2>
          </Route>
        </Switch>
      </Router>
  )
}
export default App
