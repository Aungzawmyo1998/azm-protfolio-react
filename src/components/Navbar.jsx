import React from 'react'

import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <div id='navBar'>
            <div className="nav-cont">
                <div className="logo">
                    Aung
                </div>
                <ul className="nav-bar">
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Service</li>
                    <li className='nav-item'>Blog</li>
                </ul>
            </div>
        </div>
    )
}
