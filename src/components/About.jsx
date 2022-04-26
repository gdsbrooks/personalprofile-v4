import { Box, Typography, Paper, Stack, LinearProgress, Divider, Grid } from '@mui/material'
import facePic from '../resources/clear-bg-profile.png'
import React from 'react'
import { lineHeight } from '@mui/system';

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
      <Grid container spacing={2} justifyItems='stretch'>

        <Grid item xs={12} sm={9}>
          <Paper elevation={2} sx={{p:2, lineHeight: "140%"}}>
          <Typography variant='h5'>Professional Biography</Typography>

          <Typography variant='body' >
          <p>Full-stack Web Developer and <a href="http://www.ironhack.com" target='_blank' title="Ironhack Coding Bootcamp Website"> IronHack </a> bootcamp graduate (2021) building dynamic web applications and responsive front-ends. I'm competent in <strong className='js'>JavaScript ES6</strong> and have practice building web apps using <strong className='node'>Node.js</strong> and <strong className='react'>React</strong>, as well as handling RESTful API requests with <strong className='express'>Express</strong> and working with non-relational databases like <strong className='mongo'>MongoDB</strong> - the <strong>MERN</strong> stack.
          </p>
          <p>
          My most recent position was as a contract frontend developer for <a href="#portfolio"> TheSignChef.com</a> delivering uniform <strong>accessibility standards</strong>, semantic HTML and <strong>Search Engine Optimization</strong> across the site, as well as successfully redesigning high-traffic pages to <strong>increase engagement</strong>. For this role I worked with the <strong>LAMP</strong> stack - and so I'm familiar using <strong>Linux, Apache, MySQL & PHP </strong> too.
          </p>
          <p>
          I bring a decade of prior professional experience in healthcare, working as a <strong>pharmacist</strong> and all the leadership, management and interpersonal skills associated with a such a complex & challenging job. My experience working in numerous <strong> international markets</strong> and corresponding <strong>right to work in the US, UK and EU</strong> makes me an ideal candidate for a <strong>Work From Anywhere</strong>/ International remote position. I leverage strong communication skills in <strong>English</strong> (native) and <strong>Portuguese</strong> (spoken B1, reading & writing: C1) to engage multiple different stakeholders and harmonize the vision of multicultural teams.
          </p>
          <p>
          I enjoy working in a cohesive <strong>Agile</strong> team as well as completing tasks independently. My goal is to find a role with significant opportunity to <strong>develop professionally</strong> and advance within a company that <strong>supports</strong> and <strong>empowers</strong> me to <strong>learn, grow and build.</strong>
          </p>
          <p>
          Outside of work I enjoy exploring Portugal and its wealth of history and natural beauty, keeping fit with weightlifting and yoga and I have a soft spot for Daschunds.
          </p>
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={2} sx={{ p: 2}}>
            <Stack spacing={1} direcion={{xs:'row', md:'column'}}>
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
                          <LinearProgress sx={{}} variant="determinate" value={i.rating * 100} />
                        </Stack>
                      )
                    })}
                  </Box>
                )
              })}
            </Stack>
          </Paper>
        </Grid>

      </Grid>
    </React.Fragment>
  )
}

export default About

