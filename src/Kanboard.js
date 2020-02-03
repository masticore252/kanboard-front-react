import React, { useEffect } from 'react'

import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getKanbanBoard, moveTaskSameColumn, moveTaskanotherColumn } from "./redux/actions/kanboard";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "85vh",
    display: "flex",
    alignItems: "stretch"
  },
}))

const Kanboard = () => {

  const dispatch = useDispatch()

  const columns = useSelector(store => store.kanboard.columns)

  const boardId = useSelector(store => store.kanboard.currentBoardId)

  const classes = useStyle()

  const children = columns.map(column => <Grid item xs key={column.id}><Column data={column} /></Grid>);

  useEffect(() => {
    if (!boardId) {
      dispatch(getKanbanBoard(boardId))
    }
  },[boardId, dispatch])

  const onDragEnd = result => {
    const { source, destination } = result 

    if (!destination) {
      return null
    }

    // if source and destination columns are the same, we just need to move the element within the array
    if (destination.droppableId === source.droppableId) {
      dispatch(moveTaskSameColumn(
        destination.droppableId,
        source.index,
        destination.index
      ))
    } else {
      dispatch( moveTaskanotherColumn(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index
      ))
    }
  }

  return (
    <Container className={classes.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3} >
            {children}
        </Grid>
      </DragDropContext>
    </Container>
  );
};

export default Kanboard;