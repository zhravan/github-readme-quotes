import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {contributorsUrl} from "../Constants/urlConfig";

// Helper function to check if a color is a gradient or image URL
const isComplexBackground = (bg) => bg && (bg.includes('gradient') || bg.includes('url'));


// 3. Update makeStyles to use SELECTED_THEME colors
const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 650,
      padding: theme.spacing(3), // Use theme spacing for consistency (24px)
      margin: theme.spacing(2),  // Use theme spacing for consistency (16px)
      
      // MODERNIZED BACKGROUND GRADIENT
      background: theme.palette.type === 'dark' 
        ? 'linear-gradient(135deg, #1c2128 0%, #0d1117 100%)' // Slightly adjusted dark gradient
        : 'linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)', // Softer light gradient
      
      borderRadius: 12, // Slightly reduced border radius for a modern feel
      transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      border: theme.palette.type === 'dark' ? '1px solid #30363d' : '1px solid #e1e4e8', // Added subtle light mode border
      
      '&:hover': {
        transform: 'translateY(-6px)', // Deeper lift on hover
        // MODERN SHADOW: Use a more diffused shadow for a 3D-pop effect
        boxShadow: theme.palette.type === 'dark'
          ? '0 15px 30px rgba(0,0,0,0.45)' 
          : '0 15px 30px rgba(0,0,0,0.15)',
      }
    },
    title: {
      fontSize: '1.75rem', // Larger, more impactful title
      fontWeight: 700, // Bolder font weight
      marginBottom: theme.spacing(1), // Reduced margin below for tighter grouping
      // SLIGHTLY BRIGHTER TEXT FOR DARK MODE CONTRAST
      color: theme.palette.type === 'dark' ? '#f0f6fc' : theme.palette.text.primary, 
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '1rem', // Standard font size
      // MORE SUBDUED TEXT FOR LIGHT MODE
      color: theme.palette.type === 'dark' ? theme.palette.text.secondary : '#6a737d', 
      textAlign: 'center',
      marginBottom: theme.spacing(4), // Increased margin below subtitle
    },
  avatarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(1.5), // Tighter gap between avatars
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: '50%', // Explicitly ensure circular
    border: theme.palette.type === 'dark' ? '2px solid #2ea043' : '2px solid #2196F3', // Subtle color ring
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'scale(1.18)', // Slightly larger scale up
      boxShadow: '0 6px 12px rgba(0,0,0,0.3)', // Sharper shadow on individual hover
      zIndex: 1,
    }
  },
  button: {
    borderRadius: 25, // More rounded, 'pill' shape
    padding: '10px 30px', // More vertical padding
    textTransform: 'none',
    fontWeight: 600,
    color: '#ffffff',
    
    // UPDATED DARK MODE BUTTON TO SOFTER GREEN (More like GitHub actions)
    background: theme.palette.type === 'dark'
      ? 'linear-gradient(45deg, #2ea043 30%, #34bf49 90%)' // Green gradient
      : 'linear-gradient(45deg, #1877f2 30%, #21a9f3 90%)', // Facebook-blue gradient for light mode
      
    // MODERN SHADOW FOR BUTTON
    boxShadow: theme.palette.type === 'dark'
      ? '0 6px 10px 0 rgba(46, 160, 67, 0.4)'
      : '0 6px 10px 0 rgba(33, 150, 243, 0.4)',
      
    '&:hover': {
      // Slightly change gradient direction on hover
      background: theme.palette.type === 'dark'
        ? 'linear-gradient(45deg, #34bf49 30%, #2ea043 90%)' 
        : 'linear-gradient(45deg, #21a9f3 30%, #1877f2 90%)',
      boxShadow: theme.palette.type === 'dark'
        ? '0 4px 8px 0 rgba(46, 160, 67, 0.6)'
        : '0 4px 8px 0 rgba(33, 150, 243, 0.6)',
    }
  },
  cardActions: {
    justifyContent: 'center',
    padding: theme.spacing(2, 0), // Use theme spacing
  }
}));

const ContributorsCard = () => {
  const [listOfContributors,setListOfContributors] = useState([]);
  const theme = useTheme(); 
  
  const classes = useStyles(); 

  useEffect(()=>{
    fetchContributors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const fetchContributors = async () => {
    try {
      const res = await fetch(contributorsUrl);
      if (!res.ok) {
        throw new Error('Failed to fetch contributors');
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setListOfContributors(data);
      } else {
        console.error('Fetched data is not an array:', data);
        setListOfContributors([]);
      }
    } catch (error) {
      console.error('Error fetching contributors:', error);
      setListOfContributors([]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card raised className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            A Special Thanks To All The Contributors!{" "}
            <span 
              role="img" 
              aria-label="heart" 
              style={{ 
                fontSize: '28px',
                // Added a slight filter for a modern glow in dark mode
                filter: theme.palette.type === 'dark' ? 'drop-shadow(0 0 4px #ff5050)' : 'none'
              }}
            >
              ❤️
            </span>
          </Typography>
          <Typography className={classes.subtitle} color="textSecondary">
            We are grateful to our {listOfContributors.length} amazing contributors
            for bringing this project to life
          </Typography>

          <div className={classes.avatarContainer}>
          {
              listOfContributors.slice(0, Math.min(listOfContributors.length, 8)).map((contributor) => {
                  return(
                    <Avatar 
                      key={contributor.id} 
                      className={classes.avatar}
                      alt={contributor.login} 
                      src={contributor.avatar_url}
                      title={contributor.login} 
                    />
                  )
              })
          }
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <a style={{textDecoration:"none"}} href="https://github.com/zhravan/github-readme-quotes/graphs/contributors">
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.button}
              size="large"
            >
              View All Contributors
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContributorsCard; 