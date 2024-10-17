import React from 'react'

import "../styles/Contact.css"

export default function Contact() {
    return (
        <div id='contact'>
            <div className="contact-cont">
                <h1 className="header">
                    Contact <span className='col'> Me </span> !
                </h1>
                <form action="" className="form-cont">
                    <div className="row">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className="row">
                        <input type="text" placeholder='Email Address' />
                        <input type="text" placeholder='Phone No' />
                    </div>
                    <div className="row">
                        <textarea className='message' name="" id="" placeholder='Message ....'></textarea>
                    </div>
                    <div className="row">
                        <button className='contact-btn'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
