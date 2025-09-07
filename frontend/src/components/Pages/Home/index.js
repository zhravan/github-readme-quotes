import React, { useEffect, useState } from 'react';
import { Typography, Grid, Tooltip } from '@material-ui/core';
import TemplateCard from '../../organisms/TemplateCard';
import { themes, animations, layouts, fonts, colorValues, quoteTypes } from '../../../config/cardTemplate';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ContributorsCard from '../../ContributorsCard/ContributorCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    customTooltip: {
        fontSize: '16px',
        fontWeight: 'bold'
    },
});

const Home = () => {

    const [theme, setTheme] = useState(themes[0]);
    const [animation, setAnimation] = useState(animations[0]);
    const [layout, setLayout] = useState(layouts[0]);
    const [font, setFont] = useState(fonts[0]);
    const [fontColor, setFontColor] = useState(null);
    const [bgColor, setBgColor] = useState(null);
    const [borderColor, setBorderColor] = useState(null);
    const [quoteType, setQuoteType] = useState("random");
    const [bgSource, setBgSource] = useState(null);
    const [unsplashQuery, setUnsplashQuery] = useState("");
    const [queryKeyEnter, setQueryKeyEnter] = useState(false);
    const [imageURL, setImageURL] = useState("")

    useEffect(() => {
        if (queryKeyEnter || bgSource === "unsplash") {
            setQueryKeyEnter(true)
            // Replace host as per runtime environment
            fetch(`http://localhost:3004/image?unsplashQuery=${unsplashQuery}`).then((res) => {
                return res.json()
            }).then((resURL) => {                
                setImageURL(resURL.url);
            })
            setQueryKeyEnter(false)
        }
        if (bgSource === null) {
            setQueryKeyEnter(false)
        }
    }, [queryKeyEnter, bgSource])


    const classes = useStyles();

    return (
        <React.Fragment>

            <marquee style={{ padding: '10px', borderRadius: '10px', width: '80%', margin: 'auto', textAlign: 'center' }}>
                <Typography variant='h6' align='center' component='h4' style={{ margin: '20px', padding: '25px', color: '#6e45e2', fontFamily: 'Arial, sans-serif' }}>
                    🚀 After migrating to Vercel, our application now has separate UI and server deployments for PRODUCTION, while still maintaining server-side rendering locally for DEVELOPMENT. 🚀
                </Typography>
            </marquee>

            <Typography variant='h5' align='center' component='h2' style={{ margin: '20px', padding: '25px' }}>Make your own personalised style for the Quotes</Typography>

            <Grid
                container
                alignItems="center"
                spacing={3}
            >

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="theme"
                        options={themes}
                        value={theme}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setTheme(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Theme" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="layout"
                        options={layouts}
                        value={layout}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setLayout(newValue)
                        }}
                        style={{ width: 300, margin: '0 auto' }}
                        renderInput={(params) => <TextField {...params} label="Layout" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="animation"
                        options={animations}
                        value={animation}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setAnimation(newValue)
                        }}
                        style={{ width: 300, margin: '0 auto' }}
                        renderInput={(params) => <TextField {...params} label="Animation" variant="outlined" />}
                    />

                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="font"
                        options={fonts}
                        value={font}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setFont(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Font" variant="outlined" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="font-color"
                        options={colorValues}
                        value={fontColor}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(_event, newValue) => {
                            setFontColor(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Font color" placeholder="Select a color" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="bg-color"
                        options={colorValues}
                        value={bgColor}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(_event, newValue) => {
                            setBgColor(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Background color" placeholder="Select a color" variant="outlined" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Tooltip
                        title="This option only works with the default layout."
                        placement="top"
                        arrow
                        classes={{ tooltip: classes.customTooltip }}
                    >
                        <Autocomplete
                            id="border-color"
                            options={colorValues}
                            value={borderColor}
                            style={{ width: 300 }}
                            onChange={(_event, newValue) => {
                                setBorderColor(newValue)
                            }}
                            renderInput={(params) => <TextField {...params} label="Border color" placeholder="Select a color" variant="outlined" />}
                        />
                    </Tooltip>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="quote-type"
                        options={quoteTypes}
                        value={quoteType}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(_event, newValue) => {
                            if (newValue != null)
                                setQuoteType(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="Quote Type" placeholder="Select a type" variant="outlined" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        id="bg-source"
                        options={['unsplash']}
                        value={bgSource}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(_event, newValue) => {
                            setBgSource(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Background Source" placeholder="Select 'unsplash' or leave empty" variant="outlined" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <TextField
                        label="Unsplash query"
                        variant="outlined"
                        value={unsplashQuery}
                        style={{ width: 300, margin: '0 auto' }}
                        onChange={(event) => setUnsplashQuery(event.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && setQueryKeyEnter(true)}
                        disabled={bgSource !== 'unsplash'}
                    />
                </Grid>

            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                    <TemplateCard theme={theme} animation={animation} layout={layout} font={font} fontColor={fontColor} bgColor={bgColor} borderColor={borderColor} quoteType={quoteType} bgSource={bgSource} unsplashQuery={unsplashQuery} isImageSet={queryKeyEnter || bgSource === "unsplash"} imageURL={imageURL} />
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center">Other layouts</Typography>
                </Grid>
                {
                    layouts.filter((item) => item !== layout).map((restLayout) => {
                        return (
                            <Grid key={restLayout} item xs={12} sm={12} md={6}>
                                <TemplateCard theme={theme} animation={animation} layout={restLayout} font={font} fontColor={fontColor} bgColor={bgColor} borderColor={borderColor} quoteType={quoteType} bgSource={bgSource} unsplashQuery={unsplashQuery} isImageSet={queryKeyEnter || bgSource === "unsplash"} imageURL={imageURL} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <ContributorsCard />
        </React.Fragment>
    )
}

export default Home;
