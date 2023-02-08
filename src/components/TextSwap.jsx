import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import Arrow from './Arrow';

const HeaderSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin-top: 150px;
  width: 100%;
  height: 1100px;
  background-color: #00000000;
  filter: drop-shadow(2px 2px 6px #000000);
  z-index: 1;
  h2 {
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 2.3em;
    font-weight: 400;
    letter-spacing: 6px;
    color: #ffffff;
    z-index: 3;
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1.4em;
    letter-spacing: 1.25px;
    color: #ffffff;
  }
  div {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 250px;
    h3 {
      width: 500px;
      font-size: 1.9em;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 5px;
      color: white;
      text-align: center;
    }
    p {
      margin: 0;
      margin-bottom: 100px;
      font-size: 1.5em;
      font-weight: 600;
      color: #ffffff;
      background-color: #00000000;
    }
    span {
      width: 900px;
      display: flex;
      justify-content: center;
      div {
        margin: 10px;
        height: 200px;
        h4 {
          width: 190px;
          color: #ffffff;
          font-size: 1.2em;
          text-align: center;
        }
        p {
          width: 160px;
          font-size: .9em;
          font-weight: 600;
          line-height: 25px;
          text-align: center;
        }
      }
    }
    b {
      margin-top: 80px; 
      font-size: .9em;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;

const motionArgs = {
  init: { opacity: 0 },
  start: { opacity: 1, 
      transition: { delay: .8, duration: .5 }},
}


export default function Carousel({innerText, counter}) {
  let view = counter + 1;
  return (
    <HeaderSection style={{ marginTop: "150px"}} initial="init" animate="start">
      {view && 
        <motion.h2
          key={counter}  
          variants={motionArgs}
          >{innerText.head[counter]}
        </motion.h2>
      }
      {view && 
        <motion.p 
          key={view} 
          variants={motionArgs}
          >{innerText.subhead[counter]}
        </motion.p>
      }
      <div>
        {view && 
          <motion.h3 
            key={counter + 1} 
            variants={motionArgs}
            >{innerText.head2[counter]}
          </motion.h3>
        }
        {view && 
          <motion.p 
            key={view + 1} 
            variants={motionArgs}
            >{innerText.subhead2[counter]}
          </motion.p>
        }
        <span>
          <div>
            {view && 
              <motion.h4 
                key={counter + 2} 
                variants={motionArgs}
                >{innerText.row1[counter]}
              </motion.h4>}
            {view && 
              <motion.p 
                key={view + 2} 
                variants={motionArgs}
                >{innerText.text1[counter]}
              </motion.p>}
          </div>
          <div>
            {view && 
              <motion.h4 
                key={counter + 3} 
                variants={motionArgs}
                >{innerText.row2[counter]}
              </motion.h4>}
            {view && 
              <motion.p 
                key={view + 3} 
                variants={motionArgs}
                >{innerText.text2[counter]}
              </motion.p>}
          </div>
          <div>
            {view && 
              <motion.h4 
                key={counter + 4} 
                variants={motionArgs}
                >{innerText.row3[counter]}
              </motion.h4>}
            {view && 
              <motion.p 
                key={view + 4} 
                variants={motionArgs}
                >{innerText.text3[counter]}
              </motion.p>}
          </div>
        </span>
        {view && 
          <motion.b 
            key={view + 5} 
            variants={motionArgs}
            >{innerText.call[counter]}
          </motion.b>}
        <Arrow position={"2%"} />
      </div>
    </HeaderSection>
  )
}