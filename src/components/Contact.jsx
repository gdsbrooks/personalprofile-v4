import React from "react";
import {
  Avatar,
  Box,
  Card,
  Link,
  Container,
  Stack,
  Typography,
  ButtonGroup,
  IconButton,
  Button,
  Chip,
  SvgIcon,
  Divider,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import facePic from "../resources/clear-bg-profile.png";
import resume from "../resources/ResumeApril2022.pdf";
import vCard from "../resources/GeorgeBrooks.vcf";
import Flags from "country-flag-icons/react/3x2";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import { JavaScriptIcon, NodeJSIcon, ReactIcon } from "../resources/icons";
import { Phone } from "@mui/icons-material";

function Contact() {
  return (
    <React.Fragment>
      <Card
        elevation={4}
        sx={{ display: "flex"}}
      >
        <CardMedia
          component="img"
          image={facePic}
          alt="photo of George Brooks."
          classes="hue-rotate-layer"
          sx={{
            display: {xs: 'none', sm:'block'},
            pt: 3,
            maxWidth: "40%",
            background: '#0F2027',  /* fallback for old browsers */
            background: '-webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027)',
            background: 'linear-gradient(to left, #2C5364, #203A43, #0F2027)'
          }}
        />
        <CardContent
          sx={{px: {xs: 2, md: 5}, display: "flex", flexGrow: 1, justifyContent: "SpaceBetween", alignItems: 'center' }}
        >
          <Stack spacing={2} divider={<Divider />} sx={{flexGrow: 1}}>
            
            <Box>
              <Typography variant="h4" >George Brooks</Typography>
              <Typography variant="h5">Web Developer</Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Phone />
              <Stack spacing={2}>
                <Box>
                  <Link underline='none' variant="h6" href="tel:+12064763991">+1 (206) 476-3991</Link>
                  <Typography variant="subtitle2">US Cellphone</Typography>
                </Box>
                <Box>
                  <Link underline='none' variant="h6" href="tel:+351912620081">+351 912 620 081</Link>
                  <Typography variant="subtitle2">PT Telephone</Typography>
                </Box>
                
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <EmailIcon/>
            <Box>
              <Link underline='none' variant="h6" href="mailto:george@georgebrooks.dev">george@georgebrooks.dev </Link>
              <Typography variant="subtitle2">Professional Email</Typography>
            </Box>
            </Stack>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
            <IconButton href={"https://linkedin.com/in/georgedsbrooks"} size="large"><LinkedInIcon /></IconButton>
            <IconButton href={"https://www.github.com/gdsbrooks"} size="large"><GitHubIcon /></IconButton>
            <Button variant='contained' href={vCard} download>Add Contact</Button>
            </CardActions>
          </Stack>
          
        </CardContent>
      </Card>
    </React.Fragment>
    // <Container maxWidth='xs'>

    // <Stack  justifyContent={"space-between"} divider={<Divider/>}>

    //   <Stack alignItems={"center"} justifyContent={'flex-start'}>
    //     <Avatar
    //       src={facePic}
    //       alt={"George Brooks"}
    //       sx={ {height: "20vh", width: "20vh", backgroundColor: "#fff" }}
    //     />

    //     <Typography variant="h3">George Brooks</Typography>
    //     <Typography variant="h4">Web Developer</Typography>

    //     <Stack mt={4} className='skills' direction="row" justifyContent="space-evenly" spacing={2}>
    //       <Chip variant='outlined' icon={<JavaScriptIcon />} label="JavaScript" />
    //       <Chip variant='outlined' icon={<ReactIcon />} label="React" />
    //       <Chip variant='outlined' icon={<NodeJSIcon />} label="Node.js" />
    //     </Stack>
    //   </Stack>

    //   <Stack spacing={4} px={"5%"}>
    //   <ButtonGroup orientation='vertical'>
    //     <Button href={"tel:+12064763991"} startIcon={<SvgIcon><Flags.US /></SvgIcon>}>
    //       +1 (206) 476-3991
    //     </Button>
    //     <Button href={"tel:+351912620081"} startIcon={<SvgIcon><Flags.PT /></SvgIcon>}>+351 912 620 081</Button>
    //     </ButtonGroup>
    //     <Button variant={"outlined"} href={"mailto:george@georgebrooks.dev"}>george@georgebrooks.dev</Button>
    //     </Stack>

    //   <Stack direction="row" px={"5%"} alignItems="center" justifyContent="space-between">
    //     <Button href={"mailto:george@georgebrooks.dev"} size="large"><EmailIcon/></Button>
    //     <Button href={"tel:+12064763991"} size="large"> <CallIcon /> </Button>
    //     <Button href={"https://linkedin.com/in/georgedsbrooks"} size="large"><LinkedInIcon /></Button>
    //     <Button href={"https://www.github.com/gdsbrooks"} size="large"><GitHubIcon /></Button>
    //   </Stack>

    //   <Stack direction="row" alignItems="center" justifyContent="space-between" px={"5%"}>
    //     <Button
    //       href={resume}
    //       target="_blank"
    //       variant="outlined"
    //       color="secondary">
    //       My Resume
    //     </Button>
    //     <Button
    //       href={vCard}
    //       type="text/x-vcard"
    //       download={"georgebrooks.vcf"}
    //       variant="contained"
    //       color="primary"
    //     >
    //       Add Contact
    //     </Button>
    //   </Stack>

    // </Stack>
    // </Container>
  );
}

export default Contact;
