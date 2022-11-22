import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import one from '../assets/FaqImage1.jpg'
import banner from '../assets/Banner1.jpg'

const ImgLayer = styled(motion.img)`
  position: fixed;
  width: 100%;
  height: auto;
  background-color: #00000000;
  object-fit: cover;
  object-position: 50% 50%;
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
    margin-top: 180px;
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 2.5em;
    font-weight: 400;
    letter-spacing: 6px;
    color: #ffffff;
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1em;
    letter-spacing: 1.25px;
    color: #ffffff;
  }
`;

const FaqBox = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1000px;
  background-color: #cdfafc;
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
    object-fit: contain;
  }
`;

const ButtonBox = styled.div`
  padding-bottom: 90px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
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
      <ImgLayer src={banner} />
      <HeaderSection>
        <h2>FAQ</h2>
        <p>Learn more about what to expect.</p>
      </HeaderSection>
      <FaqBox>
        <article>
          <strong>What is the length and frequency of our sessions?</strong>
          <p>This will be determined by you and Jeanne Teleia but generally it's best to meet weekly for therapy and possibly less often for coaching.</p>
          <strong>What are your rates?</strong>
          <p>Rates are determined by the length of session, services provided and number of people involved.</p>
          <strong>Do you take insurance?</strong>
          <p>I am licensed for psychotherapy in Hawai'I and Colorado but I do not accept insurance.  I can provide receipts for you to submit to your insurance for 'out of network provider' reimbursement but this is not a guarantee of payment.  You will need to check the reimbursements with your insurance company.  Mental health care can be deducted on your taxes as a health expense in some cases.  Check with your tax professional.</p>
          <strong>Do you have a sliding scale?</strong>
          <p>I do provide a limited number of slots for persons in need.  Contact me for more information.</p>
          <strong>Can I meet you in person?</strong>
          <p>I generally work online exclusively but if you are in France or another location where I may be located physically, it may be possible to meet in person after we have established care and if privacy is guaranteed.</p>
          <strong>How do I access online care?</strong>
          <p>I use a simple, secure, vidoe chat link that I send to registered clients.</p>
        </article>
        <img src={one} />
      </FaqBox>
      <ButtonBox>
        <motion.button whileHover={{ backgroundColor: "#444444" }}>Let's book an appointment</motion.button>
      </ButtonBox>
    </>
  )
}
