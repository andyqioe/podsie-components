import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paperStyle: {
    backgroundColor: 'rgba(9, 75, 90, .9)',
    padding: 50,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column'
  },
  regularPrint: {
    color: '#fff',
    fontSize: 36,
    padding: 20
  },
  finePrint: {
    color: '#fff',
    fontSize: 16,
    fontStyle: "italic",
    paddingTop: 10
  }
}));

export default function SimpleBackdrop(props) {
  const classes = useStyles();

  // Function passing from parent
  const handleClose = props.close
  const handleToggle = props.toggle

  const Success = () => {return (<Paper className={classes.paperStyle}>
  <span className={classes.regularPrint}> That's correct! You've gained 10 xp. </span>
  <span className={classes.finePrint}> Click anywhere to continue. </span>
</Paper>)}

  const Failed = () => {return (<Paper className={classes.paperStyle}>
    <span className={classes.regularPrint}> Oops, that doesn't look right! You've gained 5 xp for your efforts </span>
    <span className={classes.finePrint}> Click anywhere to continue. </span>
  </Paper>)}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Submit question
      </Button>
      <Backdrop className={classes.backdrop} open={props.isOpen} onClick={handleClose}>
        <Success />
      </Backdrop>
    </div>
  );
}