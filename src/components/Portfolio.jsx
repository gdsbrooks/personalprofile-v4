import { Box, Card, CardHeader, CardMedia, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import {portfolio}  from '../resources/portfolio'
function Portfolio() {
  return (
   <React.Fragment>

{/* The SignChef.com */}
   <Paper>
   <Typography variant='h4'>TheSignChef.com</Typography>
   <Typography variant='subtitle2'>Frontend Developer </Typography>
    <Typography variant='body'>
   <p>A contract role for a nationwide high-volume sign & display print media manufacturer located in South Carolina, USA. </p>
   
   <p>As a frontend developer I increased <strong>site interaction</strong> (<emphasis>+50%</emphasis>) and <strong>vist length</strong> (<emphasis>+30%</emphasis>) by reconfiguring the most visited pages on the site to be more <strong>engaging, contentful and intuative</strong> to the user's journey.</p>

   <p> Examples of the new designs I delivered can be seen below. </p>
  </Typography>

  {/* //////////////3D Signs ////////////////////*/}

  <Paper className='side-by-side' > 
  <Typography variant='h5'>Improved 3D Signs Page</Typography> 
  <Paper sx={ {border: '1px solid pink', p:5}}>
  <Typography variant='h6'>Before</Typography>
  <Stack direction='row'>
  <ul>
    <li>Title is confusing</li>
    <li>Text, images and links not organised</li>
    <li>no obvious next step for user</li>
    <li>No clear heierarchy of information</li>
    <li>Information inconsistent, irregular</li>
  </ul>
  <img src={portfolio.letters.before} alt='original 3D Letters page'/> 
  </Stack>
  </Paper>
  <Paper>
  <Typography variant='h6'>After</Typography>
  <Stack direction='row'>

  <ul>
  <li>Clear page title with simple message</li>
  <li>Business services and guarantees hilighted</li>
  <li>Primary action on page: 'Get a quote'</li>
  <li>Sign Name, image, description grouped together</li>
  <li>Key selling point of each type highlighted</li>
  </ul>
  <img src={portfolio.letters.after} alt='Updated and Improved 3D Letters page'/>
  </Stack>
  </Paper>

  </Paper>

  {/* //////////////Custom Outdoor Signs ////////////////////*/}

  <Paper className='side-by-side' >
  <Typography variant='h5'>Improved 3D Signs Page</Typography>
  <Paper sx={ {border: '1px solid pink', p:5}}>
  <Typography variant='h6'>Before</Typography>
  <Stack direction='row'>
  <ul>
    <li>Title is confusing</li>
    <li>Text, images and links not organised</li>
    <li>no obvious next step for user</li>
    <li>No clear heierarchy of information</li>
    <li>Information inconsistent, irregular</li>
  </ul>
  <img src={portfolio.outdoors.before} alt='original 3D Letters page'/> 
  </Stack>
  </Paper>
  <Paper>
  <Typography variant='h6'>After</Typography>
  <Stack direction='row'>

  <ul>
  <li>Clear page title with simple message</li>
  <li>Business services and guarantees hilighted</li>
  <li>Primary action on page: 'Get a quote'</li>
  <li>Sign Name, image, description grouped together</li>
  <li>Key selling point of each type highlighted</li>
  </ul>
  <img src={portfolio.outdoors.after} alt='Updated and Improved 3D Letters page'/>
  </Stack>
  </Paper>

  </Paper>

  {/* //////////////Printed Flat Signs ////////////////////*/}

  <Paper className='side-by-side' >
  <Typography variant='h5'>Improved 3D Signs Page</Typography>
  <Paper sx={ {border: '1px solid pink', p:5}}>
  <Typography variant='h6'>Before</Typography>
  <Stack direction='row'>
  <ul>
    <li>Title is confusing</li>
    <li>Text, images and links not organised</li>
    <li>no obvious next step for user</li>
    <li>No clear heierarchy of information</li>
    <li>Information inconsistent, irregular</li>
  </ul>
  <img src={portfolio.printed.before} alt='original 3D Letters page'/> 
  </Stack>
  </Paper>
  <Paper>
  <Typography variant='h6'>After</Typography>
  <Stack direction='row'>

  <ul>
  <li>Clear page title with simple message</li>
  <li>Business services and guarantees hilighted</li>
  <li>Primary action on page: 'Get a quote'</li>
  <li>Sign Name, image, description grouped together</li>
  <li>Key selling point of each type highlighted</li>
  </ul>
  <img src={portfolio.printed.after} alt='Updated and Improved 3D Letters page'/>
  </Stack>
  </Paper>

  </Paper>
   
   </Paper>

   </React.Fragment>
  )
}

export default Portfolio

