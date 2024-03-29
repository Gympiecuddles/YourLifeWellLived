import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link'

const TextBox = styled(motion.div)`
  position: absolute;
  top: 48%;
  left: 55%;
  width: 500px;
  color: #ffffff;
  z-index: 3;
  h3 {
    margin: 20px;
    font-size: 2.2em;
  }
  h4 {
    margin: 20px;
    margin-bottom: 40px;
    padding: 0;
    font-size: 1.2em;
    font-weight: 400;
  }
  @media screen and (max-width: 1600px) {
    top: 60%;
    left: 35%;
  }
  @media screen and (max-width: 850px) {
    top: 55%;
    left: 12%;
    width: 350px;
  }
  @media screen and (max-width: 850px) {
    top: 55%;
    left: 12%;
    width: 350px;
  }
  @media screen and (max-width: 528px) {
    top: 55%;
    left: 0%;
    width: 300px;
    h3 {
      margin: 20px;
      font-size: 1.7em;
    }
    h4 {
      margin: 20px;
      margin-bottom: 40px;
      padding: 0;
      font-size: 1em;
      font-weight: 400;
    }
  }
`;

const MotionHashLink = motion(HashLink);
const StyledHashLink = styled(MotionHashLink)`
    margin: 20px;
    padding: 15px;
    border: solid 2px #ffffff;
    background-color: #ffffff00;
    color: #ffffff;
    font-size: 1em;
    text-decoration: none;
    z-index: 5;
    cursor: pointer;
`; 

const h3Motion = {
    init: { opacity: 0, x: 50 },
    start: { opacity: 1, x: 0, 
        transition: { delay: 1, duration: .4 }},
}

const h4Motion = {
    init: { opacity: 0, x: 50 },
    start: { opacity: 1, x: 0, 
        transition: { delay: 1.2, duration: .4 }},
}

const buttonMotion = {
    init: { opacity: 0, x: 50 },
    start: { opacity: 1, x: 0, 
        transition: { delay: 1.4, duration: 1 }},
    hover: { border: "solid 2px #95e1f8", 
        transition: { delay: 0, duration: .2 }}
}

export default function Carousel({innerText, counter, location}) {
    let view = counter + 1;

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -80; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  
  return (
    <TextBox initial="init" animate="start" whileHover="hover">
      {view && <motion.h3
                    key={counter}  
                    variants={h3Motion}
                    >{innerText.head[counter]}
                </motion.h3>}
      {view && <motion.h4 
                    key={view} 
                    variants={h4Motion}
                    >{innerText.subhead[counter]}
                </motion.h4>}
      {view && <StyledHashLink 
                    smooth
                    key={counter + 100} 
                    variants={buttonMotion}
                    to={location[counter]}
                    scroll={el => scrollWithOffset(el)}
                    >{innerText.button[counter]}
                    </StyledHashLink>}
    </TextBox>
  )
}
