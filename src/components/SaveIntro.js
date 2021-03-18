import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

import { saveIntro } from '../actions'
import intro from '../reducers/intro'

import CancelIntro from './CancelIntro'

const Styledbutton = s.button`
  background-color: #B2F2AD;
  width: 5%;
  height: 10%;
  font-size: 16px;
  font-family: monospace;
  border-width: 2px;
  border-radius: 5px;
  position: relative;
  left: 100px;
  border-color: #F3F3F3

`
const Divide = s.div`
  position: relative;
  bottom: 25px;
  z-index: 5px
`
const Divide1 = s.div`
  position: relative;
  top: 5px;
`

const Divide2 = s.div`
  position: relative
`
const Banner = s.div`
  width: 100%;
  height: 400px;
  border-width: 2px;
  border-style: solid;
  border-color: #FAE9E4;
  top: 75px;
  background-color: #FCF4F3;
  z-index: -5
`

const Inputbox = s.input`
  position: relative;
  border-radius: 3px;
  border-width: 1.5px;
  width: 1225px;
  height: 35px;
  left: 100px;
`

const Inputbox1 = s.input`
  position: relative;
  border-radius: 3px;
  border-width: 1.5px;
  width: 1225px;
  height: 200px;
  left: 100px
`
const Description = s.h2`
  font-family: monospace;
`

const SaveIntro = ({ dispatchSaveIntro, intro}) => {
  const [input, setInput] = useState('')
  const [imageinput, setImageInput] = useState('')
  return (
    <Banner>
      <Divide style={{ display: intro.edit? 'inline' : 'none'}}>
        <Divide1>
          <Description> Image link </Description>
        </Divide1>
        <Inputbox onChange={e => setImageInput(e.target.value)} />
        <Divide1>
          <Description> Description </Description>
        </Divide1>
        <Inputbox1 onChange={f => setInput(f.target.value)} />
      </Divide>
      <Divide2>
        <Styledbutton
          onClick={() => dispatchSaveIntro(input, imageinput)}
          style={{ display: intro.edit? 'inline' : 'none' }}>
          Save
        </Styledbutton>
        <CancelIntro style={{ display: intro.edit? 'inline' : 'none' }} />
      </Divide2>
      <Divide2 style={{ display: intro.edit? 'none' : 'inline' }}>
        <img src={intro.image} style={{maxWidth: '300px', maxHeight: '300px', left: '50px', position: 'relative'}}/>
      </Divide2>
      <Description style={{
        position: 'absolute', left: '400px', top: '150px', display: intro.edit? 'none' : 'inline',
      }}
      >
        {intro.text}
      </Description>
    </Banner>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchSaveIntro: (text, image) => dispatch(saveIntro(text, image)),
})

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveIntro)
