import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail, faDownload, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareWhatsapp,faSquareFacebook } from '@fortawesome/free-brands-svg-icons'





import "../styles/Home.css"

export default function Home() {

    const urlCV = 'http://localhost:3000/azm-cv.pdf';
    const downloadCV = () => {   

        fetch(urlCV).then( response => response.blob())
        .then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = urlCV.split("/").pop();
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", fileName);

            document.body.appendChild(aTag);

            aTag.click();
            aTag.remove();
        })
        
    }

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
                                <img src="" alt="" />
                            </div>
                            <div className="name">
                                Aung
                            </div>
                            <div className="profile-contact">
                                <div className='contact-row'>
                                    <FontAwesomeIcon className='contact-icon' icon={faVoicemail} style={{transform: "rotate(45deg"}} /> <span className='contact-data'> +959942172699 </span>
                                </div>
                                <div className='contact-row'>
                                    <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                                    <span className='contact-data'>mraungzaw303@gmail.com</span>
                                </div>
                                <div className='contact-row'>
                                    <FontAwesomeIcon className='contact-icon' icon={faMapLocationDot} /> <span className='contact-data'>No(163), Myeik Road, Dawei, Tanintharyi </span>
                                </div>
                            </div>
                            
                            <div className="icon-cont">
                                <a href=""><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                <a href=""><FontAwesomeIcon className='icon' icon={faSquareWhatsapp} /></a>
                                <a href=""><FontAwesomeIcon className='icon' icon={faSquareFacebook} /></a>
                            </div>
                            <button onClick={downloadCV} className='download-btn'>Download CV <FontAwesomeIcon className='down-icon' icon={faDownload} /> </button>
                        </div>
                    </div>
                    <div className="data-cont">
                        <a href='#contact' className='contact-btn'>Contact Me</a>
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
