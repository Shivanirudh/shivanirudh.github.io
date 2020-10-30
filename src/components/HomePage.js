import React, { Component } from 'react';
import {config, Spring} from "react-spring/renderprops";

import ProPic from "./images/Profile.jpg";

export class HomePage extends Component {
    
    render() {

        return (
            <div>
            <div className="header">
                <Spring 
                 from={{opacity:0, marginTop:-100}}
                 to={{opacity:1, marginTop:0}}
                 config={config.slow}>
                    {props => <h1 style = {props}>Welcome</h1>}
                </Spring>
            </div>
            <span className="intro">
                <Spring 
                 from={{opacity:0}}
                 to={{opacity:1}}
                 config={{delay:1000, duration:400}}>
                    {props => 
                        <div style={props}>
                        <img  className="picture" src={ProPic} alt="ProfilePicture" height="350px" width="350px" style={{borderRadius:"50%"}}/>
                        </div>
                    }
                </Spring>
                <Spring
                 from={{opacity:0}}
                 to={{opacity:1}}
                 config={{delay:1500, duration:500}}>
                    {props => 
                        <h2 style={props}>I am SHIVANIRUDH.<br/>
                        Nice to meet you!
                        </h2>
                    }
                </Spring>
            </span>
            </div>
        )
    }
}

export default HomePage
