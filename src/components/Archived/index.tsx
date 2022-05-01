import React from 'react';
import { Tab, Theme, LinearProgress, Container, Paper, Box } from '@material-ui/core';
import { makeStyles, CircularProgress, Typography, Backdrop, Button } from '@material-ui/core';
import CircularPie from '../CircleProg';
import { LinearProgressWithLabel, CircularProgressWithLabel }from './label';
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
    justifyContent: 'flex-start',
    /* height: 500, */
    /* backgroundColor: "red", */
    width:500
  },
  nameDisplay: {
    fontSize:36,
    color:"white",
  },
  plantDisplay:{
    /* display: 'flex',
    justifyContent: 'center', */
    position: 'relative',
    width: `calc(100% - ${theme.spacing(10)}px)`, 
    height: `calc(100% - ${theme.spacing(10)}px)`,
    margin: theme.spacing(5, 0),
    padding: theme.spacing(5)
  },
  plantImg: {
    width: '100%',
    height: '100%'
  },

  paperDisplay: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: "#094B5A",
    borderRadius: 15,
    padding: theme.spacing(5)
  },
  progressDisplay:{
    position: 'absolute',
    /* display: 'flex', */
    justifyContent: 'center',
    left: 0,
    top: -20,
    borderRadius:15,
    marginTop:10,
    paddingTop:10,
    zIndex: 100,
    overflow: 'visible'
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



const Plant = ({progressPercent, level, size = 360}) => {
  const [lvl, setLvl] = React.useState(1);
  const classes = useStyles();
  /* const classes = useStyles(); */
//   const [value, setValue] = React.useState('1');
//   const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
//     setValue(newValue);
//   };

  return (
    <div 
      style={{
        margin: size / 3
      }}
    >
      <div>
        
      </div>
    </div>
  );
};// 

/* 
<Container className={classes.tableContainer}>
      <Paper className={classes.paperDisplay} color="primary">
        <div className={classes.nameDisplay}>Andy's Plant</div>
        <div className={classes.plantDisplay}>
          <img className={classes.plantImg} src={plantLevelMap[level]}/>
          <CircularProgressWithLabel className={classes.progressDisplay} variant="determinate" color="primary" value={progressPercent} />
        </div>
      </Paper>
    </Container> 
*/
/* <CircularProgress 
          classNane={classes.progressDisplay}
          variant="determinate" 
          value={60} 
          size={100}
        /> */
export default Plant;
