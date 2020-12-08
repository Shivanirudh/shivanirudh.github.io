import React, { Component } from 'react';
import { Spring } from "react-spring/renderprops";
import { Transition, animated } from "react-spring/renderprops";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

import ProPic from "./images/Profile.jpg";
import Window from "./Window";

export class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            index:0,
            showCV:false
        };
        this.incIndex=this.incIndex.bind(this);
        this.decIndex=this.decIndex.bind(this);
        this.toggle=this.toggle.bind(this);
    }

    incIndex(){
        this.setState({index: this.state.index+1});
    }
    decIndex(){
        this.setState({index: this.state.index-1});
    }
    toggle(){
        this.setState({showCV: !this.state.showCV});
    }
    render() {
        let btn_class=this.state.showCV? "active":"closed";
        const TEXTS = [
            "Data Science",
            "Machine Learning",
            "Natural Language Processing"
        ];
        return (

            <div className="about">
                <h1 className="about-head">Owner Info</h1>
                <div  className="picture">
                <img src={ProPic} alt="ProfilePicture" height="250px" width="250px" style={{borderRadius:"50%"}}/>
                </div>
                <div className="details">
                    <Spring
                     from={{opacity:0}}
                     to={{opacity:1, marginLeft:"10rem"}}
                     config={{delay:500, duration:1000}}>
                     {props=>
                        <div className="detail1" style={props}>
                                <p align="left" className="item-head">Name</p>
                                <span className="item-value">Shivanirudh S G</span>
                        </div>
                     }       
                    </Spring>
                    <Spring
                     from={{opacity:0}}
                     to={{opacity:1, marginLeft:"10rem"}}
                     config={{delay:1500, duration:1000}}>
                     {props=>
                        <div className="detail1" style={props}>
                                <p align="left" className="item-head">Role</p>
                                <span className="item-value">Software Developer</span>
                        </div>
                     }       
                    </Spring>
                    <Spring
                     from={{opacity:0}}
                     to={{opacity:1, marginLeft:"10rem"}}
                     config={{delay:2500, duration:1000}}>
                     {props=>
                        <div className="detail1" style={props}>
                                <p align="left" className="item-head">Interests</p>
                                <button className="int-button dec" onClick={this.decIndex}><FontAwesomeIcon icon={faAngleLeft}/></button>
                                <span className="item-value" style={{marginLeft:"15rem"}}>
                                    {TEXTS[Math.abs(this.state.index)%TEXTS.length]}
                                </span>
                                <button className="int-button inc" onClick={this.incIndex}><FontAwesomeIcon icon={faAngleRight}/></button>
                                
                        </div>
                     }       
                    </Spring>
                    <Spring
                     from={{opacity:0}}
                     to={{opacity:1, marginLeft:"10rem"}}
                     config={{delay:3500, duration:1000}}>
                     {props=>
                        <div className="detail1" style={props}>
                                <p align="left" className="item-head">Resume</p>
                                <span className="item-value">
                                    <button className={btn_class} onClick={this.toggle}><FontAwesomeIcon icon={faAngleDoubleDown}/></button>
                                </span>
                                <Transition
                    native
                    items={this.state.showCV}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    >
                    {show =>
                        show &&
                        (props => (
                        <animated.div style={props}>
                            {/*<PDFDownloadLink document={<Window />} fileName="Shivanirudh.pdf">
                                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                        </PDFDownloadLink>*/}
                            <Window />
                        </animated.div>
                        ))
                    }
                    </Transition>
                        </div>
                     }       
                    </Spring>
                    
                </div>
            </div>
        )
    }
}

export default About
