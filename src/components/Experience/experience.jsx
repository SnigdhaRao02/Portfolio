import React, {useState} from "react";

import styles from "./experience.module.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import {getImageUrl} from "../../utils";
import nishImg from "../../assets/history/nishkaera_logo.jpeg";



export const Experience =()=>{

    
    return <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return ( <div key={id}>
                        <div className={styles.skill}>
                            
                            <p>{skill.title}</p>
                            </div>
                        </div>
                    );
                })
                }</div>
            <ul className={styles.history}>

                {
                    history.map((historyItem, id)=>{
                        return (<li key={id} className={styles.historyItem}>
                            <img src={nishImg} className={styles.nishImg}/>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}`}</h3>
                                <p>{ `${historyItem.organization}`}</p>
                                
                                <ul>{historyItem.experiences.map((exp,id)=>{
                                    return <li key={id}>{exp}</li>
                                })

                                }</ul>
                            </div>
                        </li>
                        );
                    })
                }
            </ul>
        </div>

    </section>
}