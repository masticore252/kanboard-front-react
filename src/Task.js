import React from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import RemoveCircle from '@material-ui/icons/RemoveCircle'

import { Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  display: "flex",
  
  justifyContent: "space-between "
})

const Task = ({data, index}) => {

  const classes = useStyle()
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <Grid
          item
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card variant="outlined">
            <CardContent className={classes.cardContent}>
              <div>{data.name}</div>
              <IconButton>
                <RemoveCircle/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Draggable>
  )
}

export default Task