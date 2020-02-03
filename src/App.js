import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';

import Kanboard from './Kanboard';
import Login from './Login'

import { makeStyles } from '@material-ui/core/styles';
import { Router } from "@reach/router";

const useStyle = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
  },
}))

const App = () => {
  const classes = useStyle()

  return <>
    <AppBar position='static' className={classes.appBar}>
      <ToolBar><h1>Kanban Board</h1></ToolBar>
    </AppBar>

    <Router>
      <Login    path='/' />
      <Kanboard path='/dashboard' />
    </Router>
  </>;
}

export default App;
