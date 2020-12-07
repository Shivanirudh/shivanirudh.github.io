import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faHistory} from '@fortawesome/free-solid-svg-icons';

export class Navigation extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar-links">
                    <li className="menu-icon">
                        <div className="sidebar-item" to="#">
                            <span className="sidebar-item-name menu-icon-name">Map</span>
                            <FontAwesomeIcon className="logo-icon" icon={faAngleDoubleRight} style={{fontSize:"40px"}} rotation={180}/>
                        </div>
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
                </ul>
            </div>
        )
    }
}

export default Navigation
