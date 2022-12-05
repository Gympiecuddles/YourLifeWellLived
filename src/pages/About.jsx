import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import two from '../assets/AboutImage2.png'
import three from '../assets/AboutImage3.jpg'
import four from '../assets/AboutImage4.jpg'
import banner from '../assets/Banner1.jpg'

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
  height: 320px;
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
`;

const AboutBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  img {
    margin-top: 90px;
    margin-bottom: 50px;
    width: 1050px;
    height: 650px;
    object-fit: cover;
  }
  article {
    display: flex;
    margin-bottom: 100px;
    width: 1050px;
    img {
      margin: 0;
      width: 260px;
      height: 400px;
    }
    div {
      margin-left: 30px;
      width: 80%;
      h3 {
        font-size: 1.3em;
        font-weight: 400;
        letter-spacing: 1px;
        color: #6d6d6d;
        text-transform: uppercase;
      }
      p {
        margin-top: 18px;
        padding-right: 35px;
        font-size: .9em;
        font-weight: 400;
        line-height: 22px;
      }
      q {
        padding-right: 35px;
        font-size: .9em;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
`

export default function () {
  return (
    <>
      <ImgLayer src={banner} />
      <HeaderSection>
        <h2>I'm a Happiness Locator, Joy Finder, and Professor of Play</h2>
      </HeaderSection>
      <AboutBox>
        <img src={two} alt="Jeanne Teleia" />
        <article>
          <img src={three} alt="Jeanne Teleia" />
          <div>
            <h3>Jeanne Teleia</h3>
            <p>I create a supportive and even fun atmosphere while providing highly personalized holistic counseling or coaching tailored to each of my client's individual needs and goals.  My retreats are opportunities for personal growth, inspiration and transformation through respectful, meaningful interactions with wild dolphins and whales in amazing natural locations worldwide.</p>
            <q>F.U.N. is a Fundamental Universal Need.  It's essential to our mind, body and spirit.  All beings must have FUN and play to THRIVE.</q>
          </div>
        </article>
        <article>
          <div>
            <h3>I am a licensed Marriage and Family Therapist and Play Therapist specializing in EXPERIENTIAL and INSPIRATIONAL RETREATS with WILD DOLPHINS and WHALES.</h3>
            <p>I have over 25 years' experience working with children, adults and families as an advocate, educator and therapist.  I am a graduate of the University of Maryland, University of Delaware and the Institute for Family and Play Therapy with a commitment to ongoing continuing education.</p>
            <p>Specializing in experiential, play therapy and other expressive and brief therapies, I work with a broad spectrum of clients. Among my areas of expertise are <b>trauma, depression, anxiety, ADHD/behavioral/emotional problems, child abuse-past or present, divorce or separation, grief and loss, substance abuse, family violence, stress and anger, post traumatic stress and trauma, self esteem and life, wellness and family coaching.</b></p>
            <p>My other interests include my furry friends Violet, Suzie and Smudge and I usually have a menagerie of 4-footed rescue animals including dogs, cats and bunnies.</p>
            <p>My very favorite moments are spent in nature swimming with or otherwise interacting with wild and free dolphins and whales. Now I'm taking others around the world on retreats to find inspiration and joy through their example. Contact me to find out more!</p>
          </div>
          <img src={four} alt="Jeanne Teleia speaking" />
        </article>
      </AboutBox>
    </>
  )
}
