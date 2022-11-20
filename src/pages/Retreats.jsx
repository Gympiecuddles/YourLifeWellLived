import React, { useState } from 'react'
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion'
import useTimer from '../hooks/useTimer';

import Carousel from '../components/Carousel'
import TextSwap from '../components/TextSwap'

import one from '../assets/Banner1.jpg'
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
  img {
    position: absolute;
    z-index: -1;
  }
`;
const CurrentRetreatTitle = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9em;
  background-color: #cdfafc;
  z-index: 2;
  h3 {
    margin-top: 120px;
    font-size: 2.8em;
  }
`;

const CurrentRetreats1 = styled.section`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
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
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
`;

const CurrentRetreats2 = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  img {
    margin-top: 10px;
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
  div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 660px;
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
  background-color: #cdfafc;
  z-index: 1;
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
    head: ["Bimini Island", "San Ignacio"],
    subhead: ["The Bahamas", "Baja, Mexico"],
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
      Head: "Why We're Doing This",
      Text1: "We all need to have more of our F.U.N.!!  F.U.N. is a Fundamental Universal Need. Dolphins are master F.U.N. facilitators. Many people report experiences of bliss, ecstatic joy, easing of pain and suffering-physical, emotional and spiritual, an opening of their heart and an awakened consciousness. <br/>Every single human culture and even throughout the animal kingdom, PLAY and FUN are REQUIREMENTS of life. To develop our brain, to grow, to learn, to survive through the worst moments, we must play. Without our F.U.N., we are not living fully and cannot contribute as abundantly to our world, the ones we love and to our own highest good.",
      Text2: "Experiences in the glories of nature are the fastest route back to our essence—our F.U.N. and to heal what has come before. These experiences become embedded in our cells (literally) and then can be called upon afterwards to bolster us through the storms of life. This retreat is also planned during the time of the FULL MOON.  Peoples all around the world consider the Full Moon a powerful time to connect with what we want to bring into manifestation and during the waning moon on the retreat will be a good time to consider what you need to let go of to live your life more fully. Do you need to manifest a fresh start, embark on life transitions, and/or want to have a nurturing, loving and healing experience? Through ritual and magical time with the dolphins, this is your opportunity to Rest, Recharge and Renew!",
      Img: one,
    },
    dining: {
      Head: "What YOU get out of it?",
      Text1: "F.U.N. is the vital essence that many of us need to re-claim, along with our JOY and EASE. Do you need a break? Come for your own Rest, Renewal, and even Reawakening to your true F.U.N. essence. You will be improving, heightening, and inspiring your motivation, your ease, and the fullness of your heart's desire. When your mind, body and spirit are brimming with joy and in alignment, your goals, needs, and challenges can be met with more EASE. Let nature and the power of connecting with wild Cetaceans fill you, connect you back to your best self, if even for the first time. Nothing brings us into alignment with our true essence faster than peak experiences in nature—connecting with something larger than ourselves (literally), with majesty, magnificence and an awe-inspiring story.",
      Text2: "This retreat is also a perfect opportunity for improving family bonding and connection through fun, joy and mutual support and help. I have seen families transform how they interact and feel about each other during and after nature based experiential retreats. It's a great way to kick start a new family dynamic. Group coaching/inspirational sessions and a personal/individual coaching session is included in the cost of the retreat, including follow up by email after we depart!",
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
       
      </ImgLayer>
      <TextSwap innerText={carouselText} counter={counter} />
      <CurrentRetreatTitle style={{height: "200px"}}>
        <h3>Bimini Dolphin Wellness & Healing Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats1>
        <div style={{ width: "100px" }}>
          <motion.button onClick={() => setInfo(text.dolphin)} whileHover={{ color: "#a8a8a8"}}>Why</motion.button>
          <motion.button onClick={() => setInfo(text.dining)} whileHover={{ color: "#a8a8a8"}}>What</motion.button>
          <motion.button onClick={() => setInfo(text.spa)} whileHover={{ color: "#a8a8a8"}}>Spa</motion.button>
          <motion.button onClick={() => setInfo(text.rooms)} whileHover={{ color: "#a8a8a8"}}>Rooms</motion.button>
          <motion.button onClick={() => setInfo(text.events)} whileHover={{ color: "#a8a8a8"}}>Events</motion.button>
        </div>
        <div>
          <h4>{Info.Head}</h4>
          <p>{Info.Text1}</p>
          <p>{Info.Text2}</p>
        </div>
        <div style={{width: "500px"}}>
          <img src={Info.Img} alt="" />
        </div>  
      </CurrentRetreats1>
      <CurrentRetreatTitle>
        <h3>Baja Gray Whale Wellness Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats2>
        <div style={{width: "500px"}}>
          <img src={Info2.Img} alt="" />
        </div>  
        <div>
          <h4>{Info2.Head}</h4>
          <p>{Info2.Text1}</p>
          <p>{Info2.Text2}</p>
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
        <Carousel imgs={[one, two, three]} counter={counter2} />
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
