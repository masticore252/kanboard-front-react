const initialState = {
  columns: [],
  currentBoardId: null,
  availableBoardsIds: [],
}

const kanboardReducer = (prevState = initialState, action) => {
  switch (action.type) {

    case 'SET_COLUMNS':
      return {
        ...prevState,
        currentBoardId: action.payload.id,
        columns: action.payload.columns
      }

    case 'CHANGE_BOARD':
      return {
        ...prevState,
        currentBoardId: action.payload.id,
      }

    case 'MOVE_TASK':
      return prevState

    default:
      return prevState

  }
}

export default kanboardReducer