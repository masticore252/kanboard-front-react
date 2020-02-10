import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';

import BoardSelector from './BoardSelector'
import Kanboard from './Kanboard';
import Login from './Login'

import { makeStyles } from '@material-ui/core/styles';
import { Router } from "@reach/router";

const useStyle = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
  },
  toolBar: {
    display:'flex',
    justifyContent: 'space-between'
  }
}))

const App = () => {
  const classes = useStyle()

  return <>
    <AppBar position='static' className={classes.appBar}>
      <ToolBar className={classes.toolBar}>
        <h1>Kanban Board</h1>
        <BoardSelector/>
      </ToolBar>
    </AppBar>

    <Router>
      <Login    path='/' />
      <Kanboard path='/dashboard' />
    </Router>
  </>;
}

export default App;
