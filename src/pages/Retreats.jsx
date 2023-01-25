import React, { useState } from 'react'
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion'
import useTimer from '../hooks/useTimer';

import Carousel from '../components/Carousel'
import TextSwap from '../components/TextSwap'

import one from '../assets/RetreatImage1.jpg'
import two from '../assets/HomeImage1.jpg'
import three from '../assets/RetreatImage3.jpg'
import four from '../assets/RetreatImage4.jpg'
import five from '../assets/RetreatImage5.jpg'
import six from '../assets/RetreatImage6.jpg'
import seven from '../assets/RetreatImage7.jpg'
import eight from '../assets/RetreatImage8.jpg'
import nine from '../assets/RetreatImage9.jpg'
import ten from '../assets/RetreatImage10.jpg'
import eleven from '../assets/RetreatImage11.jpg'
import twelve from '../assets/HomeImage10.jpg'

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
    filter: brightness(85%);
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
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    width: 800px;
    h4 {
      margin: 8px;
      font-size: 1.2em;
      text-transform: uppercase;
    }
    p {
      margin: 8px;
      font-size: 1em;
      line-height: 25px;
    }
  }
  img {
    margin: 5px;
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
    width: 800px;
    h4 {
      margin: 8px;
      font-size: 1.2em;
      text-transform: uppercase;
    }
    p {
      margin: 8px;
      font-size: 1.1em;
      line-height: 25px;
    }
  }
