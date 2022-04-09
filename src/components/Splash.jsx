import React from 'react'
import {Typography, Stack} from '@mui/material'

function Splash() {
  return (
    <React.Fragment>
    <Stack justifyContent='center' spacing={2} sx={{ height: '100vh'}}>
    <Typography variant='body2' color='secondary'>Hello! I'm</Typography>
        <Typography variant='h1'>George Brooks</Typography>
        <Typography variant='h2'>I build things for the web.</Typography>
        <Typography variant='body1'>
        I'm a web developer keen on creating powerful web apps and dynamic, responsive front-end designs. 
        <br/>
        I enjoy learning to use new technologies and solving problems with simple, elegant solutions.</Typography>
    </Stack>
    </React.Fragment>
  )
}

export default Splash