import React from 'react'


import "../styles/About.css"

export default function About() {
    return (
        <div id='about'>
            <div className="about-cont">
                <h1 className="header">About <span className='col'>Me</span></h1>
                <div className="about-nav-cont">
                    <button className='about-btn'>About</button>
                    <button className='about-btn'>Skills</button>
                    <button className='about-btn'>Projects</button>
                </div>
                <div className="data-cont">
                    
                </div>
            </div>
        </div>
    )
}
