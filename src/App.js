import './App.css';
import { Avatar, Container, Stack, Typography, Box, ButtonGroup, Button, Badge, Paper, IconButton, List } from '@mui/material';
import facePic from './resources/clear-bg-profile.png'
import resume from './resources/ResumeMarch2022.pdf'
import json from './contact.json'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const vcf = { ...json }
function App() {
  return (
    <div className="App">
    <Container>
      <Avatar src={facePic} alt={(json.name.first + ' ' + json.name.last)} />
      <Box>
        <Typography>George Brooks</Typography>
        <Typography>Web Developer</Typography>
        <Typography>JavaScript. React. Node.js</Typography>
      </Box>
      <Paper elevation={1} marg>

      <ButtonGroup orientation='vertical' >
        <Button>+1 (206) 476-3991</Button>
        <Button>+351 912 620 081</Button>
        <Button>george@georgebrooks.dev</Button>
      </ButtonGroup>

</Paper>
<Paper elevation={1}>
        <Button>
          <EmailIcon href="mailto:george@georgebrooks.dev"/>
        </Button>
        <Button>
          <CallIcon href="tel:+12064763991"/>

        </Button>
        <Button href={"https://linkedin.com/in/georgedsbrooks"}>
          <LinkedInIcon />
        </Button>
        <Button href={"https://www.github.com/gdsbrooks"}>
          <GitHubIcon />
        </Button>
        </Paper>

      <Button href="#about_me" startIcon={<AccountCircleIcon />} variant="contained" color="primary" >
        About Me
      </Button>

      <Button href={resume} startIcon={<FilePresentOutlinedIcon />} variant="outlined" color="secondary">
        My Resume
      </Button>

      <Button href={"#addcontact"} startIcon={<PersonAddIcon />}>
        Add Contact
      </Button>
      </Container>
    </div>
  );
}

export default App;
