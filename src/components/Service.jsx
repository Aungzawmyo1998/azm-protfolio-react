import React from 'react'

import "../styles/Service.css";

export default function Service() {
    return (
        <div id='service'>
            <div className="service-cont">
                <h1 className="header col">Service</h1>
                <div className="data-cont">
                    <div className="service-header-cont">
                        <div className="icon">
                            code
                        </div>
                        <div className="service-header">
                            Web Development
                        </div>
                    </div>
                    <div className="data">
                        <p className='data-text'>
                        <span className='col'>Custom Website Development:</span> I build websites from scratch, using the latest technologies like HTML5, CSS3, JavaScript, React, and more, to create fully custom and dynamic web solutions.
                        </p>
                        <p className='data-text'>
                        <span className='col'>Responsive Design:</span> Ensuring your website looks and functions perfectly on all devices—whether it's a desktop, tablet, or mobile phone.
                        </p>
                    </div>
                    <button className='service-btn'>Read more</button>
                </div>
            </div>
        </div>
    )
}
