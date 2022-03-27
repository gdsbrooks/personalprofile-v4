import './App.css';
import { Avatar, Container, Stack, Typography, ButtonGroup, Button, Chip, SvgIcon, Divider } from '@mui/material';
import facePic from './resources/clear-bg-profile.png'
import resume from './resources/ResumeMarch2022.pdf'
import vCard from './resources/GeorgeBrooks.vcf'
import Flags from 'country-flag-icons/react/3x2'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import { JavaScriptIcon, NodeJSIcon, ReactIcon } from './resources/icons';



function App() {
  return (
    <div className="App">
      <Container
        maxWidth="xs" sx={{ background: "linear-gradient(180deg, #64ffda 15vh, #FFFFFF 15vh)" }}>
        
        <Stack justifyContent={"space-between"} sx={{ height: "90vh" }} mb={"5vh"} divider={<Divider/>}>

          <Stack alignItems={"center"} justifyContent={'flex-start'} pt={"5vh"} >
            <Avatar
              src={facePic}
              alt={"George Brooks"}
              sx={{height: "20vh", width: "20vh", backgroundColor: "#fff" }}
            />

            <Typography variant="h3" component="h1">George Brooks</Typography>
            <Typography variant="h4" component="h2">Web Developer</Typography>
            
            <Stack mt={4} className='skills' direction="row" justifyContent="space-evenly" spacing={2}>
              <Chip variant='outlined' icon={<JavaScriptIcon />} label="JavaScript" />
              <Chip variant='outlined' icon={<ReactIcon />} label="React" />
              <Chip variant='outlined' icon={<NodeJSIcon />} label="Node.js" />
            </Stack>
          </Stack>

          <Stack spacing={4} px={"5%"}>
          <ButtonGroup orientation='vertical'>
            <Button href={"tel:+12064763991"} startIcon={<SvgIcon><Flags.US /></SvgIcon>}>
              +1 (206) 476-3991
            </Button>
            <Button href={"tel:+351912620081"} startIcon={<SvgIcon><Flags.PT /></SvgIcon>}>+351 912 620 081</Button>
            </ButtonGroup>
            <Button variant={"outlined"} href={"mailto:george@georgebrooks.dev"}>george@georgebrooks.dev</Button>
            </Stack>

          <Stack direction="row" px={"5%"} alignItems="center" justifyContent="space-between">
            <Button href={"mailto:george@georgebrooks.dev"} size="large"><EmailIcon/></Button>
            <Button href={"tel:+12064763991"} size="large"> <CallIcon /> </Button>
            <Button href={"https://linkedin.com/in/georgedsbrooks"} size="large"><LinkedInIcon /></Button>
            <Button href={"https://www.github.com/gdsbrooks"} size="large"><GitHubIcon /></Button>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" px={"5%"}>
            <Button
              href={resume}
              target="_blank"
              variant="outlined"
              color="secondary">
              My Resume
            </Button>
            <Button
              href={vCard}
              type="text/x-vcard"
              download={"georgebrooks.vcf"}
              variant="contained"
              color="primary"
            >
              Add Contact
            </Button>
          </Stack>

        </Stack>
    </Container>
    </div >
  );
}

export default App;
