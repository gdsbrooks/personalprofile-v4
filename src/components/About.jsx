import { Box, Typography, Paper, Stack, LinearProgress, Divider } from '@mui/material'
import facePic from '../resources/clear-bg-profile.png'
import React from 'react'

const skillset = [
  {
    group: '',
    skills: [
      { name: 'JavaScript ES6', rating: 6 / 10 }
    ]
  },
  {
    group: 'Frontend',
    skills: [
      { name: 'React', rating: 6 / 10 },
      { name: 'HTML5/CSS3', rating: 7 / 10 },
      { name: 'Bootstrap 5', rating: 6 / 10 },
      { name: 'Material UI', rating: 6 / 10 },
    ]
  },
  {
    group: 'Backend',
    skills: [
      { name: 'NodeJS', rating: 3 / 10 },
      { name: 'MongoDB', rating: 3 / 10 },
      { name: 'Express', rating: 3 / 10 },
      { name: 'REST APIs', rating: 4 / 10 }
    ]
  },
  {
    group: 'DevOps',
    skills: [

      { name: 'Git', rating: 3 / 10 },
      { name: 'CI/CD', rating: 3 / 10 },
      { name: 'Agile', rating: 3 / 10 }
    ]
  }
];

function About() {
  return (
    <React.Fragment>
      <Stack direction='row' sx={{ flexWrap: 'wrap', gap: 2}}>
        <Paper elevation={2} sx={{}}>
          baljadlkjgag aldkfjalkdjg alkjgalkjglkjq aglksglkajglkj aslkjs;glkjqrglkj alkjq;lgkqglkj
        </Paper>
        <Paper elevation={2} sx={{px: 2, width: '100%', mx:'auto', maxWidth: '200px'}}>
          <Stack spacing={1}>
            <Typography variant='h5'>Skill Summary</Typography>

            {skillset.map((skill) => {
              return (
                <Box>
                  <Typography variant='h6'>
                    {skill.group}
                  </Typography>
                  {skill.skills.map((i) => {
                    return (
                      <Stack sx={{ my: 2 }}>
                        <Typography variant='body'>
                          {i.name}
                        </Typography>
                        <LinearProgress sx={{ }} variant="determinate" value={i.rating * 100} />
                      </Stack>
                    )
                  })}
                </Box>
              )
            })}
          </Stack>
        </Paper>
      </Stack>
    </React.Fragment>
  )
}

export default About

