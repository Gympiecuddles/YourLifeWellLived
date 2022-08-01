import React, { useState } from 'react'
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion'
import useTimer from '../hooks/useTimer';

import Carousel from '../components/Carousel'
import Carousel2 from '../components/Carousel2';
import TextSwap from '../components/TextSwap'

import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import six from '../assets/six.jpg'

const RetreatPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ImgLayer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000000;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    filter: brightness(65%);
  }
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
const CurrentRetreatTitle = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9em;
  background-color: #ffffff;
  z-index: 0;
  h3 {
    margin-top: 120px;
    font-size: 3em;
  }
`;

const CurrentRetreats1 = styled.section`
  width: 100%;
  height: 45vh;
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
    width: 450px;
    height: 450px;
    object-fit: cover;
  }
`;

const CurrentRetreats2 = styled.section`
  width: 100%;
  height: 52vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;
  img {
    margin-top: 10px;
    width: 450px;
    height: 450px;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 650px;
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
  const height = useTransform(scrollYProgress, [0, 0.5, 1], [1600, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [0, -400, -200]);

  const carouselText = {
    head: ["Nayera Springs", "Denver"],
    subhead: ["Costa Rica", "Colorado"],
    head2: ["A SECLUDED PLACE OF UNDERSTATED LUXURY", "BEAUTIFUL AND RUSTIC"],
    subhead2: ["Arenal Volcano National Park, Costa Rica", "Someplace, Denver"],
    row1: ["Travel & leisure", "Sites & leisure"],
    text1: ["Top 2 Hotel in the World", "Top 1 Hotel in the World"],
    row2: ["Conde nast traveller", "Red Rocks"],
    text2: ["Best Hotel spa in the World", "Best Hotels resturant in the World"],
    row3: ["Tripadvisor", "Tripadvisor"],
    text3: ["Nº1 luxury Hotel in the World", "Nº1 luxury Hotel resturant in the World"],
    call: ["start your nayara journey", "start your Denver journey"],
  }

  const text = {
    dolphin: {
      Head: "Swim with the dolphins",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Img: one,
    },
    dining: {
      Head: "Dine with 5 star chefs",
      Text1: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.",
      Text2: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      Img: two,
    },
    spa: {
      Head: "Relax in our spas",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Img: three,
    },
    rooms: {
      Head: "Enjoy our top of the line hotels",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Img: two,
    },
    events: {
      Head: "Check out all of our events",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Img: two,
    },
  };

  const [Info, setInfo] = useState(text.dolphin);
  const [Info2, setInfo2] = useState(text.dolphin);

  const counter = useTimer(2, 5);
  const counter2 = useTimer(3, 5);

  return (
    <RetreatPage>
      <ImgLayer style={{height, y}}>
        <Carousel imgs={[six, three]} counter={counter}  />
      </ImgLayer>
      <ImgLayer style={{zIndex: -1}}>
        <Carousel imgs={[one, two, three]} counter={counter2} />
      </ImgLayer>
      <TextSwap innerText={carouselText} counter={counter} />
      <CurrentRetreatTitle style={{height: "200px"}}>
        <h3>Dolphin Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats1>
        <div style={{ width: "100px" }}>
          <motion.button onClick={() => setInfo(text.dolphin)} whileHover={{ color: "#a8a8a8"}}>Dolphins</motion.button>
          <motion.button onClick={() => setInfo(text.dining)} whileHover={{ color: "#a8a8a8"}}>Dining</motion.button>
          <motion.button onClick={() => setInfo(text.spa)} whileHover={{ color: "#a8a8a8"}}>Spa</motion.button>
          <motion.button onClick={() => setInfo(text.rooms)} whileHover={{ color: "#a8a8a8"}}>Rooms</motion.button>
          <motion.button onClick={() => setInfo(text.events)} whileHover={{ color: "#a8a8a8"}}>Events</motion.button>
        </div>
        <div>
          <h4>{Info.Head}</h4>
          <p>{Info.Text1}</p>
          <p>{Info.Text2}</p>
          <p>- Michelle Harwell, Owner</p>
        </div>
        <div style={{width: "500px"}}>
          <img src={Info.Img} alt="" />
        </div>  
      </CurrentRetreats1>
      <CurrentRetreatTitle>
        <h3>Whale Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats2>
        <div style={{width: "500px"}}>
          <img src={Info2.Img} alt="" />
        </div>  
        <div>
          <h4>{Info2.Head}</h4>
          <p>{Info2.Text1}</p>
          <p>{Info2.Text2}</p>
          <p>- Michelle Harwell, Owner</p>
        </div>
        <div style={{ width: "100px" }}>
          <motion.button onClick={() => setInfo2(text.dolphin)} whileHover={{ color: "#a8a8a8"}}>Dolphins</motion.button>
          <motion.button onClick={() => setInfo2(text.dining)} whileHover={{ color: "#a8a8a8"}}>Dining</motion.button>
          <motion.button onClick={() => setInfo2(text.spa)} whileHover={{ color: "#a8a8a8"}}>Spa</motion.button>
          <motion.button onClick={() => setInfo2(text.rooms)} whileHover={{ color: "#a8a8a8"}}>Rooms</motion.button>
          <motion.button onClick={() => setInfo2(text.events)} whileHover={{ color: "#a8a8a8"}}>Events</motion.button>
        </div>
      </CurrentRetreats2>
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
          <img src={two} alt="Jeanne Teleia speaking" />
        </article>
        <article>
          <img src={three} alt="Jeanne Teleia speaking" />
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
