import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

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
    padding: 0;
    font-size: 1.2em;
    font-weight: 400;
  }
  button {
    margin: 20px;
    padding: 15px;
    border: solid 2px #ffffff;
    background-color: #ffffff00;
    color: #ffffff;
    font-size: 1em;
    z-index: 5;
    cursor: pointer;
  }
`;

const h3Motion = {
    init: { opacity: 0, x: 500 },
    start: { opacity: 1, x: 0, 
        transition: { delay: 1, duration: .4 }},
}

const h4Motion = {
    init: { opacity: 0, x: 500 },
    start: { opacity: 1, x: 0, 
        transition: { delay: 1.2, duration: .4 }},
}

const buttonMotion = {
    init: { opacity: 0, x: 500 },
    start: { opacity: 1, x: 0, 
        transition: { delay: 1.4, duration: .4 }},
    hover: { border: "solid 2px #95e1f8", 
        transition: { delay: 0, duration: .2 }}
}

export default function Carousel({innerText, counter}) {
    let view = counter + 1;
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
      {view && <motion.button 
                    key={counter + 100} 
                    variants={buttonMotion}
                    >{innerText.button[counter]}
                    </motion.button>}
    </TextBox>
  )
}
