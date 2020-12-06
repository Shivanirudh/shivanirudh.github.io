import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faHistory} from '@fortawesome/free-solid-svg-icons';

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export class Navigation extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar-links">
                    <li className="menu-icon">
                        <Link className="sidebar-item" to="#">
                            <span className="sidebar-item-name menu-icon-name">Map</span>
                            <FontAwesomeIcon className="logo-icon" icon={faAngleDoubleRight} style={{fontSize:"40px"}} rotation={180}/>
                        </Link>
                    </li>
                    <li className="link">
                        <Link className="sidebar-item" to="/">
                            <FontAwesomeIcon className="link-icon" icon={faHome} style={{fontSize:"40px"}}/>
                            <span className="sidebar-item-name">Home</span>
                        </Link>
                    </li>
                    <li className="link">
                        <Link className="sidebar-item" to="/about">
                            <FontAwesomeIcon className="link-icon" icon={faInfoCircle} style={{fontSize:"40px"}}/>
                            <span className="sidebar-item-name">Owner Info</span>
                        </Link>
                    </li>

                    <li className="link">
                        <Link className="sidebar-item" to="/timeline">
                            <FontAwesomeIcon className="link-icon" icon={faHistory} style={{fontSize:"40px"}}/>
                            <span className="sidebar-item-name">Timeline</span>
                        </Link>
                    </li>
                    {/*Social Media*/}
                    <li className="link">
                        <div className="social-media-icons" to="#">
                            <a href="mailto:shivanirudh2001@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                            &nbsp;
                            <a href="https://www.linkedin.com/in/shivanirudh-s-g/" target="blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                            &nbsp;
                            <a href="https://github.com/Shivanirudh" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
                            &nbsp;
                            <a href="https://instagram.com/shiv_anirudh" target="blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation
