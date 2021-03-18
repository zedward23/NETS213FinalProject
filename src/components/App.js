import React from 'react'

import SaveIntro from './SaveIntro'
import EditIntro from './EditIntro'
import AddPost from './AddPost'
import Post from './Post'

const App = () => (
  <>
    <h1 style={{ fontFamily: 'monospace', fontSize: '38px' }}>Hey this is me!</h1>
    <SaveIntro />
    <EditIntro />
    <h1 style={{
      fontFamily: 'monospace', fontSize: '38px', position: 'relative', marginBottom: '25px',
    }}
    >
      Blog Posts
    </h1>
    <AddPost />
    <Post />
  </>
)
export default App
