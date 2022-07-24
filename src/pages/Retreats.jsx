import React from 'react'
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import six from '../assets/six.jpg'

const RetreatPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ImgLayer = styled(motion.img)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000000;
  filter: brightness(65%);
  object-fit: cover;
  object-position: 0% 0%;
  z-index: 0;
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
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

const CurrentRetreats = styled.section`
  width: 100%;
  height: 46vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    width: 700px;
    h4 {
      margin: 20px;
      font-size: 1.2em;
      text-transform: uppercase;
    }
    p {
      margin: 20px;
      font-size: 1.1em;
      line-height: 25px;
    }
    button {
      margin: 7px;
      width: 50px;
      border: none;
      background-color: #00000000;
      text-align: start;
    }
  }
  img {
    margin-top: 10px;
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
`;

const PastRetreats = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1800px;
  background-color: #ffffff;
  article {
    display: flex;
    margin-bottom: 100px;
    width: 1050px;
    img {
      margin: 0;
      width: 260px;
      height: 400px;
      object-fit: cover;
    }
    div {
      margin-left: 30px;
      width: 80%;
      h3 {
        font-size: 1.1em;
        font-weight: 400;
        letter-spacing: 1px;
        color: #6d6d6d;
        text-transform: uppercase;
        b {
          font-size : 1.3em;
        }
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
  button {
      margin-top: 30px;
      width: 300px;
      height: 60px;
      font-size: .9em;
      font-weight: 600;
      border: none;
      color: #ffffff;
      background-color: #000000;
      text-transform: uppercase;
    }
`;

export default function Retreats() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.4, 1], [1600, 0, 0])

  return (
    <RetreatPage>
      <ImgLayer src={six} style={{height}} />
      <ImgLayer src={two} style={{zIndex: -1}} />
      <HeaderSection style={{ marginTop: "150px"}}>
        <h2>Nayara Springs</h2>
        <p>Costa Rica</p>
        <div>
          <h3>A SECLUDED PLACE OF UNDERSTATED LUXURY</h3>
          <p>Arenal Volcano National Park, Costa Rica</p>
          <span>
            <div>
              <h4>Travel & leisure</h4>
              <p>Top 2 Hotel in the World</p>
            </div>
            <div>
              <h4>Conde nast traveller</h4>
              <p>Best Hotel spa in the World</p>
            </div>
            <div>
              <h4>Tripadvisor</h4>
              <p>Nº1 luxury Hotel in the World</p>
            </div>
          </span>
          <b>start your nayara journey</b>
        </div>
      </HeaderSection>
      <CurrentRetreats>
        <div style={{ width: "100px" }}>
          <button>Dolphins</button>
          <button>Dining</button>
          <button>Spa</button>
          <button>Rooms</button>
          <button>Events</button>
        </div>
        <div>
          <h4>relationships are the foundation of life.</h4>
          <p>When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.</p>
          <p>Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.</p>
          <p>- Michelle Harwell, Owner</p>
        </div>
        <div>
          <img src={one} alt="" />
        </div>  
      </CurrentRetreats>
      <HeaderSection>
        <h2 style={{marginTop: "80px", fontSize: "2.3em"}} >Past Retreats</h2>
        <p>We offer psychotherapy, medication consultation and management, support groups, parent consultations, workshops, and developmental assessments.</p>
      </HeaderSection>
      <PastRetreats>
        <article>
          <img src={one} alt="Jeanne Teleia" />
          <div>
            <h3><b>Hawaii</b>, United States</h3>
            <p>Michelle Harwell, PsyD, LMFT #50732 is an expert trainer, respected speaker, and licensed therapist in trauma, development, and attachment. She is a certified yoga instructor and seeks to help her clients better understand how the body is often the first speaker to life's experiences: joy, stress, or even trauma. She is noted for her specialization in areas of development, attachment, trauma, and neuroscience, and her ability to communicate complex topics with clarity and humor.</p>
            <p>Michelle has worked extensively with adults and children with severe disruptions in early life-care. This includes foster and adoptive families, attachment issues, child development, and healthy parenting. She is an infant mental health consultant for a variety of non-profits and community mental health teams. She is the co-author of Floortime Strategies to Promote Development in Children and Teens: A User’s Guide to the DIR® Model, a curriculum for parents and professionals to help young people with social, emotional, and cognitive challenges.</p>
            <p>Michelle completed her doctorate in Psychoanalysis from The Institute of Contemporary Psychoanalysis in Los Angeles. She received her BA in English Literature from University of Oklahoma, MA in Theology from Fuller Theological Seminary, and MS in Marriage and Family Therapy from the Fuller Graduate School of Psychology. </p>
            <p>Visit drmichelleharwell.com for more information. </p>
          </div>
        </article>
        <article>
          <div>
            <h3><b>Pierto Vallarta</b>, Mexico</h3>
            <p>Michelle Harwell, PsyD, LMFT #50732 is an expert trainer, respected speaker, and licensed therapist in trauma, development, and attachment. She is a certified yoga instructor and seeks to help her clients better understand how the body is often the first speaker to life's experiences: joy, stress, or even trauma. She is noted for her specialization in areas of development, attachment, trauma, and neuroscience, and her ability to communicate complex topics with clarity and humor.</p>
            <p>Michelle has worked extensively with adults and children with severe disruptions in early life-care. This includes foster and adoptive families, attachment issues, child development, and healthy parenting. She is an infant mental health consultant for a variety of non-profits and community mental health teams. She is the co-author of Floortime Strategies to Promote Development in Children and Teens: A User’s Guide to the DIR® Model, a curriculum for parents and professionals to help young people with social, emotional, and cognitive challenges.</p>
            <p>Michelle completed her doctorate in Psychoanalysis from The Institute of Contemporary Psychoanalysis in Los Angeles. She received her BA in English Literature from University of Oklahoma, MA in Theology from Fuller Theological Seminary, and MS in Marriage and Family Therapy from the Fuller Graduate School of Psychology. </p>
            <p>Visit drmichelleharwell.com for more information. </p>
          </div>
          <img src={one} alt="Jeanne Teleia speaking" />
        </article>
        <article>
          <img src={one} alt="Jeanne Teleia speaking" />
          <div>
            <h3><b>San Juan del Sur</b>, Nicaragua</h3>
            <p>Michelle Harwell, PsyD, LMFT #50732 is an expert trainer, respected speaker, and licensed therapist in trauma, development, and attachment. She is a certified yoga instructor and seeks to help her clients better understand how the body is often the first speaker to life's experiences: joy, stress, or even trauma. She is noted for her specialization in areas of development, attachment, trauma, and neuroscience, and her ability to communicate complex topics with clarity and humor.</p>
            <p>Michelle has worked extensively with adults and children with severe disruptions in early life-care. This includes foster and adoptive families, attachment issues, child development, and healthy parenting. She is an infant mental health consultant for a variety of non-profits and community mental health teams. She is the co-author of Floortime Strategies to Promote Development in Children and Teens: A User’s Guide to the DIR® Model, a curriculum for parents and professionals to help young people with social, emotional, and cognitive challenges.</p>
            <p>Michelle completed her doctorate in Psychoanalysis from The Institute of Contemporary Psychoanalysis in Los Angeles. She received her BA in English Literature from University of Oklahoma, MA in Theology from Fuller Theological Seminary, and MS in Marriage and Family Therapy from the Fuller Graduate School of Psychology. </p>
            <p>Visit drmichelleharwell.com for more information. </p>
          </div>
        </article>
        <motion.button whileHover={{ backgroundColor: "#444444" }}>book now</motion.button>
      </PastRetreats>
    </RetreatPage>
  )
}
