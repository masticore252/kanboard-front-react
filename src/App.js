import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Container from '@material-ui/core/Container'

import Kanboard from './Kanboard';

import { makeStyles } from '@material-ui/core/styles';
import { baseUrl } from "./configuration";

const useStyle = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
  },
  container: {
    height: "85vh",
    display: "flex",
    alignItems: "stretch"

  },
}))

const getBoardData = async (id) => {

  try {

    const response = await fetch(baseUrl + '/board/' + id)
    return await response.json()

  } catch (error) {

    return Promise.resolve(false)

  }
}

const App = () => {
  const classes = useStyle()

  const [columns, setColumns] = useState([])

  useEffect(() =>{
    getBoardData(1).then(board => board ? setColumns(board.columns) : null)
  },[])

  return <>
    <AppBar position='static' className={classes.appBar}>
      <ToolBar>Kanban Board</ToolBar>
    </AppBar>

    <Container className={classes.container}>
      <Kanboard columns={columns} setColumns={setColumns} />
    </Container>
  </>;
}

export default App;
