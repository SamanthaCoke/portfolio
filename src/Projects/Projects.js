import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  FormLabel,
  FormControlLabel,
  Paper,
  Container,
  Link,
} from "@material-ui/core";
import {Link as RouteLink} from 'react-router-dom'
import weather from "../assets/images/weather.png";
import chow from "../assets/images/food.png";
import news from "../assets/images/sprout.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 375,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Projects() {
  const [spacing, setSpacing] = React.useState(5);
  const classes = useStyles();

  const projects = [
    {
      name: "Weather Or Not",
      url: "https://github.com/P1T2-team2/Weather-or-Not",
      image: weather,
    },
    {
      name: "Code Chow",
      url: "https://github.com/Player-2-Project-2/Project-2",
      image: chow,
    },
    {
      name: "Better News",
      url: "https://github.com/Echo-2-Project-3/Better-News-App",
      image: news,
    },
  ];

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Container maxWidth="xl">
      <Container maxWidth="xl" style={{background: "linear-gradient(rgb(246, 226, 212), rgb(255, 255, 255))", height: '30vh'}}>
        <h1>Projects</h1>
        <h3><RouteLink to="/">Home</RouteLink></h3>
      </Container>
      <Container>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            {/* this is where the height should be added, where line 35 are the direct children*/}
            <Grid
              container
              justify="center"
              spacing={spacing}
            >
              {projects.map((project, index) => (
                <Grid key={index} item>
                  <Link href={project.url}>
                    <Paper className={classes.paper}>
                      <h1>{project.name}</h1>
                      <img src={project.image} width={300}/>
                    </Paper>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
