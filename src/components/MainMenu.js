import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  iconClass: {
    color: 'white'
  }
}));


function MainMenu() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.grow} position="static">
        <Toolbar>
          <Link to="/">
          <HomeIcon fontSize="large" className={classes.iconClass}/>
          </Link>
          <Link to="/Contact">
          <MessageIcon fontSize="large" className={classes.iconClass}/>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    );
  }

export default MainMenu;