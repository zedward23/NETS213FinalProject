import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import propTypes from 'prop-types'

import { cancelIntro } from '../actions'
import intro from '../reducers/intro'

const Styledbutton = s.button`
  background-color: #ADF2E4;
  width: 5%;
  height: 10%;
  font-size: 16px;
  font-family: monospace;
  border-width: 2px;
  border-radius: 5px;
  position: relative; 
  left: 115px;
  border-color: #F3F3F3
`

const CancelIntro = ({ dispatchCancelIntro, intro}) => (
  <>
    <Styledbutton
      onClick={() => dispatchCancelIntro()}
      style={{ visibility: intro.edit? 'visible' : 'hidden' }}>
      Cancel
    </Styledbutton>
  </>
)

const mapDispatchToProps = dispatch => ({
  dispatchCancelIntro: () => dispatch(cancelIntro()),
})

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, mapDispatchToProps)(CancelIntro)
