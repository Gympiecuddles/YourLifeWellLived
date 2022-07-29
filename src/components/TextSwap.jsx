import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin-top: 150px;
  width: 100%;
  height: 1100px;
  background-color: #00000000;
  z-index: 1;
  h2 {
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 3em;
    font-weight: 400;
    letter-spacing: 6px;
    color: #ffffff;
    opacity: 0;
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1em;
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
      font-size: 1.8em;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 5px;
      color: white;
      text-align: center;
    }
    p {
      margin: 0;
      margin-bottom: 100px;
      font-size: 1.1em;
      color: #ffffff;
      background-color: #00000000;
    }
    span {
      width: 800px;
      display: flex;
      justify-content: center;
      div {
        margin: 10px;
        height: 200px;
        h4 {
          width: 130px;
          color: #ffffff;
          font-size: .9em;
          text-transform: uppercase;
          text-align: center;
        }
        p {
          width: 160px;
          font-size: 1em;
          font-weight: 600;
          line-height: 25px;
          text-transform: uppercase;
          text-align: center;
        }
      }
    }
    b {
      margin-top: 100px; 
      font-size: .9em;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;

export default function Carousel(props) {
  const [text, setText] = useState(false);

  useEffect(()=> {
    const timer2 = setInterval(() => setText(!text), 3000);

    return () => {
        clearInterval(timer2);
    }
  }, [text]);

  console.log(text);
  return (
    <AnimatePresence exitBeforeEnter>
      <HeaderSection style={{ marginTop: "150px"}}>
        {text ? 
        <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>Nayara Springs</motion.h2> 
        : <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>Denver</motion.h2>}
        {text ? <p>Costa Rica</p> : <p>Colorado</p>}
        <div>
          {text ? <h3>A SECLUDED PLACE OF UNDERSTATED LUXURY</h3> : <h3>BEAUTIFUL AND RUSTIC</h3>}
          {text ? <p>Arenal Volcano National Park, Costa Rica</p> : <p>Someplace, Denver</p>}
          <span>
            <div>
              {text ? <h4>Travel & leisure</h4> : <h4>Sites & leisure</h4>}
              {text ? <p>Top 2 Hotel in the World</p> : <p>Top 1 Hotel in the World</p>}
            </div>
            <div>
              {text ? <h4>Conde nast traveller</h4> : <h4>Red Rocks</h4>}
              {text ? <p>Best Hotel spa in the World</p> : <p>Best Hotels resturant in the World</p>}
            </div>
            <div>
              {text ? <h4>Tripadvisor</h4> : <h4>Tripadvisor</h4>}
              {text ? <p>Nº1 luxury Hotel in the World</p> : <p>Nº1 luxury Hotel resturant in the World</p>}
            </div>
          </span>
          {text ? <b>start your nayara journey</b> : <b>start your Denver journey</b>}
        </div>
      </HeaderSection>
    </AnimatePresence>
  )
}