import React, { Component } from 'react';
import Zoom from 'react-reveal';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import ProPic from "./images/Profile.jpg";

export class HomePage extends Component {
    
    render() {

        return (
            <div>
            <Zoom cascade>    
            <div className="header">
                <h1>Welcome</h1>
            </div>
            </Zoom>
            <span className="intro">
                <Zoom cascade>
                    <div>
                        <img  className="intro-picture" src={ProPic} alt="ProfilePicture" height="350px" width="350px" style={{borderRadius:"50%"}}/>
                    </div>
                    <div>
                    <h2>I am <b>SHIVANIRUDH</b>.<br/>
                        <p style={{fontSize: "40px"}}> 
                            Nice to meet you! <br/> 
                            Feel free to look around my portfolio and reach out.<br/> 
                            <b>Thanks for stopping by!</b><br/>
                        </p>
                    </h2>
                    </div>
                </Zoom>
            </span>
            <div className="social-media-icons">
                <a href="mailto:shivanirudh2001@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                &nbsp;
                <a href="https://www.linkedin.com/in/shivanirudh-s-g/" target="blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                &nbsp;
                <a href="https://github.com/Shivanirudh" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                &nbsp;
                <a href="https://instagram.com/shiv_anirudh" target="blank"><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
            
            </div>
        )
    }
}

export default HomePage
