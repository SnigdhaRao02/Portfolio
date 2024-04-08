import React, {useState} from "react";
// import './Navbar.css';
import styles from "./about.module.css"
import aboutImg from "../../assets/about/image.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";


export const About =()=>{

    
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg} src={aboutImg} alt="me with laptop"></img>
            <ul className={styles.aboutItems}><li className={styles.aboutitem}>
                <img  src={cursorIcon} alt="cursor icon"/>
                <div className={styles.aboutitemtxt}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                    <p className={styles.tech}>React, Node, EJS, JQuery, JavaScript, Mongoose</p>
                </div>
                </li>

                <li className={styles.aboutitem}>
                <img src={serverIcon} alt="cursor icon"/>
                <div className={styles.aboutitemtxt}>
                    <h3>Backend Developer</h3>
                    <p>I have experience in developing fast and optimized backend systems and APIs.</p>
                    <p className={styles.tech}>Spring Boot, Express, MySQL, MongoDB, Flask</p>
                </div>
                </li>

                <li className={styles.aboutitem}>
                <img src={uiIcon} alt="cursor icon"/>
                <div className={styles.aboutitemtxt}>
                    <h3>UI Designer</h3>
                    <p>I have desgined multiple mood boards, wire-frames and web interfaces. Also developed systems keeping in mind accessibility and usability while not compromising on creativity.</p>
                    <p className={styles.tech}>Figma, BootStrap, Material UI, Tailwind CSS</p>
                    <p className={styles.tech}></p>
                </div>
                </li>
            </ul>
            
            </div>
    </section>
}