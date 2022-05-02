import React from 'react';
import { Paper, Slider } from '@material-ui/core';
import { Typography, createTheme, ThemeProvider, CircularProgress, withStyles } from '@material-ui/core';
import { LinearProgressWithLabel }from './label';
/* Plant */
import plant from './plant.png';
import plant2 from './plant2.png';
import NumberEasing from 'react-number-easing';

const plantLevelMap = {
  1: plant,
  2: plant2
}

const Plant = ({progressPercent, level, s = 360}) => {
  const [lvl, setLvl] = React.useState(1);
  const [size, setSize] = React.useState(s);
  const [count, setCount] = React.useState(50);
  const [previousState, setPrev] = React.useState(count);

  let value = 0;
  progressPercent = count;
  
  const styles = {
    innerContainer: {
      position: 'relative',
      width: size,
      display: 'flex',
      justifyContent: 'center'
    },
    plantWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'min-content', /*  */
      background: "white",
      borderRadius: 16,
      padding: 24,
      color: 'white'
    },
    innerPlantWrapper: {
      margin: size / 3
    },
    linearDisplay: {
      width: '100%',
      borderRadius: 10
    },
    imageStyle: {
      width: '100%'
    },
    typoThemes: {
      fontFamily: 'IBM Plex Sans'
    },
    circAbsolute: {
      position: 'absolute',
      top: -size/3
    }
  }

  const progStyles = {
    widget: {
      position: 'absolute',
      top: -size / 3.1 /* Offset of the circle from the top of the container */
    },
    progressbar: {
      fill: '#84a5ac',
      strokeLinecap: 'round'
    },
    progressbar2: {
      fill: '#84a5ac'
    },
    progressbarbg: {
      fill: '#ddd'
    },
    progressbarcirc: {
      fill: '#ddd'
    },
    progresslabel: {
      fill: '#aaa',
      fontFamily: 'IBM Plex Sans',
      fontSize: '36px',
      textAnchor: 'middle',
      dominantBaseline: 'central'
    },
    labelwrapper: {
      color: '#84a5ac',
      width: '100%', 
      position: 'relative', 
      display: 'flex', 
      justifyContent: 'center', 
      top: size/3
    }
  }

  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
  });

  // Global overrides for circle
  /* const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      '.MuiCircularProgress-circleDeterminate': {
        transitionProperty: 'stroke-dashoffset',
        transitionDuration: '1.5s',
        transitionTimingFunction: 'ease-in-out',
        transitionDelay: '1s'
      },
    },
  })(CircularProgress); */
  /* const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(CircularProgress); */

  /* const CircularProg = withStyles({
      circleDeterminate: {
        transitionProperty: 'transform',
        transitionDuration: '1.5s',
        transitionTimingFunction: 'ease-in-out',
        transitionDelay: '1s'
        transition: theme.transitions.create('stroke-dashoffset')
      },
    },
  )(CircularProgress); */
  
  /* const styles = makeStyles()
  // … */
  

  const thickness = 2.5;
  return (
    <Paper style={styles.plantWrapper} elevation={12}>

      <button onClick={() => setCount(count + 11)}>click me</button>
      <ThemeProvider theme={theme}>
        <Typography variant='body1'> Andy's Plant </Typography>
      </ThemeProvider>
      <div style={styles.innerPlantWrapper}>

        <div style={styles.innerContainer}>
        
            <div style={{position: 'absolute', top: size/-4}}>
              <CircularProgress
                value={100}
                variant="determinate"
                thickness={thickness}
                size={size * 1.5}
                style={{ position: "absolute", zIndex: 0, left: 0, color: '#ddd' }}
              />
              <CircularProgress
                value={progressPercent}
                variant="determinate"
                thickness={thickness}
                size={size * 1.5}
              />
          </div>
        
      
          <img 
            src={plantLevelMap[lvl]}
            style={styles.imageStyle}
          ></img>
        </div>

        <div style={progStyles.labelwrapper}>
          <ThemeProvider theme={theme}>
              <Typography
                variant='body1'
                className='progress-label' 
                style={progStyles.progresslabel}>
                <NumberEasing value={count} speed={400} decimals={0} ease="cubicInOut" />
              </Typography>
          </ThemeProvider>
        </div>
      </div>

      <LinearProgressWithLabel 
            style={styles.linearDisplay}
            variant="determinate"
            value={progressPercent}
            thickness={2}
            size={1.5 * size}
          />

      <Slider
        onChange={(_, value) => setSize(value)}
        value={size}
        min={100}
        max={800}
        style={{ width: 400, marginTop: 40 }}
      />

    </Paper>
  );
  /* Remove slider when done debugging responsiveness */
};

export default Plant;
