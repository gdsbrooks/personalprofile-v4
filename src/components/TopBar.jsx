import React, { useState } from 'react'
import resume from '../resources/ResumeApril2022.pdf'
import baldy from '../resources/bald-brooklyn.png'
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Stack, Typography, Divider, Avatar, useScrollTrigger, Slide } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import sections from './sections';

function HideOnScroll(props) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
}

function TopBar() {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open)
    }

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Avatar src={baldy} alt="line drawing of george. He has a bald head, square glasses and a commanding yet invitingly ample mustache" />
                        <Typography variant="h4" sx={{ flexGrow: 1 }}>George Brooks</Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {sections.map((section) => {
                                return (
                                    <Button variant="text" size='large' color='inherit'>{section.name}</Button>
                                )
                            })}
                        </Box>

                        <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            size="large"
                            color='inherit'
                            onClick={toggleDrawer(!drawerOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Toolbar />
                <Stack
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    divider={<Divider />}
                >
                    {sections.map((section) => {
                        return (
                            <Button size='large' color='inherit' sx={{ m: 2 }}>{section.name}</Button>
                        )
                    })}

                    <Button
                        href={resume}
                        target="_blank"
                        variant="contained"
                        color="secondary"
                        sx={{ m: 2 }}>
                        My Resume
                    </Button>

                    <Stack direction="row" px={"2%"} alignItems="center" justifyContent="space-between">
                        <Button href={"mailto:george@georgebrooks.dev"} size="large"><EmailIcon /></Button>
                        <Button href={"tel:+12064763991"} size="large"> <CallIcon /> </Button>
                        <Button href={"https://linkedin.com/in/georgedsbrooks"} size="large"><LinkedInIcon /></Button>
                        <Button href={"https://www.github.com/gdsbrooks"} size="large"><GitHubIcon /></Button>
                    </Stack>
                </Stack>
            </Drawer>
        </React.Fragment>
    )
}

export default TopBar