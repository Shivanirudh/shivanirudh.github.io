import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';
export class Timeline extends Component {
    render() {
        return (
            <div className="timeline" style={{paddingBottom:"3rem"}}>
                <h1 className="timeline-head">Timeline</h1>
                <p className="timeline-text">
                    The timeline below shows my education, experience and documented projects.
                </p>
                <p className="timeline-text">Hover on a label to read more.</p>
                <VerticalTimeline style={{marginTop:"3rem", paddingBottom:"2rem"}}>
                    {/*Project:Website*/}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--project"
                        contentStyle={{ background: '#433d3a', color: '#fff', width: '35%', marginLeft: '8rem', boxShadow: '0px 5px #1b8900' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b8900' }}
                        date="October 2020"
                        iconStyle={{ background: '#433d3a', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faCode} style={{fontSize:'50px', marginLeft:'-2rem'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Personal Portfolio Website</h3>
                        <h4 className="vertical-timeline-element-subtitle">React JS</h4>
                        <p className="vt-content">
                            Portfolio website written in React JS, hosted by GitHub Pages.<br/>
                            <a href="https://github.com/Shivanirudh/shivanirudh.github.io" target="blank"><u>Link to GitHub repo</u></a>
                        </p>
                    </VerticalTimelineElement>

                    {/*Work:SF*/}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#433d3a', color: '#fff', width: '35%', marginRight: '8rem', boxShadow: '0px 5px #c80a0a' }}
                        contentArrowStyle={{ borderRight: '7px solid  #c80a0a' }}
                        date="August 2020 - present"
                        iconStyle={{ background: '#433d3a', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faBriefcase} style={{fontSize:'50px', marginLeft:'-1.5rem'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Solarillion Foundation</h4>
                        <p className="vt-content">
                            Working as teams to research in Machine Learning
                        </p>
                    </VerticalTimelineElement>

                    {/*Project:Flight Delay Prediction*/}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--project"
                        contentStyle={{ background: '#433d3a', color: '#fff', width: '35%', marginLeft: '8rem', boxShadow: '0px 5px #1b8900' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b8900' }}
                        date="August 2020"
                        iconStyle={{ background: '#433d3a', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faCode} style={{fontSize:'50px', marginLeft:'-2rem'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Flight Delay Prediction</h3>
                        <h4 className="vertical-timeline-element-subtitle">Python</h4>
                        <p className="vt-content">
                            Machine Learning models to classify delayed flights and estimate amount of delay<br/>
                            <a href="https://github.com/Shivanirudh/FlightDelayPrediction" target="blank"><u>Link to GitHub repo</u></a>
                        </p>
                    </VerticalTimelineElement>
                    
                    {/*Project:To Do List*/}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--project"
                        contentStyle={{ background: '#433d3a', color: '#fff', width: '35%', marginRight: '8rem', boxShadow: '0px 5px #1b8900' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b8900' }}
                        date="December 2019"
                        iconStyle={{ background: '#433d3a', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faCode} style={{fontSize:'50px', marginLeft:'-2rem'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">To Do List</h3>
                        <h4 className="vertical-timeline-element-subtitle">Python, MySQL</h4>
                        <p className="vt-content">
                            Python web application that uses MySQL to make a very simple To-do list<br/>
                            <a href="https://github.com/Shivanirudh/ToDoList" target="blank"><u>Link to GitHub repo</u></a>
                        </p>
                    </VerticalTimelineElement>

                    {/*Project:Minesweeper*/}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--project"
                        contentStyle={{ background: '#433d3a', color: '#fff', width: '35%', marginLeft: '8rem', boxShadow: '0px 5px #1b8900' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1b8900' }}
                        date="October 2019"
                        iconStyle={{ background: '#433d3a', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faCode} style={{fontSize:'50px', marginLeft:'-2rem'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Minesweeper</h3>
                        <h4 className="vertical-timeline-element-subtitle">C, C++</h4>
                        <p className="vt-content">
                            C application that creates a simulation of the classic Minesweeper game on a variable grid<br/>
                            <a href="https://github.com/Shivanirudh/Minesweeper" target="blank"><u>Link to GitHub repo</u></a>
                        </p>
                    </VerticalTimelineElement>

                    {/*Education:SSN*/}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: '#433d3a', color: '#fff', width: '35%', marginRight: '8rem', boxShadow: '0px 5px #2921d5' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2921d5' }}
                        date="2018-present"
                        iconStyle={{ background: '#433d3a', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faUniversity} style={{fontSize:'50px', marginLeft:'-1.5rem'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">B.E. Computer Science and Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">SSN College of Engineering, Chennai</h4>
                        <p className="vt-content">
                            Read more at: &nbsp;
                            <a href="https://www.ssn.edu.in" target="blank"><u>SSN College of Engineering</u></a>
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        )
    }
}

export default Timeline
