import React, { Component } from 'react'
import Zoom from 'react-reveal';


import ProPic from "./images/Profile.jpg";
import CV from "./images/Shivanirudh.pdf"

export class Owner extends Component {
    render() {
        return (
            <div className="owner">
                <Zoom cascade>
                    <h1 className="owner-head">Owner Info</h1>
                </Zoom>
                <Zoom cascade>
                <span className="name-pic">
                    <div className="picture">
                        <img src={ProPic} alt="ProfilePicture" height="250px" width="250px" style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="details">
                        <p align="center" className="item">
                            <b className="item-head">Name  :</b> &nbsp;&nbsp;
                            <span className="item-value">Shivanirudh S G</span>
                        </p>
                        <p align="center" className="item">
                            <b className="item-head">Role  :</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="item-value">Programmer/Software Developer</span>
                        </p>
                    </div>
                </span>
                </Zoom>
                <div className="bio">
                    <Zoom cascade>
                        <div className="bio-content">
                            R, python, javascript, shiny, dplyr, purrr, <span className="answer">ditto</span>, ggplot, d3, canvas, spark, <span className="answer">sawk</span>, pyspark,
                            sparklyR, lodash, lazy, bootstrap, jupyter, <span className="answer">vulpix</span>, git, flask, numpy, pandas, <span className="answer">feebas</span>, 
                            scikit, bgm, bayes, h20.ai, sparkling-water, tensorflow, keras, <span className="answer">onyx</span>, <span className="answer">ekans</span>, hadoop, scala, 
                            unity, gc, <span className="answer">metapod</span>, c#/c++, krebase, neo4j. <br/>
                            
                            I typically ask recruiters to point out which of these are pokemon.<img className="pokeball" src="https://img.icons8.com/color/25/000000/pokeball.png" alt="pokeball" />
                        </div>
                        <h2 className="bio-head">Bio:</h2>
                        <div className="bio-interests">
                            I am currently a junior at <a href="https://www.ssn.edu.in"><u>SSN College of Engineering</u></a> pursuing my undergraduate education in <b>Computer Science and Engineering</b>. 
                            I am interested in the fields of <b>Machine Learning</b>, <b>Data Science</b> and <b>Natural Language Processing</b>.
                            Click <a href={CV} target="blank"><u>here</u></a> to view my resume.
                        </div>
                    </Zoom>
                </div>
                
            </div>
        )
    }
}

export default Owner
