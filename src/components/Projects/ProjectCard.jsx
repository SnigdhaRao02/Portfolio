import React, {useState} from "react";

import styles from "./ProjectCard.module.css";

import projects from "../../data/projects.json";
import projImage from "../../assets/projects/Projectsimage.png";



export const ProjectCard =({project})=>{

    
    return <div className={styles.container}>
    <img src={projImage} className={styles.image}/>
    <h3 className={styles.title}>{project.title}</h3>
    <p className={styles.description}>{project.description}</p>
    <ul className={styles.skills}>{
        project.skills.map((skill,id)=>{
            return <li key={id} className={styles.skill}>{skill}</li>
        })
        }</ul>
        <div className={styles.links}>
            <a href={project.source} className={styles.link}>Source</a>
            </div>
</div>
}