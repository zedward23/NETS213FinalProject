import React, { useState, useEffect } from 'react'
import s from 'styled-components'
import {
  BrowserRouter as Router, Switch, Route, Link, useHistory,
} from 'react-router-dom'


//styled components lets you integrate css with js in the file itself
//s.(html element) followed by backward ticks 
//good syntatic nature to capitalize 
const Styledinput= s.textarea`
  width: 700px;
  height: 100px; 
  font-family: Arial;
  font-size: 32px; 
`

const Organize = s.div`
  display: flex; 
  flex-direction: column;
  align-items:center;
  z-index: -5;
`

const Text = s.h3`
  font-size: 36px; 
  font-family: Arial;
`

const Title = s.h1`
  font-size: 56px; 
  font-family: Arial;
`

const Button = s.button`
  background-color: blue;
  font-family: Arial;
  color:white; 
  font-size: 26px; 
  margin-top: 15px;
`
//es6 syntax
//functional component 
const Homepage = ({ comment, length }) => {
  //javascript & react is pretty much based off of using states
  //state are defined as the first element and setter f(x) is 2nd 
  //definition of using react & javascript 

  const [state, setState] = useState('')
  const [text, setText] = useState('')

  //allows you to push routes and go to different pages 
  const history = useHistory() 


  //might see this as componentmount 
  //async = asynchronous function, does not do anything until state is updated with stepstate
  //rerenders the component
  //only then changes its appearance based on how you manipulate the state
  useEffect(async () => {
    //allows you to change what you want to update
    // if state was setState === 'example', console log
    if (state === 'example') {
      console.log('success')
    }
    
    //goes to localhost:3000/clicked
    if(state === 'clicked!') {
      history.push('/clicked')
    }
  }, [state])

  return (
    //components are returned here, what actually appears
    //must be wrapped in a parent component 
    //e is defined as the argument of a function
    //javascript inside components are defined as {insert javascript here}

    //even though text is changed, useeffect will not run because only [state]

    <>
      <Organize>
        <Title>NETS 213 Final</Title>
        <Text> Enter a stock here: </Text>
        <Styledinput onChange={e => setText(e.target.value)}/> 
        <Button onClick={() => setState('clicked!')}>Enter here!</Button>
      </Organize>
    </>
  )
}

export default Homepage
