import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Droppable } from 'react-beautiful-dnd'

import Task from './Task'
import { Grid } from '@material-ui/core';

const Column = ({ data }) =>  {

  const {id, name, description, tasks} = data

  const tasksComponents = tasks.map((task, index) => ( <Task key={task.id} data={task} index={index}/>))

  return (
    <Droppable droppableId={id+''}>
      {(provided) => {
        return (<>
          <Card>
            <CardContent innerRef={provided.innerRef} {...provided.droppableProps} >
              <Typography>
                {name}
              </Typography>
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
