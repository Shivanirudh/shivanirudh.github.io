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
                            <dummy className="item-value">Shivanirudh S G</dummy>
                        </p>
                        <p align="center" className="item">
                            <b className="item-head">Role  :</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <dummy className="item-value">Programmer/Software Developer</dummy>
                        </p>
                    </div>
                </span>
                <div className="bio">
                    <h2 className="bio-head">Bio:</h2>
                    <div className="bio-content">
                        R, python, javascript, shiny, dplyr, purrr, ditto, ggplot, d3, canvas, spark, sawk, pyspark,
                        sparklyR, lodash, lazy, bootstrap, jupyter, vulpix, git, flask, numpy, pandas, feebas, 
                        scikit, bgm, bayes, h20.ai, sparkling-water, tensorflow, keras, onyx, ekans, hadoop, scala, 
                        unity, gc, metapod, c#/c++, krebase, neo4j. <br/>
                        
                        I typically ask recruiters to point out which of these are pokemon.<img className="pokeball" src="https://img.icons8.com/color/25/000000/pokeball.png" alt="pokeball" />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Owner
