import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail, faDownload, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareWhatsapp,faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

import azm  from "../assets/images/azm-profile.png";



import "../styles/Home.css"

export default function Home() {

    const  [text]  = useTypewriter({
        words: ["Aung Zaw Myo", "Full Stack Developer"],
        loop: {},
        typeSpeed: 100,
        
        delaySpeed: 1000,
        
    })

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
    // const sections = document.querySelectorAll("section");
    // console.log(sections)

    return (
        <section id='home'>
            <div className="home-cont">
                <div className="header">
                    Developer
                </div>
                <div className="context">
                    <div className="profile-cont">
                        <div className="profile">
                            <div className="img">
                                <img className='pro-img' src={azm} alt="" />
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
                                    <FontAwesomeIcon className='contact-icon ' icon={faMapLocationDot} /> <span className='contact-data'>No(163), Myeik Road, Dawei, Tanintharyi </span>
                                </div>
                            </div>
                            
                            <div className="icon-cont">
                                <a href=""><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                <a href=""><FontAwesomeIcon className='icon' icon={faSquareWhatsapp} /></a>
                                <a href=""><FontAwesomeIcon className='icon' icon={faSquareFacebook} /></a>
                            </div>
                            <button onClick={downloadCV} className='download-btn btn-hover'>Download CV <FontAwesomeIcon className='down-icon' icon={faDownload} /> </button>
                        </div>
                    </div>
                    <div className="data-cont">
                        <a href='#contact' className='contact-btn btn-hover'>Contact Me</a>
                        <div className="data">
                            <h1 className='text'>Hello</h1>
                            <h1 className='text'>
                                I am <span className="name">{ text }<Cursor cursorColor='#FFF' cursorStyle="_" cursorBlinking={100} /> </span>
                            </h1>
                            <p>
                                In a time-pressured environment, I efficiently manage projects by setting priorities, breaking tasks into smaller parts, and using time management tools like the Pomodoro Technique and Gantt charts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
