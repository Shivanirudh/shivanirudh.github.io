import React, { Component } from 'react';
import { Spring } from "react-spring/renderprops";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import ProPic from "./images/Profile.jpg";

export class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            index:0
        };
    }

    incIndex(){
        this.setState({index: this.state.index+1});
    }
    decIndex(){
        this.setState({index: this.state.index-1});
    }
    render() {
        const TEXTS = [
            "Data Science",
            "Machine Learning",
            "Natural Language Processing"
        ];
        return (
            <div className="about">
                <img  className="picture" src={ProPic} alt="ProfilePicture" height="250px" width="250px" style={{borderRadius:"50%"}}/>
                <table className="details">
                        <tr className="detail-item">
                            <Spring
                            from={{opacity:0, marginLeft:"-50rem"}}
                            to={{opacity:1, marginLeft:"10rem"}}
                            config={{delay:500, duration:1000}}>
                            {props=>
                                <div  style={props}>
                                    <td className="item-head">Name</td>
                                    <td className="item-value">Shivanirudh S G</td>
                                </div>
                            }       
                            </Spring>
                        </tr> 
                        <tr className="detail-item">
                            <Spring
                            from={{opacity:0, marginLeft:"-50rem"}}
                            to={{opacity:1, marginLeft:"10rem"}}
                            config={{delay:500, duration:1000}}>
                            {props=>
                                <div  style={props}>
                                    <td className="item-head">Role</td>
                                    <td className="item-value">Software Developer, Programmer</td>
                                </div>
                            }       
                            </Spring>
                        </tr>
                        <tr className="detail-item">
                            <Spring
                            from={{opacity:0, marginLeft:"-50rem"}}
                            to={{opacity:1, marginLeft:"10rem"}}
                            config={{delay:500, duration:1000}}>
                            {props=>
                                <div  style={props}>
                                    <td className="item-head">Age</td>
                                    <td className="item-value">19</td>
                                </div>
                            }       
                            </Spring>
                        </tr>
                        <tr className="detail-item">
                            <Spring
                            from={{opacity:0, marginLeft:"-50rem"}}
                            to={{opacity:1, marginLeft:"10rem"}}
                            config={{delay:500, duration:1000}}>
                            {props=>
                                <div  style={props}>
                                    <td className="item-head">Interests</td>
                                    <td className="item-value">
                                        <button onClick={this.decIndex.bind(this)}><FontAwesomeIcon icon={faAngleLeft}/></button>
                                        {TEXTS[this.index%TEXTS.length]}
                                        <button onClick={this.incIndex.bind(this)}><FontAwesomeIcon icon={faAngleRight}/></button>
                                    </td>
                                </div>
                            }       
                            </Spring>
                        </tr>
                       
                </table>
            </div>
        )
    }
}

export default About
