import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Grid, Card, CardContent } from '@material-ui/core'

const Task = ({data, index}) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <Grid
          item
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              {data.name}
            </CardContent>
          </Card>
        </Grid>
      )}
    </Draggable>
  )
}

export default Task