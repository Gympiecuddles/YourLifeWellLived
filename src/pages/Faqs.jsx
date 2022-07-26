import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import one from '../assets/one.jpg'

const ImgLayer = styled(motion.img)`
  position: fixed;
  width: 100%;
  height: 30vh;
  background-color: #00000000;
  object-fit: cover;
  object-position: 0% 0%;
  z-index: -1;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 405px;
  background-color: #00000000;
  z-index: 1;
  h2 {
    margin-top: 150px;
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 2.5em;
    font-weight: 400;
    letter-spacing: 6px;
    background-color: #ffffff;
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1em;
    letter-spacing: 1.25px;
    background-color: #ffffff;
  }
`;

const FaqBox = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
  background-color: #ffffff;
  article {
    margin: 50px;
    margin-top: 100px;
    width: 18%;
    height: 1000px;
    strong {
      display: inline-block;
      margin: 10px;
      font-size: 1.1em;
      text-transform: uppercase;
    }
    p {
      margin: 10px;
      font-size: .9em;
      line-height: 23px;
    }
  }
  img {
    margin-top: 100px;
    width: 18%;
    height: 700px;
    object-fit: cover;
  }
`;

const ButtonBox = styled.div`
  margin-top: 38px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 350px;
    height: 60px;
    font-size: .9em;
    font-weight: 600;
    border: none;
    color: #ffffff;
    background-color: #000000;
    text-transform: uppercase;
  }
`;

export default function Faqs() {
  return (
    <>
      <ImgLayer src={one} />
      <HeaderSection>
        <h2>FAQ</h2>
        <p>Learn more about what to expect.</p>
      </HeaderSection>
      <FaqBox>
        <article>
          <strong>1. What is the length and frequency of our sessions?</strong>
          <p>Our standard sessions are 45 minutes and take place weekly. </p>
          <strong>2. HOW MUCH IS THE SESSION FEE?</strong>
          <p>The session fees vary according to experience of clinician.</p>
          <strong>3. IS THERE A SLIDING SCALE?</strong>
          <p>We offer a limited number of sliding scale appointments. We are happy to discuss more over the phone.</p>
          <strong>4. DO YOU BILL INSURANCE?</strong>
          <p>We do not bill insurance. However, we provide monthly superbills if you would like to submit them to your insurance carrier for reimbursement.</p>
          <strong>5. Where Do I PARk?</strong>
          <p>For our Eagle Rock location: There is metered parking along Colorado Blvd and free one-hour parking on Maywood.</p>
          <strong>6. Where do I go when I arrive?</strong>
          <p>For our Eagle Rock location: Our office is halfway down the outdoor hallway past the gate. Make yourself at home in our waiting room in Suite 2, and your therapist will greet you at your appointment time.</p>
          <strong>7. WHAT ARE YOUR PRIVACY PRACTICES?</strong>
          <p>You may review our privacy policy here.</p>
        </article>
        <img src={one} />
      </FaqBox>
      <ButtonBox>
        <motion.button whileHover={{ backgroundColor: "#444444" }}>Let's book an appointment</motion.button>
      </ButtonBox>
    </>
  )
}
