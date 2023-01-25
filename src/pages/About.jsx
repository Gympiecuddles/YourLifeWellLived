import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import one from '../assets/AboutImage3.jpg'
import two from '../assets/AboutImage2.png'
import three from '../assets/AboutImage4.jpg'
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
    object-fit: contain;
  }
  article {
    display: flex;
    margin-bottom: 100px;
    width: 1050px;
    img {
      margin: 0;
      width: 360px;
      height: 400px;
      object-fit: cover;
      object-position: 80% 50%;
    }
    div {
      margin-left: 30px;
      width: 80%;
      h3 {
        margin-bottom: 18px;
        font-size: 1.3em;
        font-weight: 800;
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
        font-weight: 600;
        line-height: 22px;
      }
      ol {
        margin-top: 10px;
        padding-left: 20px;
        list-style-type: square;
        li {
          font-size: .9em;
        }
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
        <img src={one} alt="Jeanne Teleia" />
        <article>
          <img src={two} alt="Jeanne Teleia" />
          <div>
            <h3>Jeanne Teleia, LMFT, CSAC</h3>
            <q>F.U.N. is a Fundamental Universal Need.  It's essential to our mind, body and spirit.  All beings must have FUN and play to THRIVE.</q>
            <p>I am a licensed Marriage and Family Therapist and Play Therapist specializing in EXPERIENTIAL and INSPIRATIONAL RETREATS with WILD DOLPHINS and WHALES.</p>
            <p>I create a supportive and even fun atmosphere while providing highly personalized holistic counseling or coaching tailored to each of my client's individual needs and goals.</p>
            <p>My retreats are opportunities for personal growth, inspiration and transformation through respectful, meaningful interactions with wild dolphins and whales in amazing natural locations worldwide.</p>
          </div>
        </article>
        <article>
          <div>
            <p>I have over 25 years' experience working with children, adults and families as an advocate, educator and therapist.  I am a graduate of the University of Maryland, University of Delaware and the Institute for Family and Play Therapy with a commitment to ongoing continuing education.</p>
            <p>Specializing in experiential, play therapy and other expressive and brief therapies, I work with a broad spectrum of clients. Among my areas of expertise are</p>
            <ol>
              <li>trauma</li>
              <li>depression</li>
              <li>anxiety</li>
              <li>ADHD/behavioral/emotional problems</li>
              <li>child abuse-past or present</li>
              <li>divorce or separation</li>
              <li>grief and loss</li>
              <li>substance abuse</li>
              <li>family violence</li>
              <li>stress and anger</li>
              <li>post traumatic stress and trauma</li>
              <li>self esteem and life</li>
              <li>wellness and family coaching</li>
            </ol>
            <p>My other interests include my furry friends Violet, Suzie and Smudge and I usually have a menagerie of 4-footed rescue animals including dogs, cats and bunnies.</p>
            <p>My very favorite moments are spent in nature swimming with or otherwise interacting with wild and free dolphins and whales. Now I'm taking others around the world on retreats to find inspiration and joy through their example. Contact me to find out more!</p>
          </div>
          <img src={three} alt="Jeanne Teleia speaking" />
        </article>
      </AboutBox>
    </>
  )
}
