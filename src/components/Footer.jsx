import React from 'react'

import "../styles/Footer.css"

export default function Footer() {
    return (
        <div id='footer'>
            <div className="footer-cont">
                <div className="footer-data">
                    <p className='copyright'>Copyright <span className='col'>&#169;</span>  2024    <span className='col'>Aung Zaw Myo</span> </p>
                    <button className='git-btn'>GitHub</button>
                    <a href='#' className='btt'>Back to Top <span className='col'>&uarr;</span> </a>
                </div>
            </div>
        </div>
    )
}
