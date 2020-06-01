import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Aboutme from './AboutMe/Aboutme';
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "./Home/Home";


class App extends Component {

  state = {

  }

  render () {
    return (    
      <div className="App">
        <Router>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/about-me">
            <h1>About me</h1>
          </Route>
        </Router>

          
       
        
        {/* import { useHistory } from "react-router-dom";
        export const Item = () => {
          history = useHistory()
          return (
            <>
            <button onClick={() => history.goBack()}>Back</button>
            </>
          );
        }; */}

      </div>
    );
  }
  
}

export default App;
