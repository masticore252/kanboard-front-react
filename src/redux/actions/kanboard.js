import { baseUrl } from "../../configuration";

export const getKanbanBoard = (id) => (dispatch) => {

  return dispatch => fetch(baseUrl + '/board/' + id)

    .then(response => response.json())

    .then(response => dispatch({
        type: 'SET_COLUMNS',
        payload: {
          currentId: id,
          columns: response.columns,
        },
    }))

    .catch(error => dispatch({
        type: 'SHOW_ERROR_MESSAGE',
        payload: {
          type: 'error',
          message: 'Error getting board information, try again later',
        }
    }))
}

export const changeBoard = (id) => ({
  type: 'CHANGE_BOARD',
  payload: { id },
})

export const moveTaskSameColumn    = (columnId, sourceIndex, destinationIndex) => ({
  type: 'MOVE_TASK',
  payload: {
    sourceColumnId:      columnId,
    destinationColumnId: columnId,
    sourceIndex,
    destinationIndex,
  }
})

export const moveTaskanotherColumn = (sourceColumnId, sourceIndex, destinationColumnId, destinationIndex) => ({
  type: 'MOVE_TASK',
  payload: {
    sourceColumnId,
    destinationColumnId,
    sourceIndex,
    destinationIndex,
  }
})

