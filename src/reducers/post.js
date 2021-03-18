const defaultState = []

const post = (state = defaultState, action) => {
  const {
    type, title, image, text, id,
  } = action

  switch (type) {
    case 'ADD_POST':
      return [
        ...state, {
          title, image, text, id, edit: !state.edit,
        },
      ]
    case 'DELETE_POST':
      return state.filter(p => p.id !== id)
    case 'CANCEL_POST':
      return state.map(p => {
        if (p.id === id) {
          return {
            ...p, edit: !p.edit,
          }
        }
        return p
      })
    case 'EDIT_POST':
      return state.map(p => {
        if (p.id === id) {
          return {
            ...p, title, image, text, id, edit: !p.edit,
          }
        }
        return p
      })
    default:
      return state
  }
}

export default post
