import React from 'react';
import {Link} from 'react-router-dom';
import brand from '../images/sam.png';



function Home (props) {
    return (
        <div>
        <div className="brand">
                <img src={brand} alt="brand"/>
            </div>
            <div className="center-navs">
              <Link to="/contact">
              <span className="home-nav">
                Contact
              </span>
              </Link>
              <Link to="/projects">
              <span className="home-nav">
                Projects
              </span>
              </Link>
            </div>
            <Link to="about-me">
            <div className="about-me-nav">
              <span>
                <span className="inner-span">
                    <span className="about-me-text" onClick={props.handleNav}>Info About Me</span>
                </span>
              </span>
            </div>
            </Link>
        </div>
    )
  }

  export default Home; 