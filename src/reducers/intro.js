const defaultState = {}

const intro = (state = defaultState, action) => {
  const { type, text, image } = action

  switch (type) {
    case 'EDIT_INTRO':
      return { ...state, edit: !state.edit }
    case 'CANCEL_INTRO':
      return { ...state, edit: !state.edit }
    case 'SAVE_INTRO':
      return {
        ...state, text, image, edit: !state.edit,
      }
    default:
      return state
  }
}

export default intro
