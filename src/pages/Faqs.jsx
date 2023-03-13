import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

import one from '../assets/FaqImage1.webp'
import banner from '../assets/One.webp'

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
  @media screen and (max-width: 1650px) {
    height: 280px;
    h2 {
      margin-top: 120px;
      margin-bottom: 0px;
      margin-left: 40px;
      font-size: 1.8em;
    }
    p {
      margin-left: 40px;
      margin-right: 82px;
      padding: 19px;
      font-size: 1em;
      letter-spacing: 1.25px;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 850px) {
    height: 260px;
    h2 {
      margin-top: 120px;
      margin-bottom: 0px;
      margin-left: 40px;
      font-size: 1.6em;
    }
    p {
      margin-left: 40px;
      margin-right: 82px;
      padding: 19px;
      font-size: 1em;
      letter-spacing: 1.25px;
      color: #ffffff;
    }
  }
`;

const FaqBox = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1550px;
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
  @media screen and (max-width: 2000px) {
    height: 1200px;
    article {
      width: 40%;
    }
  }
  @media screen and (max-width: 1500px) {
    height: 1200px;
    article {
      width: 50%;
    }
    img {
    width: 28%;
    height: 700px;
    }
  }
  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
    align-items: center;
    height: 1400px;
    article {
      margin-top: 50px;
      width: 90%;
    }
    img {
      margin-top: 50px;
      width: 50%;
      height: auto;
    }
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
`;

const MotionButton = motion(HashLink);
const StyledButton = styled(MotionButton)`
  padding: 19px;
  width: 250px;
  font-size: .9em;
  font-weight: 600;
  border: none;
  color: #ffffff;
  background-color: #000000;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

export default function Faqs() {
  return (
    <>
      <ImgLayer src={banner} />
      <HeaderSection>
        <h2>What Questions Can I Answer Today?</h2>
        <p>Feel free to contact me directly see the FAQs below</p>
      </HeaderSection>
      <FaqBox>
        <article>
          <strong>What is the length and frequency of our sessions?</strong>
          <p>This will be determined by you and Jeanne Teleia but generally it's best to meet weekly for therapy and possibly less often for coaching.</p>
          <strong>What are your rates?</strong>
          <p>Rates are determined by the length of session, services provided and number of people involved.</p>
          <strong>Do you take insurance?</strong>
          <p>I am licensed as an 'out of network provider' for psychotherapy in Hawai'I and Colorado.  I can provide receipts for you to submit to your insurance but this is not a guarantee of re-payment.  You will need to check the reimbursements with your insurance company.  Mental health care can be deducted on your taxes as a health expense in some cases.  Check with your tax professional.  Coaching is not covered by insurance but often I do a mix of coaching and psychotherapy.  You are investing in better lifelong health by investing in your personal growth and mental health now.</p>
          <strong>Do you have a sliding scale?</strong>
          <p>I do provide a limited number of slots for persons in need.  Contact me for more information.</p>
          <strong>Can I meet you in person?</strong>
          <p>I generally work online exclusively but if you are in France or another location where I may be located physically, it may be possible to meet in person after we have established care and if privacy is guaranteed.</p>
          <strong>How do I access online care?</strong>
          <p>I use a simple, secure, vidoe chat link that I send to registered clients.</p>
          <strong>How can therapy, coaching or retreats help me? </strong>
          <p>A number of benefits are available from participating in counseling, coaching or wellness and healing retreats. Therapists and coaches can provide support, problem-solving skills, and enhanced coping strategies for many issues and find a way that works best for you.  I focus on inspiring people so they find the answers that are within themselves, often brought out fastest by peak experiences and connecting with nature and beings such as dolphins and whales.  ++Many people also find that personal growth facilitators like me can be a tremendous asset to managing interpersonal relationships, family concerns, marriage issues, and the hassles of daily life. I can provide a fresh perspective on a difficult problem or point you in the direction of a solution. The benefits you and your family obtain from therapy, coaching or retreats depend on how well you use the process and put into practice what you learn.</p>
        </article>
        <img src={one} />
      </FaqBox>
      <ButtonBox>
        <StyledButton whileHover={{ backgroundColor: "#444444" }} to="/Contact">Let's book an appointment</StyledButton>
      </ButtonBox>
    </>
  )
}
