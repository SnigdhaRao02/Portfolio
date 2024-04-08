import React, {useState} from "react";

import styles from "./contact.module.css";


import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedInIcon from "../../assets/contact/linkedinIcon.png";



export const Contact =()=>{

    
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out if you want to connect. <br/>We can grab a cup of coffee and get coding!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon}/>
                    <a href="mailto:snigdhakotharu02@gmail.com" target="_blank">snigdhakotharu02@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={githubIcon}/>
                    <a href="https://github.com/SnigdhaRao02" target="_blank">github.com/SnigdhaRao02</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedInIcon}/>
                    <a href="https://www.linkedin.com/in/snigdha-kotharu/" target="_blank">linkedin.com/snigdha-kotharu</a>
                </li>
            </ul>
        

    </footer>
}