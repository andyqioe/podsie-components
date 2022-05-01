import React from 'react';
import {CircularProgress} from '@material-ui/core'


export default function CircularProgBuffer({sizeCirc, stylesCirc, percentCirc}) {
   return (
      <CircularProgress 
            style={stylesCirc.circleDisplay} 
            variant="determinate" 
            value={percentCirc} 
            thickness={2}
            size={1.5 * sizeCirc}
      />
   )
};