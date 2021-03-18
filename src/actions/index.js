/**
 * const x = function()->type : 'some reducer value'
 * */

let counter = 0

export const addPost = (title, image, text) => ({
  type: 'ADD_POST',
  id: counter++,
  title,
  image,
  text,
})

export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})

export const editPost = (title, image, text, id) => ({
  type: 'EDIT_POST',
  id,
  title,
  image,
  text,
})

export const cancelPost = id => ({
  type: 'CANCEL_POST',
  id,
})

export const IntroStatus = {
  EDIT_INTRO: 'EDIT_INTRO',
  CANCEL_INTRO: 'CANCEL_INTRO',
  SAVE_INTRO: 'SAVE_INTRO',
}

export const updateStatus = status_intro => ({
  type: 'UPDATE_STATUS',
  status_intro,
})

export const editIntro = (text, image) => ({
  type: 'EDIT_INTRO',
  text,
  image,
})

export const cancelIntro = () => ({
  type: 'CANCEL_INTRO',
})

export const saveIntro = (text, image) => ({
  type: 'SAVE_INTRO',
  text,
  image,
})
