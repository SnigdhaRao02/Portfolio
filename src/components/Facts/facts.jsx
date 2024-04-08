import React, {useState} from "react";
// import './Navbar.css';
import styles from "./facts.module.css"
import aboutImg from "../../assets/about/image.png";
import girlIcon from "../../assets/about/girl.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";


import { useRef } from 'react'
import { styled } from '@stitches/react'
import { useTrail, animated } from '@react-spring/web'

const AppContainer = styled('div', {
  width: '100vw',
  height:'100%',
  borderRadius:'30px',
  margin:'auto',
  marginTop: '90px',
  marginBottom:'0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  flexWrap: 'wrap',
  padding:'0 5%'
})

const Container = styled('div', {
  display: 'flex',
  flexDirection:'row',
  gap: 10,
  marginBottom: 80,
  flexWrap: 'wrap'
})

const Box = styled('div', {
  position: 'relative',
  height: 200,
  width: 200
})

const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight:700,
  backfaceVisibility: 'hidden',
  padding:'10%'
}

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#19376d',
  border: 'solid 2px #1a1a1a',
  borderRadius:'10px'
})

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#0b2447',
  border: 'solid 2px #0b2447',
  color: '#fafafa',
  borderRadius:'10px'
})

const items = ['I value attention to user experience 🔍',
 'A proud Navy B.R.A.T 🦾', 
 'Sunsets, lakes and pretty skies calm me down 🌅', 
 'Absolutely crazy about Jazz!🎧', 
 'I love creating products that resonate on an emotional level and drive business results 💡',
 'A Selenophile 🌑'
 ]

export const Facts =()=>{

    
    const [trail, api] = useTrail(items.length, () => ({
        rotateX: 0,
      }))
    
      const isFlipped = useRef(false)
    
      const handleClick = () => {
        if (isFlipped.current) {
          api.start({
            rotateX: 0,
          })
          isFlipped.current = false
        } else {
          api.start({
            rotateX: 180,
          })
          isFlipped.current = true
        }
      }
    
      return (
        
        <AppContainer id="facts">
                <h2 className={styles.heading}>Random facts about me!</h2>
                {/* <p className={styles.para}>Click the cards to find out</p> */}

          <Container onClick={handleClick}>
            {trail.map(({ rotateX }, i) => (
              <Box key={i}>
                <FrontBox
                  key={items[i]}
                  style={{
                    transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                    transformStyle: 'preserve-3d',
                  }}>
                  {<img className={styles.quesImg} src={girlIcon}/>}
                </FrontBox>
                <BackBox
                  style={{
                    transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                    transformStyle: 'preserve-3d',
                  }}>
                  {items[i]}
                </BackBox>
              </Box>
            ))}
          </Container>
        </AppContainer>
      )
}