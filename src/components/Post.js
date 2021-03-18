import React, { useState } from 'react'
import { connect } from 'react-redux'
import s from 'styled-components'
import Popup from 'reactjs-popup'

import { editPost, deletePost } from '../actions'

const Styledpost = s.div`
  width: 350px;
  height: 350px;
  border-width: 3px;
  border-style: solid;
  border-color: #B6CFCA;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  align-items: center
`
const Styledbutton = s.button`
  background-color: #F2ECAD;
  width: 25%;
  height: 10%;
  font-size: 14px;
  font-family: monospace;
  border-width: 2px;
  border-radius: 5px;
  border-color: #F3F3F3
`

const Styledbutton1 = s.button`
  width: 20%;
  height: 10%;
  font-size: 16px;
  font-family: monospace;
  border-width: 1px;
  border-radius: 5px;
  position:relative;
  border-color: #F3F3F3
`
const Styledmenu = s.div`
  width: 400px;
  height: 400px;
  border-width: 2px;
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

const Container = s.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 25px
`

const Helper = ({ dispatchEditPost, dispatchDeletePost, p}) => {
  const [newTitle, setNewTitle] = useState(p.title)
  const [newImage, setNewImage] = useState(p.image)
  const [newDesc, setNewDesc] = useState(p.text)
  const [popUp, setNewPop] = useState(false)

  return (
    <>
      <Container>
        <Styledpost>
          <h1 style={{fontFamily: 'monospace'}}> {p.title}</h1>
          <img style={{maxWidth: '250px', maxHeight: '250px'}} src = {p.image}/>
          <p style={{fontFamily:'monospace'}}> {p.text} </p>
          <Styledbutton
            onClick={() => {
              setNewPop(true)
            }}
          >
            Edit Post
          </Styledbutton>
        </Styledpost>
      </Container>
      <Popup open={popUp} closeOnDocumentClick onClose={!popUp} modal nested>
        <Styledmenu>
          <ul>
            <Styleddesc style={{ top: '40px' }}>Title</Styleddesc>
            <Styleditem style={{ top: '85px' }} value={newTitle} onChange={e => setNewTitle(e.target.value)} />
            <Styleddesc style={{ top: '120px' }}>Image</Styleddesc>
            <Styleditem style={{ top: '165px' }} value={newImage} onChange={f => setNewImage(f.target.value)} />
            <Styleddesc style={{ top: '200px' }}>Desc</Styleddesc>
            <Styleditem style={{ top: '245px' }} value={newDesc} onChange={g => setNewDesc(g.target.value)} />
          </ul>
          <Styledbutton1
            style={{ backgroundColor: '#B2F2AD', left: '20px', top: '310px' }}
            onClick={() => {
              dispatchEditPost(newTitle, newImage, newDesc, p.id)
              setNewPop(false)
            }}
          >
            Save
          </Styledbutton1>
          <Styledbutton1
            style={{ backgroundColor: '#ADF2E4', left: '35px', top: '310px' }}
            onClick={() => setNewPop(false)}>
            Cancel
          </Styledbutton1>
          <Styledbutton1
            style={{ backgroundColor: '#F39D88', left: '50px', top: '310px' }}
            onClick={() => {
              dispatchDeletePost(p.id)
              setNewPop(false)
            }}
          >
            Delete
          </Styledbutton1>
        </Styledmenu>

      </Popup>
    </>
  )
}

const Post = ({ dispatchEditPost, dispatchDeletePost, post }) => (
  <>
    {post.map(p => (
      <Helper
        dispatchEditPost={dispatchEditPost}
        dispatchDeletePost={dispatchDeletePost}
        p={p}
        key={p.id}
      />
    ))}
  </>
)

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (title, image, text, id) => dispatch(editPost(title, image, text, id)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
