import { Typography, Paper } from '@mui/material'
import facePic from '../resources/clear-bg-profile.png'
import React from 'react'

function About() {
  return (
    <React.Fragment>
    <Paper elevation={2} variation='outlined'>
    <img src={facePic} alt='Photo of George Brooks'/>
    </Paper>
    </React.Fragment>
  )
}

export default About

