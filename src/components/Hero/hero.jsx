import React, {useEffect, useState} from "react";
// import './Navbar.css';
import styles from "./hero.module.css"
import heroImg from "../../assets/hero/Heroimage.png";



export const Hero =()=>{

    // to rotate words
    const [loopNum, setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate=["a fellow </coder>","a Web Developer","a UI/UX Designer","a Technophile" ,"a Coffee enthusiast","a Melomaniac" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*200);
    const period = 500;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
               Hi! I'm Snigdha<span className={styles.wrap}> {text}</span>
            </h1>
            <p className={styles.description}>A Computer Science Graduate student at North Carolina State University. I work and experiment with Full stack development, App development and Machine learning.</p>
            <a href="mailto:snigdhakotharu02@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImg} alt="Hero image" className={styles.heroImage}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
}