const initialState = {

  columns: [
    {
      id: '',
      name: '',
      description: '',
      tasks: [
        {
          id: '',
          name: '',
          column_id: '',
          description: '',
        },
      ]
    },
  ],
  
}

const kanboardReducer = (prevState = initialState, action) => {
  switch (action.type) {

    case 'GET_KANBAN_BOARD':
      return prevState

    default:
      return prevState

  }
}

export default kanboardReducer