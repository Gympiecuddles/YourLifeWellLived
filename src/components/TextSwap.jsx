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
  @media screen and (max-width: 1950px) {
    height: 900px;
    h2 {
      margin-left: 50px;
      margin-bottom: 10px;
      font-size: 2em;
    }
    p {
      margin-left: 50px;
      margin-right: 82px;
      font-size: 1.2em;
    }
    div {
      margin-top: 100px;
      h3 {
        width: 550px;
        font-size: 1.5em;
      }
      p {
        font-size: 1em;
      }
      span {
        div {
          margin: 10px;
          height: 200px;
        }
      }
    }
  }
  @media screen and (max-width: 1600px) {
    height: 700px;
    h2 {
      margin-left: 10px;
      margin-bottom: 0px;
      padding: 0px;
      padding-left: 18px;
      padding-right: 18px;
      font-size: 1.8em;
    }
    p {
      margin-left: 10px;
      font-size: 1.1em;
    }
    div {
      margin-top: 50px;
      h3 {
        width: 550px;
        font-size: 1.4em;
        line-height: 40px;
      }
      p {
        margin-bottom: 10px;
        font-size: .9em;
      }
      span {
        div {
          margin-top: 50px;
          height: 100px;
          h4 {
            width: 200px;
            font-size: 1.2em;
          }
          p {
            width: 160px;
            font-size: .9em;
            line-height: 22px;
          }
        }
      }
      b {
        margin-top: 150px; 
        font-size: .9em;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    height: 600px;
    h2 {
      font-size: 1.6em;
    }
    p {
      font-size: 1em;
    }
    div {
      margin-top: 30px;
      h3 {
        font-size: 1.2em;
        line-height: 38px;
      }
      p {
        margin-bottom: 0px;
        font-size: .8em;
      }
      span {
        div {
          margin-top: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    height: 850px;
    h2 {
      font-size: 1.6em;
    }
    p {
      font-size: 1em;
    }
    div {
      margin-top: 120px;
      h3 {
        font-size: 1.2em;
        line-height: 38px;
      }
      p {
        margin-bottom: 0px;
        width: 700px;
        font-size: .8em;
        text-align: center;
      }
      span {
        width: 100%;
        div {
          margin-top: 50px;
        }
      }
      b {
        margin-top: 200px;
      }
    }
  }
  @media screen and (max-width: 710px) {
    div {
      h3 {
        width: 70%;
        font-size: 1em;
      }
      p {
        width: 88%;
      }
      span {
        div {
          h4 {
            width: 100%;
          }
          p {
            padding: 0px;
            padding-top: 10px;
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    height: 850px;
    h2 {
      font-size: 1.6em;
    }
    p {
      font-size: 1em;
    }
    div {
      margin-top: 120px;
      h3 {
        width: 70%;
        font-size: 1em;
        line-height: 30px;
      }
      p {
        margin-bottom: 0px;
        width: 88%;
        font-size: .8em;
        text-align: center;
      }
      span {
        width: 100%;
        div {
          h4 {
            width: 100%;
            font-size: 1em;
          }
          p {
            width: 100%;
            font-size: .8em;
          }
        }
      }
      b {
        margin-top: 190px;
      }
    }
  }
  @media screen and (max-width: 444px) {
    height: 850px;
    h2 {
      font-size: 1.6em;
    }
    p {
      font-size: 1em;
    }
    div {
      margin-top: 80px;
      h3 {
        width: 70%;
        font-size: 1em;
        line-height: 30px;
      }
      p {
        margin-bottom: 0px;
        width: 88%;
        font-size: .8em;
        text-align: center;
      }
      span {
        width: 90%;
        div {
          h4 {
            width: 100%;
            font-size: .8em;
          }
          p {
            padding: 8px;
            width: 100%;
            font-size: .7em;
          }
        }
      }
      b {
        margin-top: 170px;
      }
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