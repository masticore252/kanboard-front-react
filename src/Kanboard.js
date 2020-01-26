import React from 'react'

import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

import Column from './Column'
import arrayMove from "array-move";
import { DragDropContext } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  container: {
    height: "85vh",
    display: "flex",
    alignItems: "stretch"
  },
}))

const Kanboard = ({ columns, setColumns }) => {

  const classes = useStyle()

  const children = columns.map(column => <Grid item xs key={column.id}><Column data={column} /></Grid>);

  const onDragEnd = result => {
    const { draggableId, source, destination } = result 

    if (!destination) {
      return null
    }

    // if source and destination columns are the same, we just need to move the element within the array
    if (destination.droppableId === source.droppableId) {
      setColumns(currentColumns => {

        let newColumns = [...currentColumns]

        let colIndex = newColumns.findIndex(e => e.id === destination.droppableId)

        newColumns[colIndex].tasks = arrayMove(
          newColumns[colIndex].tasks,
          source.index,
          destination.index
        )

        return newColumns
      })

    } else {
      setColumns(currentColumns => {

        let newColumns = [...currentColumns]

        let sourceColumnIndex      = newColumns.findIndex(e => e.id === source.droppableId )
        let destinationColumnIndex = newColumns.findIndex(e => e.id === destination.droppableId )

        let draggedTask = null
        newColumns[sourceColumnIndex].tasks = newColumns[sourceColumnIndex].tasks.filter(t => {
          if (t.id !== draggableId){
            return true
          } else {
            draggedTask = t
            return false
          }
        })

        let destinationTasks = newColumns[destinationColumnIndex].tasks
        let newDestinationTasks = destinationTasks.slice(0,destination.index)
        newDestinationTasks.push(draggedTask)
        newColumns[destinationColumnIndex].tasks = newDestinationTasks.concat(destinationTasks.slice(destination.index))

        return newColumns
      })
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