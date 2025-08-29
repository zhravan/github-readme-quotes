import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { IconButton, Paper } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { dashConstants } from '../../config/constants';
import { LightTheme, DarkTheme } from '../../util/themes/GlobalThemes';
import { getAppBarStyles } from '../../util/styles/componentStyles';
import MoonIcon from '../../assets/moon.svg';
import LightIcon from '../../assets/sun.svg';
import Home from '../Pages/Home';
import DiscordButton from './discord';
import { FaProductHunt } from "react-icons/fa";
const ElevationScroll = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Dashboard = (props) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark
        ? createTheme(DarkTheme)
        : createTheme(LightTheme);
    const classes = getAppBarStyles();

    function handleThemeChange() {
        setIsDark(!isDark);
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Paper>
                    <CssBaseline />
                    <ElevationScroll {...props}>
                        <AppBar>
                            <Toolbar className={classes.root}>
                                <Typography
                                    variant='h6'
                                    className={classes.title}
                                >
                                    <div className='text'>
                                        {dashConstants.APP_NAME}
                                    </div>
                                </Typography>
                                <div className='center'>
                                    <DiscordButton />
                                    
                                        <a className='p'
                                            href='https://www.producthunt.com/posts/dynamic-github-profile-readme-quotes?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dynamic-github-profile-readme-quotes'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <FaProductHunt className='product-sm'/>
                                            <img
                                                className='product'
                                                src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=276934&theme=light'
                                                alt='Dynamic GitHub Profile Readme Quotes - Everlasting Poetic Touch to GitHub Profiles for everyone | Product Hunt'
                                               
                                            />

                                        </a>
                                   

                                </div>
                                <IconButton
                                    className={classes.themeIcon}
                                    onClick={handleThemeChange}
                                >
                                    {
                                        <img
                                            alt='Theme Icon'
                                            src={isDark ? LightIcon : MoonIcon}
                                        />
                                    }
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </ElevationScroll>
                    <Toolbar />
                    <Container style={{ backgroundColor: 'white' }}>
                        <Home />
                    </Container>
                </Paper>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Dashboard;
