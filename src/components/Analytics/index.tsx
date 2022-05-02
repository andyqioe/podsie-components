import React from "react";
import { Paper, Typography } from '@material-ui/core'
// Icon imports

/* import OverallActivity from '../Icons/OverallActivity.png'; */
import PersonalDeck from '../Icons/PersonalDeck.png'
// Simple graphics for analytics


export default function Analytics({w = 360, txt = 'Personal Deck Analytics', imgsr = PersonalDeck}) {
   return (
      <Paper
         elevation={6}
         style={
            {
               height: w * 0.5625,
               width: w,
               display: 'flex',
               position: 'relative',
               alignItems: 'center',
               borderRadius: 15,
            }
         }
      >
         <div style={{display: 'flex', width: '100%', flexDirection: 'row', padding: '10%'}}>
            <img 
               src={imgsr}
               style={
                  {
                     width: '30%',
                     height: 'auto'
                  }
               }
            >

            </img>

            <Typography 
               variant='h3'
               style={
                  {
                     fontWeight: 'bolder',
                     fontSize: 16,
                     width: '70%',
                     color: "#053B48",
                     display: 'flex',
                     alignItems: 'center',
                     paddingLeft: '2%'
                  }
               }
            > 
                  Personal Deck Analytics
            </Typography>
         </div>
      </Paper>
   )
}