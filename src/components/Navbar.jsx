import React, { useEffect, useState } from 'react'

import "../styles/Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [ scroll, setScroll ] = useState(null);

    const [fix , setFix ] = useState(false);
    const navFix = () => {
        setScroll(window.scrollY)
        if( window.scrollY >= 100 ) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
   
    window.addEventListener("scroll", navFix);
    
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("#navBar .nav-item>a");
        // console.log(sections)
        window.onscroll = () => {
            sections.forEach( sec => {
                let top = window.scrollY + 130;
                let offset = sec.offsetTop ;
                let height = sec.offsetHeight;
                let id = sec.getAttribute("id");

                


                if( top >= offset && top < offset + height ) {
                    navLinks.forEach( link => {
                        link.classList.remove("nav-active");
                        document.querySelector(`#navBar .nav-item>a[href*='${id}']`)?.classList.add("nav-active");
                    });

                }
                
            } )
        }

        window.removeEventListener("scroll", navFix);
        
    }, [scroll])

    

    return (
        <div id='navBar'>
            <div className={ fix ? "nav-cont nav-fix" : "nav-cont" }>
                <div className="logo">
                    Aung
                </div>
                <ul className="nav-bar">
                    <li className='nav-item'><a href="#home" className='nav-active'>Home</a></li>
                    <li className='nav-item'><a href="#about">About</a></li>
                    <li className='nav-item'><a href="#service">Service</a></li>
                    <li className='nav-item'><a href="#blog">Blog</a></li>
                    <li className='nav-item'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
