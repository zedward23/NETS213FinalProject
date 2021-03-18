import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'

import { editIntro } from '../actions'
import intro from '../reducers/intro'

const Styledbutton = s.button`
  background-color: #F2ECAD;
  width: 5%;
  height: 5%;
  font-size: 16px;
  font-family: monospace;
  border-width: 2px;
  border-color: #F3F3F3;
  border-radius: 5px;
  position: fixed;
  top: 18px;
  right: 75px
`

const EditIntro = ({ dispatchEditIntro, intro }) => {
  return (
    <>
      <Styledbutton
        onClick={() => dispatchEditIntro(intro.text, intro.image)}
        style={{ visibility: intro.edit? 'hidden' : 'visible' }}
      >
        Edit
      </Styledbutton>
    </>
  )
}
const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (text, image) => dispatch(editIntro(text, image)),
})

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditIntro)
