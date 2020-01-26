import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';

import Kanboard from './Kanboard';
import Login from './Login'

import { makeStyles } from '@material-ui/core/styles';
import { baseUrl } from "./configuration";
import { Router } from "@reach/router";

const useStyle = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
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
      <ToolBar><h1>Kanban Board</h1></ToolBar>
    </AppBar>

    <Router>
      <Login    path='/' />
      <Kanboard path='/dashboard' columns={columns} setColumns={setColumns} />
    </Router>
  </>;
}

export default App;
