import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd';

const Kanboard = ({ columns }) => {

  const children = columns.map(column => <Grid item xs key={column.id}><Column data={column} /></Grid>);

  const onDragEnd = () => null

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {children}
      </DragDropContext>
    </Grid>
  );
};

export default Kanboard;