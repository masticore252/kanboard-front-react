import React from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from "@material-ui/icons/AddCircle";

import { Droppable } from 'react-beautiful-dnd'

import Task from './Task'

const Column = ({ data }) =>  {

  const {id, name, description, tasks} = data

  const tasksComponents = tasks.map((task, index) => ( <Task key={task.id} data={task} index={index}/>))

  return (
    <Droppable droppableId={id}>
      {(provided) => {
        return (<>
          <Card>
            <CardActions>
              <CardHeader title={name}/>
              <IconButton aria-label="New Task"><AddCircle/></IconButton>
            </CardActions>
            <CardContent innerRef={provided.innerRef} {...provided.droppableProps} >
              <Grid item xs container direction="column"spacing={2} alignItems="stretch">
                {tasksComponents}
              </Grid>
            </CardContent>
            {provided.placeholder}
          </Card>
        </>)
      }}
    </Droppable>
  )
}

export default Column
