import React, {useState} from "react";

import styles from "./projects.module.css";

import projects from "../../data/projects.json";
import projImage from "../../assets/projects/Projectsimage.png";
import {ProjectCard} from "../Projects/ProjectCard";


export const Projects =()=>{

    
    return <section id="projects" className={styles.container}>
         <h2 className={styles.title}>Projects</h2>
         <div className={styles.projects}>{
            projects.map((project,id)=>{
                return (
                    <ProjectCard key={id} project={project}/>
                );
            })
        }</div>

        
    </section>
}