import React from 'react';
import { Tab, Theme, LinearProgress, Container, Paper, Box } from '@material-ui/core';
import { makeStyles, CircularProgress, Typography, Backdrop, Button } from '@material-ui/core';

import LinearProgressWithLabel from './label';
/* Plant */
import plant from './plant.png';
import plant2 from './plant2.png';


const useStyles = makeStyles((theme: Theme) => ({
  outerWrapper: {
    /* display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center' */
  },
  tableContainer: {
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    height: '30%',
    /* backgroundColor: "red", */
    width:'50%'
  },
  nameDisplay: {
    fontSize:36,
    color:"white",
  },
  plantDisplay:{
    width: '70%',
    padding: theme.spacing(5)
  },
  paperDisplay: {
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: "#094B5A",
    borderRadius: 15,
    padding: theme.spacing(5)
  },
  progressDisplay:{
    borderRadius:15,
    marginTop:10,
    paddingTop:10
  },
  circularDisplay:{
    height: 500,
    width: 500
  }
}));

const plantLevelMap = {
  1: plant,
  2: plant2
}


const Plant = ({progressPercent, level}) => {
  const [lvl, setLvl] = React.useState(1);
  const classes = useStyles();
  /* const classes = useStyles(); */
//   const [value, setValue] = React.useState('1');
//   const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
//     setValue(newValue);
//   };

  return (
    <Container className={classes.tableContainer}>
      <Paper className={classes.paperDisplay} color="primary">
        <div className={classes.nameDisplay}>Andy's Plant</div>
        <img className={classes.plantDisplay} src={plantLevelMap[level]}/>
        <LinearProgressWithLabel className={classes.progressDisplay} variant="determinate" color="primary" value={progressPercent} />
      </Paper>
    </Container> 
  );
};

export default Plant;
