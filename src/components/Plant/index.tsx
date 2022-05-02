import React from 'react';
import { Paper, Slider } from '@material-ui/core';
import { Typography, createTheme, ThemeProvider, CircularProgress, LinearProgress } from '@material-ui/core';
/* Plant */
import plant from './imgsrc/plant.png';
import plant2 from './imgsrc/plant2.png';
import NumberEasing from 'react-number-easing';

const plantLevelMap = {
  1: plant,
  2: plant2
}

const Plant = ({progressPercent = 25, level, s = 360}) => {
  const [lvl, setLvl] = React.useState(1);
  const [size, setSize] = React.useState(s);

  let value = 0;
  
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
      width: 'min-content',
      background: "white",
      borderRadius: 16,
      padding: 24,
      color: 'white'
    },
    innerPlantWrapper: {
      margin: size / 3
    },
    linearDisplay: {
      display: 'flex',
      position: 'relative',
      width: 'auto',
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
        fontSize: '36px',
        color: '#84a5ac',
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
  });

  const thickness = 2.5;
  return (
    <Paper style={styles.plantWrapper} elevation={12}>

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
                <NumberEasing value={progressPercent} speed={400} decimals={0} ease="cubicInOut" />
              </Typography>
          </ThemeProvider>
        </div>
          
      </div>
      
      <LinearProgress
          variant="determinate"
          value={progressPercent}
          thickness={thickness}
          style={{ width: 400, marginTop: 30, marginBottom: 30 }}
        />

    </Paper>
  );
  /* DEBUG -----------------
  <Slider
        onChange={(_, value) => setSize(value)}
        value={size}
        min={100}
        max={800}
        style={{ width: 400, marginTop: 40 }}
      />
  
  --------------------------- */
};

export default Plant;
