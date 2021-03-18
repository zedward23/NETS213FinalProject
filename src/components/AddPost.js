import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import Popup from 'reactjs-popup'

import { addPost } from '../actions'

const Styledbutton = s.button`
  background-color: #F2ECAD;
  width: 5%;
  height: 5%;
  font-size: 16px;
  font-family: monospace;
  border-width: 2px;
  border-radius: 5px;
  right: 75px;
  border-color: #F3F3F3
`

const Styledbutton1 = s.button`
  width: 20%;
  height: 10%;
  font-size: 16px;
  font-family: monospace;
  border-width: 2px;
  border-radius: 5px;
  position:relative;
  border-color: #F3F3F3
`
const Styledmenu = s.div`
  width: 400px;
  height: 400px;
  border-width: 1.5px;
  border-style: solid;
  border-color: #B6CFB6;
  top: 75px;
  border-radius: 3px;
  align-items: center;
  position: relative;
  background-color: white
`

const Styleditem = s.input`
  width: 350px;
  height: 35px;
  border-radius: 3px;
  border-width: 1.5px;
  border-style: solid;
  border-color: #FAE9E4;
  align-items: center;
  left: 25;
  position: absolute
`

const Styleddesc = s.h2`
  font-family: monospace;
  position: absolute
`

const AddPost = ({ dispatchAddPost, post}) => {
  const [newTitle, setNewTitle] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newDesc, setNewDesc] = useState('')

  const [popUp, setNewPop] = useState(false)

  return (
    <>
      <Styledbutton
        style={{ position: 'fixed' }}
        onClick={() => {
          setNewPop(!popUp); setNewTitle(''); setNewImage(''); setNewDesc('')
        }}
      >
        Add Post
      </Styledbutton>
      <Popup open={popUp} closeOnDocumentClick onClose={!popUp} modal nested>
        <Styledmenu>
          <ul>
            <Styleddesc style={{ top: '40px' }}>Title</Styleddesc>
            <Styleditem style={{ top: '85px' }} onChange={e => setNewTitle(e.target.value)} />
            <Styleddesc style={{ top: '120px' }}>Image</Styleddesc>
            <Styleditem style={{ top: '165px' }} onChange={f => setNewImage(f.target.value)} />
            <Styleddesc style={{ top: '200px' }}>Desc</Styleddesc>
            <Styleditem style={{ top: '245px' }} onChange={g => setNewDesc(g.target.value)} />
          </ul>
          <Styledbutton1
            style={{ backgroundColor: '#B2F2AD', left: '15px', top: '300px' }}
            onClick={() => {
              dispatchAddPost(newTitle, newImage, newDesc); setNewPop(false)
            }}
          >
            Create
          </Styledbutton1>
          <Styledbutton1
            style={{ backgroundColor: '#ADF2E4', left: '30px', top: '300px' }} 
            onClick={() => setNewPop(false)}
          >
            Cancel
          </Styledbutton1>
        </Styledmenu>
      </Popup>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, image, text) => dispatch(addPost(title, image, text)),
})

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
