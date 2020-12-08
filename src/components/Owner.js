import React, { Component } from 'react'

import ProPic from "./images/Profile.jpg";

export class Owner extends Component {
    render() {
        return (
            <div className="owner">
                <h1 className="owner-head">Owner Info</h1>
                <span className="name-pic">
                    <div className="picture">
                        <img src={ProPic} alt="ProfilePicture" height="250px" width="250px" style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="details">
                        <p align="center" className="item">
                            <b className="item-head">Name  :</b> &nbsp;&nbsp;
                            Shivanirudh S G
                        </p>
                        <p align="center" className="item">
                            <b className="item-head">Role  :</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <dummy className="item-value">Programmer/Software Developer</dummy>
                        </p>
                    </div>
                </span>
                
            </div>
        )
    }
}

export default Owner