`;
 
const ButtonBox = styled.span`
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  button {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 8px;
    width: 160px;
    border: 1px solid #000000;
    border-radius: 5px;
    background-color: #00000004;
    text-align: center;
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
    head: ["Bimini, The Bahamas", "San Ignacio Lagoon, Baja, Mexico"],
    subhead: ["Next retreat: May 2024, Dates TBD", "Next retreat: 2025 Dates TBD"],
    head2: ["WILD DOLPHIN WELLNESS and HEALING RETREATS", "WILD GRAY WHALES TRANSFORMATIONAL RETREATS"],
    subhead2: ["\"Profoundly humbling experiences are good for our SOUL.\"    David Neiwert, Of Orcas and Men", "\"For to witness majesty, to find yourself literally touched by it--isn\'t that what we\'ve all been waiting for?\"  David Sedaris, Humorist"],
    row1: ["Enter Their World", "Peak Experiences with Wild Gray Whales"],
    text1: ["24 hours a day are spent in the dolphin area!", "All inclusive, small, personalized retreats for 7 days and 6 nights"],
    row2: ["Embrace Joy, Bliss and Play", "Why Do These Whales Want Us to Touch Them?"],
    text2: ["Awaken and remember who you truly are", "This happens nowhere else on Earth but 3 lagoons in Baja, Mexico"],
    row3: ["Experience Healing and Transformation", "A Perfect Opportunity for Family Bonding and Healing"],
    text3: ["Your goals and challenges can be met with more EASE", "Nature based, experiential retreats are a great way to transform or create a positive family dynamic!"],
    call: ["Start the journey of your DREAMS", "Start the journey of your DREAMS"],
  }

  const dolphinText = {
    dolphin: {
      Head: "If Not Now, When?  If Not You, Who?  That 'someday' is TODAY!",
      Text1: "We all need to have more of our F.U.N.!!",
      Text2: "F.U.N. is a Fundamental Universal Need.",
      Text3: "Dolphins are master F.U.N. facilitators.",
      Text4: "Every single human culture and even throughout the animal kingdom, PLAY and FUN are REQUIREMENTS of life. To develop our brain, to grow, to learn, to survive through the worst moments, we must play.",
      Text5: "Without our F.U.N., we are not living fully and cannot contribute as abundantly to our world, the ones we love and to our own highest good.",
      Text6: "Experiences in the glories of nature are the fastest route back to our essence—our F.U.N. and to heal what has come before. These experiences become embedded in our cells (literally) and then can be called upon afterwards to bolster us through the storms of life.",
      Text7: "Through ritual and magical time with the dolphins, this is your opportunity to Rest, Recharge and Renew!",
      Text8: "Nature based, experiential retreats are a great way to transform or create a positive family dynamic!",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: three,
    },
    dining: {
      Head: "F.U.N. is the vital essence that many of us need to re-claim, along with our JOY and EASE.",
      Text1: "Do you need a break?  Come for your own Rest, Renewal, and even Reawakening to your true F.U.N. essence.",
      Text2: "You will be improving, heightening, and inspiring your motivation, your ease, and the fullness of your heart’s desire.",
      Text3: "When your mind, body and spirit are brimming with joy and in alignment, your goals, needs, and challenges can be met with more EASE. ",
      Text4: "All inclusive, small, personalized retreats for 7 days and 6 nights aboard a 86' x 26' ocean expedition converted trawler yacht leaving right from West Palm Beach, Florida",
      Text5: "Daily swimming with wild dolphins (according to the dolphins needs and interest in our presence).  Sometimes night swims with dolphins if the conditions are right!",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: four,
    },
    spa: {
      Head: "What's Included and Not Included",
      Text1: "Professional retreat facilitation by a licensed therapist and coach to help you process anything that comes up during our magical encounters with the dolphins (and the humans). Magical doesn't always mean without challenges but those are the richest moments of personal growth, including being afraid of being in deep water with wild animals. It is a moment of transformation just to get in the water!",
      Text2: "Play Activities and Rituals around the Full or New moon. We will use this inspiration throughout the week.  (Participation in any retreat activity always up to you.)",
      Text3: "Hearty, healthy meals, and we can cater for most dietary needs.",
      Text4: "You will have help in and out of the water to make you feel comfortable at all times.",
      Text5: "Group meditation and/or yoga will be offered each day.",
      Text6: "Friendships you'll never forget and a relationship with yourself and/or others that might surprise you.",
      Text7: "Base trip cost: $3495 (including taxes and fees) per person, double occupancy.",
      Text8: "$1000 deposit due upon registration (non-refundable).",
      Text9: "Check out the Bonuses for Early Bird and Other specials!",
      Text10: "Register NOW, only 12 spots available.",
      Text11: "NOT included: Transporation to West Palm Beach, alcoholic drinks, snorkel gear, and staff tips.",
      Text12: "The dolphins are wild animals and encounters cannot be guaranteed.",
      Img: five,
    },
    rooms: {
      Head: "Great Food and Comfortable Accommodations",
      Text1: "Oustanding, freshly prepared, home-style cooking with refreshments always available. Most dietary restrictions can be accommodated.  Bunk bed cabins (one with double bed) and 2 bathrooms with showers.",
      Text2: "Air conditioning indoors.",
      Text3: "There’s plenty of indoor and outdoor spaces, multiple decks and places to be alone or with the group.",
      Text4: "Life onboard is relaxed, informal, comfortable and clean.",
      Text5: "There's always staff available for anything you may need, in the water and out.  There's even an outdoor shower and plenty of freshwater available at all times.",
      Text6: "Participants need to be able to swim, snorkel and climb up the swim ladder as well as a flight of stairs to the cabins indoors.",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: six,
    },
    events: {
      Head: "Enhance Your Experience",
      Text1: "One coaching and/or counseling session before or after the retreat to help you clarify and implement a healing or wellness goal (a $150 value) and additional sessions can be scheduled as desired.",
      Text2: "Bi-monthly payment plan for the 1st 5 early bird adult registrations!",
      Text3: "$100 discount for you if you bring one or more people along. ",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: seven,
    },
  };

  const whaleText = {
    dolphin: {
      Head: "Why Do these Gray Whales Approach Humand AND Bring Their Babies To Be Caressed?",
      Text1: "Nothing brings us into alignment with our true essence faster than peak experiences in nature—connecting with something larger than ourselves (literally), with majesty, magnificence and an awe-inspiring story of forgiveness and redemption, only in Baja, Mexico.",
      Text2: "",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: eight,
    },
    dining: {
      Head: "What YOU get out of it?",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: nine,
    },
    spa: {
      Head: "Relax in our spas",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: ten,
    },
    rooms: {
      Head: "Enjoy our top of the line hotels",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: eleven,
    },
    events: {
      Head: "Check out all of our events",
      Text1: "When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.",
      Text2: "Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.",
      Text3: "",
      Text4: "",
      Text5: "",
      Text6: "",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: twelve,
    },
  };

  const [Info, setInfo] = useState(dolphinText.dolphin);
  const [Info2, setInfo2] = useState(whaleText.dolphin);

  const counter = useTimer(2, 5);
  const counter2 = useTimer(3, 5);

  return (
    <RetreatPage>
      <ImgLayer style={{height, y}}>
        <Carousel imgs={[one, eight]} counter={counter}  />
      </ImgLayer>
      <ImgLayer style={{zIndex: -1}}>
       
      </ImgLayer>
      <TextSwap innerText={carouselText} counter={counter} />
      <CurrentRetreatTitle style={{height: "200px"}}>
        <h3>Bimini Dolphin Wellness & Healing Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats1>
        <ButtonBox>
          <motion.button onClick={() => setInfo(dolphinText.dolphin)} whileHover={{ x: 4}}>Why</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.dining)} whileHover={{ x: 4}}>What You Get Out of It</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.spa)} whileHover={{ x: 4}}>What's Included</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.rooms)} whileHover={{ x: 4}}>Accommodations and Food</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.events)} whileHover={{ x: 4}}>Free Bonuses!!</motion.button>
        </ButtonBox>
        <div>
          <h4>{Info.Head}</h4>
          <p>{Info.Text1}</p>
          <p>{Info.Text2}</p>
          <p>{Info.Text3}</p>
          <p>{Info.Text4}</p>
          <p>{Info.Text5}</p>
          <p>{Info.Text6}</p>
          <p>{Info.Text7}</p>
          <p>{Info.Text8}</p>
          <p>{Info.Text9}</p>
          <p>{Info.Text10}</p>
          <p>{Info.Text11}</p>
          <p>{Info.Text12}</p>
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
          <p>{Info2.Text3}</p>
          <p>{Info2.Text4}</p>
          <p>{Info2.Text5}</p>
          <p>{Info2.Text6}</p>
          <p>{Info2.Text7}</p>
          <p>{Info2.Text8}</p>
          <p>{Info2.Text9}</p>
          <p>{Info2.Text10}</p>
          <p>{Info2.Text11}</p>
          <p>{Info2.Text12}</p>
        </div>
        <ButtonBox>
          <motion.button onClick={() => setInfo2(whaleText.dolphin)} whileHover={{ x: -4}}>Why We Do This</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.dining)} whileHover={{ x: -4}}>What You Get Out of It</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.spa)} whileHover={{ x: -4}}>What's Included</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.rooms)} whileHover={{ x: -4}}>Accommodations and Food</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.events)} whileHover={{ x: -4}}>Free Bonuses!!</motion.button>
        </ButtonBox>
      </CurrentRetreats2>
      <HeaderSection id="Gallery">
        <h2 style={{marginTop: "80px", fontSize: "2.3em"}} >Past Retreats</h2>
        <p>We offer psychotherapy, medication consultation and management, support groups, parent consultations, workshops, and developmental assessments.</p>
        <Carousel imgs={[one, four, three]} counter={counter2} />
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
          <img src={four} alt="Jeanne Teleia speaking" />
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
        <motion.button whileHover={{ backgroundColor: "#444444" }}>Click here to register now</motion.button>
      </PastRetreats>
    </RetreatPage>
  )
}
