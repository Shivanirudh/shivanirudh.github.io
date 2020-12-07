import React, { Component } from 'react';
import {config, Spring} from "react-spring/renderprops";

import ProPic from "./images/Profile.jpg";

export class HomePage extends Component {
    
    render() {

        return (
            <div>
            <div className="header">
                <h1>Welcome</h1>
            </div>
            <span className="intro">
                <div>
                    <img  className="picture" src={ProPic} alt="ProfilePicture" height="350px" width="350px" style={{borderRadius:"50%"}}/>
                </div>
                <h2>I am <b>SHIVANIRUDH</b>.<br/>
                    <p style={{fontSize: "40px"}}> 
                        Nice to meet you! <br/> 
                        Feel free to look around my portfolio and reach out.<br/> 
                        <b>Thanks for stopping by!</b>
                    </p>
                </h2>
            </span>
           
            
            </div>
        )
    }
}

export default HomePage
