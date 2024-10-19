import React, { useEffect, useRef, useState } from 'react'


import "../styles/About.css"

    export default function About() {

        // const allDisplay = useRef(null);
        const aboutDisplay = useRef(null);
        const skillDisplay = useRef(null);
        const projectDisplay = useRef(null);

        const [ skillState, setSkillState ] = useState(
            {
                html: "90%",
                css: "80%",
                javaScript: "75%",
                python: "50%",
                php: "60%",
                laravel: "88%",
                react: "75%",
                node: "88%",
                // test: 90,
            }
        )

        const [ page, setPage ] = useState("");
        // console.log(page)
        
        const displays = [aboutDisplay, skillDisplay, projectDisplay];

        const handlePage = (e) => {
            setPage(e.target.value);
            displays.forEach( display => {
                display.current.style.display = "none";
            } );

            if ( e.target.value === "about") {
                aboutDisplay.current.style.display = "block";
            }
            if ( e.target.value === "skill") {
                skillDisplay.current.style.display = "block";
                
            }
            if ( e.target.value === "project") {
                projectDisplay.current.style.display = "block";
            }
        }

        // Skill Bar 
        const htmlRef = useRef(null);
        const cssRef = useRef(null);
        const javaScriptRef = useRef(null);
        const pythonRef = useRef(null);
        const phpRef = useRef(null);
        const laravelRef = useRef(null);
        const reactRef = useRef(null);
        const nodeRef = useRef(null);


        const keyFrames = (name) => {
            const styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            styleSheet.innerHTML = `@keyframes ${name} {
                                        0% {
                                            width: 0;
                                        }
                                        100% {
                                            width: ${skillState.name}%;
                                        }`
            document.head.appendChild(styleSheet);
        }
            
        useEffect(()=>{
            // const styleSheet = document.createElement('style');
            // styleSheet.type = 'text/css';
            // styleSheet.innerHTML = `@keyframes html {
            //                             0% {
            //                                 width: 0;
            //                             }
            //                             100% {
            //                                 width: ${skillState.html}%;
            //                             }`
            // document.head.appendChild(styleSheet);
            keyFrames("html");
            if (htmlRef.current) {
                htmlRef.current.style.width = skillState.html;
                htmlRef.current.style.animation = ' html 0.5s';
                // htmlRef.current.innerHTML = 1;
            }
            keyFrames("css");
            if (cssRef.current) {
                cssRef.current.style.width = skillState.css;
                cssRef.current.style.animation = ' css 0.5s';
            }
            keyFrames("javaScript");
            if (javaScriptRef.current) {
                javaScriptRef.current.style.width = skillState.javaScript;
                javaScriptRef.current.style.animation = ' javaScript 0.5s';
            }
            keyFrames("python");
            if (pythonRef.current) {
                pythonRef.current.style.width = skillState.python;
                pythonRef.current.style.animation = ' python 0.5s';
            }
            keyFrames("php");
            if (phpRef.current) {
                phpRef.current.style.width = skillState.php;
                phpRef.current.style.animation = ' php 0.5s';
            }
            keyFrames("laravel");
            if (laravelRef.current) {
                laravelRef.current.style.width = skillState.laravel;
                laravelRef.current.style.animation = ' laravel 0.5s';
            }
            keyFrames("react");
            if (reactRef.current) {
                reactRef.current.style.width = skillState.react;
                reactRef.current.style.animation = ' react 0.5s';
            }
            keyFrames("node");
            if (nodeRef.current) {
                nodeRef.current.style.width = skillState.node;
                nodeRef.current.style.animation = ' python 0.5s';
            }
        },[])


        
    return (
        <div id='about'>
            {/* <style>
                {
                    `
                    @keyframes html {
                        0% {
                            width: 0;
                        }
                        100% {
                            width: ${skillState.html};
                        }
                    }
                    `
                }
            </style> */}
            <div className="about-cont">
                <h1 className="header">About <span className='col'>Me</span></h1>
                <div className="about-nav-cont">
                    <button className='about-btn' value="about" onClick={handlePage}>About</button>
                    <button className='about-btn' value="skill" onClick={handlePage}>Skills</button>
                    <button className='about-btn' value="project" onClick={handlePage}>Projects</button>
                </div>
                <div className="data-cont">
                    <section id='aboutMe' ref={aboutDisplay} style={{display: "block"}}>
                        <div className="data">
                            <div className="img"></div>
                            <div className="text">
                            Hi, <span style={{fontWeight: "600", color:"#A3FEF9"}}>I’m Aung zaw Myo</span>, a passionate web developer with one years of experience in building dynamic and responsive websites and applications. My expertise lies in creating seamless user experiences and efficient back-end systems, ensuring websites are fast, secure, and user-friendly. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Node.js, I thrive on transforming ideas into web solutions that meet both client and user needs. Whether working independently or as part of a collaborative team, I love turning complex problems into simple, elegant code.
                            </div>
                        </div>
                    </section>
                    <section id='skill' ref={skillDisplay} style={{ display: "none"}}>
                        <div className="data">
                            <div className="data-items">
                                <li>
                                    <h3>HTML</h3>
                                    <span className='bar'><span ref={htmlRef} className='bar-data html'> {skillState.html}</span></span>
                                </li>
                                <li>
                                    <h3>CSS</h3>
                                    <span className='bar'><span ref={cssRef} className='bar-data'> {skillState.css}</span></span>
                                </li>
                                <li>
                                    <h3>JavaScript</h3>
                                    <span className='bar'><span ref={javaScriptRef} className='bar-data'> {skillState.javaScript}</span></span>
                                </li>
                                <li>
                                    <h3>Python</h3>
                                    <span className='bar'><span ref={pythonRef} className='bar-data'> {skillState.python}</span></span>
                                </li>
                            </div>
                            <div className="skill-header">
                                My Skills
                            </div>
                            <div className="data-items item-two">
                                <li>
                                    <h3>Php</h3>
                                    <span className='bar'><span ref={phpRef} className='bar-data'> {skillState.php}</span></span>
                                </li>
                                <li>
                                    <h3>Laravel</h3>
                                    <span className='bar'><span ref={laravelRef} className='bar-data'> {skillState.laravel}</span></span>
                                </li>
                                <li>
                                    <h3>React</h3>
                                    <span className='bar'><span ref={reactRef} className='bar-data'> {skillState.react}</span></span>
                                </li>
                                <li>
                                    <h3>Python</h3>
                                    <span className='bar'><span ref={nodeRef} className='bar-data'> {skillState.node}</span></span>
                                </li>
                            </div>
                        </div>
                    </section>
                    <section id='project' ref={projectDisplay} style={{display: "none"}}>
                        <div className="data">
                            <div className="proj-header">
                                My Projects
                            </div>
                            <div className="project-cont">
                                <div className="img"></div>
                                <div className="img"></div>
                                <div className="img"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
