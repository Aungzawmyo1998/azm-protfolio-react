import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import "../styles/Home.css"

export default function Home() {
    return (
        <div id='home'>
            <div className="home-cont">
                <div className="header">
                    Developer
                </div>
                <div className="context">
                    <div className="profile-cont">
                        <div className="profile">
                            <div className="img">

                            </div>
                            <div className="name">
                                Aung
                            </div>
                            <div className="icon-cont">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className="data-cont">
                        <a href='#' className='contact-btn'>Contact Me</a>
                        <div className="data">
                            <h1 className='text'>Hello</h1>
                            <h1 className='text'>
                                I am <span className="name">Aung Zaw Myo</span>, <br />
                                Full Stack Developer
                            </h1>
                            <p>
                                In a time-pressured environment, I efficiently manage projects by setting priorities, breaking tasks into smaller parts, and using time management tools like the Pomodoro Technique and Gantt charts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
