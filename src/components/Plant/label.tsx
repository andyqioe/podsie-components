import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { CircularProgress } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) => ({
  textDisplay: {
    fontSize:12,
    color:"white",
    paddingTop:10,
  },
  circleOverlap: {
    position: 'absolute'
  }
}));

function LinearProgressWithLabel(props) {
  const classes = useStyles()
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography className={classes.textDisplay} variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

function CircularProgressWithLabel(props) {
  const classes = useStyles()
  return (
    <Box className={props.className}>
        <CircularProgress 
          variant="determinate"
          color="primary"
          size={360}
          thickness={2}
          value={props.value}
        />
    </Box>
  );
};

/* <Box minWidth={35}>
        <Typography className={classes.textDisplay} variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box> */
export { CircularProgressWithLabel, LinearProgressWithLabel };

