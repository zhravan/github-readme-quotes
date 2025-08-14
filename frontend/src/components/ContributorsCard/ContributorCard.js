import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {contributorsUrl} from "../Constants/urlConfig"

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 400,
    padding: 10,
    margin: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ContributorsCard = () => {
  const [listOfContributors,setListOfContributors] = useState([]);

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
      setListOfContributors(data);
    } catch (error) {
      console.error('Error fetching contributors:', error);
    }
  };

  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        margin:"10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card raised className={classes.root}>
        <CardContent>
          A Special Thanks To All The Contributors!
          <Typography variant="h5" component="h2">
            We are grateful{" "}
            <span role="img" aria-label="sheep">
              ❤️
            </span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            To our {listOfContributors.length} contributors for helping in
            <br />
            bringing this project to life              
          </Typography>

          <div style={{display:'flex',alignItems:'center'}}>

          {
              listOfContributors.slice(0,Math.min(listOfContributors.length,7)).map((contributor)=>{
                  return(
                    <Avatar key={contributor.id} style={{marginRight:'5px', marginLeft:'5px'}} alt={contributor.login} src={contributor.avatar_url} />
                  )
              })
          }
          </div>
        </CardContent>
        <CardActions>
          <a style={{textDecoration:"none"}}  href="https://github.com/zhravan/github-readme-quotes/graphs/contributors">
          <Button variant="contained" color="primary" size="small">More Details Here</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContributorsCard;
