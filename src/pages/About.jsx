import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import one from '../assets/one.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'

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
        margin-top: 13px;
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
      <ImgLayer src={one} />
      <HeaderSection>
        <h2>About</h2>
      </HeaderSection>
      <AboutBox>
        <img src={three} alt="" />
        <article>
          <img src={four} alt="Jeanne Teleia" />
          <div>
            <h3>Michelle Harwell, PsyD, LMFT</h3>
            <p>Michelle Harwell, PsyD, LMFT #50732 is an expert trainer, respected speaker, and licensed therapist in trauma, development, and attachment. She is a certified yoga instructor and seeks to help her clients better understand how the body is often the first speaker to life's experiences: joy, stress, or even trauma. She is noted for her specialization in areas of development, attachment, trauma, and neuroscience, and her ability to communicate complex topics with clarity and humor.</p>
            <p>Michelle has worked extensively with adults and children with severe disruptions in early life-care. This includes foster and adoptive families, attachment issues, child development, and healthy parenting. She is an infant mental health consultant for a variety of non-profits and community mental health teams. She is the co-author of Floortime Strategies to Promote Development in Children and Teens: A User’s Guide to the DIR® Model, a curriculum for parents and professionals to help young people with social, emotional, and cognitive challenges.</p>
            <p>Michelle completed her doctorate in Psychoanalysis from The Institute of Contemporary Psychoanalysis in Los Angeles. She received her BA in English Literature from University of Oklahoma, MA in Theology from Fuller Theological Seminary, and MS in Marriage and Family Therapy from the Fuller Graduate School of Psychology. </p>
            <p>Visit drmichelleharwell.com for more information. </p>
          </div>
        </article>
        <article>
          <div>
            <h3>Abailable as a public speaker</h3>
            <p>Michelle Harwell, PsyD, LMFT #50732 is an expert trainer, respected speaker, and licensed therapist in trauma, development, and attachment. She is a certified yoga instructor and seeks to help her clients better understand how the body is often the first speaker to life's experiences: joy, stress, or even trauma. She is noted for her specialization in areas of development, attachment, trauma, and neuroscience, and her ability to communicate complex topics with clarity and humor.</p>
            <p>Michelle has worked extensively with adults and children with severe disruptions in early life-care. This includes foster and adoptive families, attachment issues, child development, and healthy parenting. She is an infant mental health consultant for a variety of non-profits and community mental health teams. She is the co-author of Floortime Strategies to Promote Development in Children and Teens: A User’s Guide to the DIR® Model, a curriculum for parents and professionals to help young people with social, emotional, and cognitive challenges.</p>
            <p>Michelle completed her doctorate in Psychoanalysis from The Institute of Contemporary Psychoanalysis in Los Angeles. She received her BA in English Literature from University of Oklahoma, MA in Theology from Fuller Theological Seminary, and MS in Marriage and Family Therapy from the Fuller Graduate School of Psychology. </p>
            <p>Visit drmichelleharwell.com for more information. </p>
          </div>
          <img src={five} alt="Jeanne Teleia speaking" />
        </article>
      </AboutBox>
    </>
  )
}