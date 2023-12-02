import React, { useState } from 'react'
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion'
import useTimer from '../hooks/useTimer';

import Carousel from '../components/Carousel'
import TextSwap from '../components/TextSwap'

import one from '../assets/RetreatImage1.webp'
import two from '../assets/RetreatImage2.webp'
import three from '../assets/RetreatImage3.webp'
import four from '../assets/RetreatImage4.webp'
import five from '../assets/RetreatImage5.webp'
import six from '../assets/RetreatImage6.webp'
import six2 from '../assets/RetreatImage6.5.webp'
import seven from '../assets/RetreatImage7.webp'
import eight from '../assets/RetreatImage8.webp'
import nine from '../assets/RetreatImage9.webp'
import ten from '../assets/RetreatImage10.webp'
import eleven from '../assets/RetreatImage11.webp'
import twelve from '../assets/RetreatImage12.webp'
import thirteen from '../assets/RetreatImage13.webp'
import thirteen2 from '../assets/RetreatImage13.5.webp'
import fourteen from '../assets/RetreatImage14.webp'
import fifteen from '../assets/RetreatImage15.webp'
import sixteen from '../assets/RetreatImage16.webp'
import seventeen from '../assets/RetreatImage17.webp'
import eightteen from '../assets/RetreatImage18.webp'
import nineteen from '../assets/RetreatImage19.webp'
import twenty from '../assets/RetreatImage20.webp'
import { HashLink } from 'react-router-hash-link';

const RetreatPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImgLayer = styled(motion.div)`
  position: fixed;
  width: 100%;
  background-color: #00000000;
  z-index: 0;
  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    object-position: 0% 100%;
    filter: brightness(85%);
  }
  @media screen and (max-width: 2000px) {
      img {
        height: 68%;
        object-fit: fill;
      }
   }
   @media screen and (max-width: 1600px) {
      img {
        height: 55%;
        object-fit: fill;
      }
   }
   @media screen and (max-width: 1400px) {
      img {
        height: 48%;
        object-fit: fill;
      }
   }
   @media screen and (max-width: 900px) {
      img {
        height: 64%;
        object-fit: fill;
      }
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
    margin-top: 80px;
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 2.3em;
    font-weight: 400;
    letter-spacing: 6px;
    color: #ffffff;
    filter: drop-shadow(2px 2px 6px #000000);
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1.2em;
    letter-spacing: 1.25px;
    color: #ffffff;
    filter: drop-shadow(2px 2px 6px #000000);
  }
  img {
    position: absolute;
    height: 100%;
    z-index: -1;
  }
  @media screen and (max-width: 2220px) {
    height: 950px;
    h2 {
      font-size: 2em;
    }
  }
  @media screen and (max-width: 1700px) {
    height: 780px;
    h2 {
      font-size: 1.9em;
    }
  }
  @media screen and (max-width: 1400px) {
    height: 750px;
    h2 {
      font-size: 1.7em;
    }
  }
  @media screen and (max-width: 827px) {
    height: 750px;
    h2 {
      margin-top: 60px;
      margin-left: 20px;
      margin-bottom: 18px;
    }
    p {
      margin-left: 20px;
    }
    img {
      object-position: 40% 0%;
    }
  }
`;
const CurrentRetreatTitle = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: .9em;
  background-color: #cdfafc;
  z-index: 2;
  h3 {
    font-size: 2.8em;
  }
  @media screen and (max-width: 900px) {
    height: 120px;
    h3 {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 657px) {
    height: 120px;
    h3 {
      width: 90%;
      font-size: 2em;
      text-align: center;
    }
  }
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

const CurrentRetreats1 = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
  @media screen and (max-width: 1568px) {
    span {
      div {
        width: 650px;
    }
  }
}
  @media screen and (max-width: 1400px) {
    height: 600px;
    span {
      div {
        width: 600px;
        h4 {
          font-size: 1.1em;
        }
        p{
          font-size: .9em;
          line-height: 20px;
        }
      }
      img {
          width: 400px;
          height: 400px;
        }
    }
  }
  @media screen and (max-width: 1259px) {
    align-items: flex-start;
    height: 900px;
    span {
      display: flex;
      flex-direction: column-reverse;
      div {
        display: flex; 
        flex-direction: column;
        width: 100%;
        h4 {
          font-size: 1.1em;
        }
        p {
          padding-right: 40px;
          font-size: .9em;
          line-height: 18px;
        }
      }
      img {
          width: 350px;
          height: 350px;
        }
    }
  }
  @media screen and (max-width: 903px) {
    height: 900px;
    span {
      div {
        margin-right: 10px;
        width: 95%;
      }
    }
  }
  @media screen and (max-width: 783px) {
    height: 1000px;
  }
  @media screen and (max-width: 651px) {
    height: 1000px;
    span {
      align-items: center;
      div {
        justify-content: flex-end;
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 596px) {
    span {
      div {
        h4 {
          font-size: 1em;
        }
        p {
          line-height: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 564px) {
    height: 1100px;
    span {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
  @media screen and (max-width: 430px) {
    height: 1100px;
    span {
      div {
        p {
          margin: 5px;
          padding: 0;
        }
      }
      img {
        width: 250px;
        height: 250px;
      }
    }
  }
  @media screen and (max-width: 384px) {
    span {
      img {
        width: 230px;
        height: 230px;
      }
    }
  }
`;

const CurrentRetreats2 = styled.section`
  width: 100%;
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1100px;
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
  }
  @media screen and (max-width: 1400px) {
    height: 700px;
    span {
      img {
          width: 400px;
          height: 400px;
      }
      div {
        width: 650px;
        h4 {
          font-size: 1.1em;
        }
        p {
          font-size: .9em;
          line-height: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 1259px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    height: 950px;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 350px;
        height: 350px;
      }
      div {
        margin-left: 0px;
        width: 100%;
        h4 {
          font-size: 1.1em;
        }
        p {
          font-size: .9em;
          line-height: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 903px) {
    height: 1000px;
    span {
      div {
        margin-right: 10px;
        width: 95%;
      }
    }
  }
  @media screen and (max-width: 783px) {
    height: 1100px;
  }
  @media screen and (max-width: 651px) {
    padding-left: 0px;
    height: 1150px;
    span {
      div {
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 596px) {
    span {
      div {
        h4 {
          font-size: 1em;
        }
        p {
          line-height: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 564px) {
    span {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
  @media screen and (max-width: 430px) {
    span {
      div {
        p {
          margin: 5px;
        }
      }
      img {
        width: 250px;
        height: 250px;
      }
    }
  }
  @media screen and (max-width: 384px) {
    height: 1200px;
    span {
      img {
        width: 230px;
        height: 230px;
      }
    }
  }
`;
 
const ButtonBox = styled.div`
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
  @media screen and (max-width: 1300px) {
    margin-left: 20px;
    margin-right: 20px;
    button {
      width: 140px;
    }
  }
  @media screen and (max-width: 1259px) {
    margin-top: 200px;
    button {
      width: 140px;
    }
  }
  @media screen and (max-width: 900px) {
    margin-left: 5px;
    margin-right: 20px;
    width: 120px;
    button {
      width: 120px;
    }
  }
  @media screen and (max-width: 651px) {
    margin-left: 5px;
    margin-right: 0px;
    width: 103px;
    button {
      width: 104px;
    }
  }
`;

const PastRetreats = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 2200px;
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
        font-weight: 600;
        letter-spacing: 1px;
        color: #6d6d6d;
        text-transform: uppercase;
      }
      b {
        display: block;
        margin-top: 13px;
        padding-right: 35px;
        font-size: .9em;
        line-height: 22px;
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
  @media screen and (max-width: 900px) {
    height: 2400px;
    article {
      align-items: center;
      margin-bottom: 60px;
      width: 95%;
      div {
        b {
          font-size: .9em;
          line-height: 20px;
        }
        p {
          font-size: .9em;
         line-height: 20px;
        }
      }
    }  
  }
  @media screen and (max-width: 770px) {
    height: 3100px;
    article {
      flex-direction: column;
      width: 95%;
      img {
        order: 1;
        margin: 0;
        margin-bottom: 30px;
        height: 300px;
        width: 95%;
        border-radius: 5px;
      }
      div {
        order: 2;
      }
    }  
  }
  @media screen and (max-width: 707px) {
    article {
      div {
        width: 95%;
      }
    }  
  }
  @media screen and (max-width: 603px) {
    article {
      div {
        b {
          line-height: 18px;
        }
        p {
         line-height: 18px;
        }
      }
    }  
  }
  @media screen and (max-width: 561px) {
    article {
      div {
        width: 100%;
        b {
          line-height: 16px;
        }
        p {
         line-height: 16px;
        }
      }
    }  
  }
  @media screen and (max-width: 461px) {
    height: 3200px;
  }
  @media screen and (max-width: 438px) {
    height: 3300px;
  }
  @media screen and (max-width: 418px) {
    height: 3450px;
  }
  @media screen and (max-width: 384px) {
    height: 3550px;
  }
`;

export default function Retreats() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [1600, 1600, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [0, -400, -200]);

  const carouselText = {
    head: ["Bimini, The Bahamas", "San Ignacio Lagoon, Baja, Mexico"],
    subhead: ["Next retreat: May 4-10, 2024, New Moon!", "Next retreat: March 2025 Dates TBD"],
    head2: ["WILD DOLPHIN WELLNESS and HEALING RETREATS", "WILD GRAY WHALES TRANSFORMATIONAL RETREATS"],
    subhead2: ["\"Profoundly humbling experiences are good for our SOUL.\"    David Neiwert, Of Orcas and Men", "\"For to witness majesty, to find yourself literally touched by it--isn\'t that what we\'ve all been waiting for?\"  David Sedaris, Humorist"],
    row1: ["Enter Their World", "Peak Experiences with Wild Gray Whales"],
    text1: ["24 hours a day are spent in the dolphin area!", "All inclusive, small, personalized retreats for 7 days and 6 nights"],
    row2: ["Embrace Joy, Bliss and Play", "Why Do These Whales Want Us to Touch Them?"],
    text2: ["Awaken and remember who you truly are", "Scroll down for more on this miraculous phenomenon"],
    row3: ["Experience Healing and Transformation", "A Perfect Opportunity for Healing and Transformation"],
    text3: ["Your goals and challenges can be met with more EASE", "Nature based, experiential retreats to transform or create a positive family dynamic!"],
    call: ["Start the journey of your DREAMS", "Start the journey of your DREAMS"],
  }

  const dolphinText = {
    Button1: {
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
    Button2: {
      Head: "F.U.N. is the vital essence that many of us need to re-claim, along with our JOY and EASE.",
      Text1: "Do you need a break?  Come for your own Rest, Renewal, and even Reawakening to your true F.U.N. essence.",
      Text2: "All inclusive, small, personalized retreats for 7 days and 6 nights.",
      Text3: "We don't just spend a couple hours in the dolphin area, we spend 24 hours a day in the dolphin area. Our dolphin days start around 8am and go sometimes till 11pm! Then we sleep on the sea and under the stars.",
      Text4: "You will be improving, heightening, and inspiring your motivation, your ease, and the fullness of your heart’s desire.",
      Text5: "When your mind, body and spirit are brimming with joy and in alignment, your goals, needs, and challenges can be met with more EASE.",
      Text6: "Daily swimming with wild dolphins (according to the dolphins needs and interest in our presence).  Sometimes night swims with dolphins if the conditions are right!  ",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: four,
    },
    Button3: {
      Head: "What's Included and Not Included",
      Text1: "Professional retreat facilitation by a licensed therapist and coach to help you process anything that comes up during our magical encounters with the dolphins (and the humans). Magical doesn't always mean without challenges but those are the richest moments of personal growth, including being afraid of being in deep water with wild animals. It is a moment of transformation just to get in the water!",
      Text2: "Play Activities and Rituals around the Full or New moon. We will use this inspiration throughout the week.  (Participation in any retreat activity is always up to you.)",
      Text3: "Hearty, healthy meals, and we can cater for most dietary needs.",
      Text4: "You will have help in and out of the water to make you feel comfortable at all times.",
      Text5: "Group meditation and/or yoga will be offered each day.",
      Text6: "Friendships you'll never forget and a relationship with yourself and/or others that might surprise you.",
      Text7: "What's NOT included: Transportation to West Palm Beach, Florida, alcoholic drinks, snorkel gear, and staff tips. ",
      Text8: "Travel insurance.  We STRONGLY encourage you to purchase insurance upon paying your trip deposit. ",
      Text9: "The dolphins are wild animals and encounters cannot be guaranteed.",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: five,
    },
    Button4: {
      Head: "Great Food and Comfortable Accommodations",
      Text1: "Outstanding, freshly prepared, home-style cooking with refreshments are always available. Most dietary restrictions can be accommodated.",
      Text2: "Bunk bed cabins (one with double bed) and 2 bathrooms with showers. ",
      Text3: "Air conditioning indoors.",
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
    Button5: {
      Head: "Pricing and Deposit Information",
      Text1: "Base trip cost: $3500 (including taxes and fees) per person, double occupancy.",
      Text2: "$1000 deposit due upon registration (non-refundable unless the trip doesn't fill. 8 participants minimum).",
      Text3: "Bonuses:",
      Text4: "$100 off to the first 4 registrations OR if you bring a friend.",
      Text5: "Bi-monthly payment plan for first 4 registrations.",
      Text6: "Check out the other bonuses below.",
      Text7: "Register NOW, only 12 spots available.",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: six2,
    },
    Button6: {
      Head: "Enhance Your Experience",
      Text1: "One coaching and/or counseling session before or after the retreat is included to help you clarify and implement a healing or wellness goal (a $150 value) and additional sessions can be scheduled as desired.",
      Text2: "This experience is much more than a vacation--it's a commitment to your wellness and personal growth!",
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
      Img: seven,
    },
    Button7: {
      Head: "Planned Itinerary",
      Text1: "Day 1: Arrive in Miami, Ft. Lauderdale or West Palm Beach, FL and make your way to the harbor. Dinner onboard and cruise to the Bahamas overnight.",
      Text2: "Day 2: Wake up in Bimini and our Captain will get all the customs sorted in time for an afternoon encounter with dolphins.",
      Text3: "Day 3, 4, 5: After breakfast we go immediately to look for dolphins and spend the morning and early afternoon swimming with them if they are receptive.  Since the Spotted dolphins are nocturnal hunters the afternoon is their normal 'resting' time so we leave them be until the later afternoon or evening when they get ready to go hunting. Often we swim with them until sunset and if we are lucky, we may have a night time encounter--the stuff of dreams!",
      Text4: "Day 6: Our last full day in the dolphin swim area and we must head back to Florida overnight. We will have our last evening playshop also. ",
      Text5: "Day 7: Breakfast on board while we clear customs and you say goodbye to your new friends with memories to last a lifetime!",
      Text6: "*Itinerary subject to change.*",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: eight,
    },
  };

  const whaleText = {
    Button1: {
      Head: "Why Do these Gray Whales Approach Humans AND Bring Their Babies To Be Caressed?",
      Text1: "NOWHERE IN THE WORLD do whales deliberately, actively and determinedly approach humans and WANT to be petted, kissed, hugged and played with.",
      Text2: "They look us in the eye, bring their babies to us, and roll over for tummy rubs.  They blow in your face and you can almost hear them laughing while we holler, laugh and sometimes cry.  They WANT you to pet them all over.",
      Text3: "San Ignacio may not be the biggest of the 3 Gray whale birthing lagoons but it is the best protected and regulated, and the most relaxed with and respectful of the whales.  There are amazing sunsets, sunrises and star filled night and crystal clear skies.",
      Text4: "The 40 ton moms literally push their babies up to the small panga (fishing) boats and sometimes leave their babies with us to play while they go take a break.",
      Text5: "There is a mysterious story here with the whales that can truly change lives.  We will be using this phenomenon as we focus on our own goals during the retreat. ",
      Text6: "Nothing brings us into alignment with our true essence faster than peak experiences in nature—connecting with something larger than ourselves (literally), with majesty, magnificence.",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: nine,
    },
    Button2: {
      Head: "An Opportunity for (Re-)Claiming Your True Essence",
      Text1: "F.U.N. is the vital essence that many of us need to re-claim, along with our Joy and Ease.",
      Text2: "What do you need to Get Over? Get Through? Get Past?",
      Text3: "Where in your life do you need inspiration?  Bring your stuckness and the parts that are hard to accept in yourself--they are WELCOME.",
      Text4: "Your connection with the whales, and the story of acceptance, compassion, forgiveness and redemption is unique to the Gray Whales in Baja.",
      Text5: "Between whale encounters and the F.U.N. you will have while in our group and while alone can help you transform your relationship with yourself and others.",
      Text6: "These retreats are especially good for families who want to improve their bond or start a new, positive family dynamic.",
      Text7: "A BONUS day in Loreto, Mexico to go out and play with the BLUE whales, the largest animal that ever lived on Earth!  It's not your average tourist trip either...",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: ten,
    },
    Button3: {
      Head: "What's Included and Not Included",
      Text1: "7 days and 6 nights of F.U.N. and inspiration!  6 nights of shared accommodations at the hotel and camp (3 nights at camp and 3 nights at our Loreto hotel before and after the lagoon).",
      Text2: "Transportation back and forth to the remote San Ignacio lagoon.",
      Text3: "SIX whale watches with knowledgeable guides in pangas (small but stable fishing boats)",
      Text4: "3 lovely meals a day at the family owned camp (that has the best food of the several camps I've been to), happy hour and all drinks.",
      Text5: "Professional retreat facilitation and a naturalist guide to help us understand the whales and their stories.",
      Text6: "Some days or evenings a 'play shop' will be offered as well as 'good morning stretch and connect' gatherings before breakfast (weather permitting).",
      Text7: "Added BONUS Day includes taking a panga from Loreto to go see Blue Whales in the Sea of Cortez",
      Text8: "What's NOT Included:",
      Text9: "Transportation to Loreto, Mexico",
      Text10: "Meals in Loreto and upon leaving San Ignacio camp to travel back to Loreto (Food in Mexico is very reasonably priced!).",
      Text11: "Tips at the camp to the amazing staff.",
      Text12: "We STRONGLY encourage you to purchase insurance upon paying your trip deposit.  The whales are wild animals and encounters cannot be guaranteed.",
      Img: eleven,
    },
    Button4: {
      Head: "Accommodations and food",
      Text1: "I have done the vetting necessary for the best experience here and compared to the other San Ignacio camps I have been to, our camp has the best food and boats.",
      Text2: "The food is fresh cooked daily and most food restrictions or preferences can be accommodated.  Food is often locally sourced fish and vegetables made Mexican style!",
      Text3: "Our eco-camp has rustic, clean, comfortable cabins each with a sink inside and eco-toilet outside on the deck.  Showers are available near the cabins and shared among the camp guests.",
      Text4: "A beach house (sleeps 4-6) with kitchen, and bathroom may be available for a higher rate IF we reserve it really early.  The camps fill up a year in advance!",
      Text5: "Stewardship of the desert environment is taken seriously while still being able to cater to a diverse international clientele.  Water is collected or de-salinated and then purified for use at the camp so conserving water use is appreciated.",
      Text6: "Electrical outlet for small electronics is provided in the cabins.",
      Text7: "",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: twelve,
    },
    Button5: {
      Head: "Pricing, Bonuses and Other Information",
      Text1: "7 days and 6 nights for $2500 (subject to change) all inclusive (see what's included and not included above). ",
      Text2: "Deposits of $750 are due upon registration and there are only 10-12 spots available (8 people minimum).  Deposits are non-refundable unless the trip doesn't fill.",
      Text3: "Camps fill up nearly a year in advance and they are holding our spaces so don't hesitate!!",
      Text4: "Bonuses:",
      Text5: "$100 off to the first 4 registrations OR if you bring a friend.  Bi-monthly payment plan for the first 4 registrations",
      Text6: "Other Important Information: ",
      Text7: "We can provide guidance and help for getting to Loreto from multiple locations in the US and Mexico.",
      Text8: "Dates are subject to slight changes as the trip gets closer depending on flight availability.",
      Text9: "All safety equipment on the boats is provided!",
      Text10: "The pangas have padded seats but no back rest and it can get bouncy if there is wind.  Those with significant back or neck issues should talk to their doctor first.",
      Text11: "Whale watches are subject to cancellation (not likely ) due to weather/wind.  Refunds for just the whale watches are at the discretion of camp management.",
      Text12: "There is a NO alcohol policy before happy hour, even if it is available at lunch, due to safety concerns during whale watches.  If you choose to drink at lunch, you are choosing to skip the afternoon whale watch!",
      Img: thirteen,
    },
    Button6: {
      Head: "Enhance Your Experience!",
      Text1: "In addition to being with you during the retreat to process whatever occurs, I also offer one coaching and/or counseling session before or after the retreat is INCLUDED to help you clarify and implement a healing or wellness goal (a $150 value) and additional sessions can be scheduled as desired.",
      Text2: "This experience is much more than a vacation--it's a commitment to your wellness and personal growth!",
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
      Img: thirteen2,
    },
    Button7: {
      Head: "Planned Itinerary",
      Text1: "Day 1: You arrive in Loreto and check in our lovely hotel on the water.  Dinner the first night is on your own but the group will meet around the pool at happy hour.",
      Text2: "Day 2:  We leave early and travel through the lovely countryside by private van to San Ignacio lagoon in time for lunch and our first whale watch!",
      Text3: "Days 3 and 4: Two whale watches a day plus all meals, a morning stretch and connect session outdoors (weather permitting), and evening playshops ",
      Text4: "Day 5:  We have one more whale watch before leaving camp and having lunch at a lovely restaurant in San Ignacio town before checking back in at our hotel",
      Text5: "Day 6:  Our BLUE whale watch day in the Sea of Cortez to see the largest creature that ever walked the earth and explore the energy of these amazing sentient beings. (A boxed lunch from the hotel can be arranged or you can buy one on your own to take on our panga.)  Our last evening, dinner is on your own or with the group, perhaps a relaxing evening by the pool.",
      Text6: "Day 7 is up to you--to stay or say goodbye to friends and with memories to treasure for a lifetime. ",
      Text7: "*Sample Itinerary subject to change*",
      Text8: "",
      Text9: "",
      Text10: "",
      Text11: "",
      Text12: "",
      Img: fourteen,
    },
  };

  const [Info, setInfo] = useState(dolphinText.Button1);
  const [Info2, setInfo2] = useState(whaleText.Button1);

  const counter = useTimer(2, 5);
  const counter2 = useTimer(3, 5);
  return (
    <RetreatPage>
      <ImgLayer style={{height, y}}>
        <Carousel imgs={[one, two]} counter={counter} />
      </ImgLayer>
      <TextSwap innerText={carouselText} counter={counter} />
      <CurrentRetreatTitle style={{height: "200px"}}>
      <StyledButton whileHover={{ backgroundColor: "#444444" }} to="/Contact">Click here to register now</StyledButton>
        <h3>Dolphin Wellness & Healing Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats1>
        <ButtonBox>
          <motion.button onClick={() => setInfo(dolphinText.Button1)} whileHover={{ x: 4}}>Why We Do This</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.Button2)} whileHover={{ x: 4}}>What You Get Out of It</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.Button3)} whileHover={{ x: 4}}>What's Included</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.Button4)} whileHover={{ x: 4}}>Accommodations and Food</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.Button5)} whileHover={{ x: 4}}>Pricing Options</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.Button6)} whileHover={{ x: 4}}>Free Bonuses!!</motion.button>
          <motion.button onClick={() => setInfo(dolphinText.Button7)} whileHover={{ x: 4}}>Itinerary</motion.button>
        </ButtonBox>
        <span>
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
            <img src={Info.Img} alt="Dolphin's" loading="lazy"/>   
        </span>
      </CurrentRetreats1>
      <CurrentRetreatTitle>
        <h3>Baja Gray Whale Wellness Retreat</h3>
      </CurrentRetreatTitle>
      <CurrentRetreats2>
        <span>
            <img src={Info2.Img} alt="Whale's" loading="lazy" />
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
        </span>  
        <ButtonBox>
          <motion.button onClick={() => setInfo2(whaleText.Button1)} whileHover={{ x: -4}}>Why We Do This</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.Button2)} whileHover={{ x: -4}}>What You Get Out of It</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.Button3)} whileHover={{ x: -4}}>What's Included</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.Button4)} whileHover={{ x: -4}}>Accommodations and Food</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.Button5)} whileHover={{ x: -4}}>Pricing Options</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.Button6)} whileHover={{ x: -4}}>Free Bonuses!!</motion.button>
          <motion.button onClick={() => setInfo2(whaleText.Button7)} whileHover={{ x: -4}}>Itinerary</motion.button>
        </ButtonBox>
      </CurrentRetreats2>
      <HeaderSection id="Gallery">
        <h2>Past Retreats in Hawaii, USA; Baja, Mexico; and Bimini, The Bahamas;</h2>
        <p>More locations world wide to come!</p>
        <Carousel imgs={[fifteen, sixteen, seventeen]} counter={counter2} />
      </HeaderSection>
      <PastRetreats>
        <article>
          <img src={eightteen} alt="Swimming with dolphins" loading="lazy" />
          <div>
            <h3>Testimonials from past participants</h3>
            <b>My own experiences swimming with wild Cetaceans for more than 20 years taught me there is something special about connecting with dolphins and whales when they choose to interact with you in their world that changes you forever.  I worked with a wild dolphin assisted healing program and I saw profound changes in people and families with physical and emotional challenges.</b>
            <b>I am always humbled to see the magic that happens on retreats. Sometimes it’s more subtle and it will show up later, or in dreams, or in your approach to life anew, but it’s undeniable.  I'll be there for you before, during and after to process your experiences so you can best integrate them into your daily life..</b>
            <p><q>I went with Jeanne on a wild dolphin encounter and as I swam with the dolphins I could hear their clicks, whistles and chirps. I felt it throughout my body and immediately noticed the hard knot of anxiety that was often present in my chest just dissolve. Joy came in then and took up the space that was supposed to live there!</q>  D. A.</p>
            <p><q>It truly was a life changing experience.</q> Lisa O.</p>
            <p><q>I was able to reach clarity on certain issues that were holding me back.  The whales helped me by reminding me of forgiveness and how to work to achieve it.  They always inspire me and bring me to a feeling of peace and love.</q> Mary Jean M.</p>
            <p><q>It was so much more than a vacation. I've been on a group vacation (with people I didn't know) but never been on a retreat before. It's so much more magical than just vacationing with a group - such bonding.</q>  Debbie S.</p>
          </div>
        </article>
        <article>
          <div>
            <h3>100% of Participants Said They Would Recommend These Retreats or Come Again</h3>
            <p><q>I’ve been on many retreats and this was right up there as one of the best. Of course, it was up to me to do the work, but Jeanne sent out great introspection questions and kept gently reminding us to do the work. I’d go someplace again with her.  I had four goals going in and, since we get out of it what we put into it, I worked through all my goals and got a lot out of it.</q> Diane S.</p>
            <p><q>The whales were amazing and made the event more than worthwhile!  I learned how calming it can be to just experience them and not focus on photography.</q> Sandy.B.</p>
            <p><q>Overall, a great experience.  The whales made me happy and inspired joy. You did a really good job and was prepared, organized and I appreciate that.</q> Cathy T</p>
            <p><q>I achieved my goals and found a deep seated issue that has plagued me my whole life. If they can forgive and move forward then I can.</q>  Valerie M. </p>
            <p><q>Wow! With Jeanne's help and attention, I was able to transform some very deep fears that were holding me back.  Everyone I met after the retreat asked where I'd been because I was absolutely glowing!  I can't wait to go with her on another retreat and bring my friends!</q> Cathy H.</p>
            <p><q>Thank you so much for putting together this amazing trip--I know it was a tremendous amount of work and you did a fabulous job of putting together every detail for a very diverse group.  Your role of leader first and foremost is your group's well being, which I know you had as you priority.  The whales inspired love and optimism in me. I have nothing but wonderful memories and hope to stay in touch with everyone moving forward!</q> Casey B.</p>
            <p><q>You are an amazing woman who has compassion and respect for all.  I had a wonderful time and grateful to have been included. It was wonderful!  A great connection with nature. It truly was a life changing experience and I look forward to the next trip!  Thank you so much!</q> Jean M. </p>
          </div>
          <img src={nineteen} alt="Whale sees you" loading="lazy" />
        </article>
        <article>
          <img src={twenty} alt="Dolphin group" loading="lazy" />
          <div>
            <h3>The Best Part of the Retreat Week was:</h3>
            <p><q>When we were in 'whale soup'.  It was amazing!</q> S.B.</p>
            <p><q>The boat trips out.  Excitement, camaraderie, and our excellent guide in Jeanne.</q> D.S.</p>
            <p><q>Touching the whale.  It's magical.</q> O.T. </p>
            <p><q>The first time I touched a whale and kissed it.</q> V.M.</p>
            <p><q>Hanging out with the other participants in camp.  We were like a pack, finding common goals.</q> M.T.</p>
            <p><q>Seeing all the dolphins circling around us, wanting to interact, getting soooo close.</q> J.T. </p>
            <p><q>Hearing their sounds underwater.  I could feel it in my whole body.</q> D.A.</p>
            <p><q>Disconnecting from the stressful world and connecting with dolphins in a wonderful group of people.</q> Brigit K.</p>
            <p><q>I really enJOYed our wonderful human pod of beautiful souls, the magical and divine communions with the dolphins, the great heart offerings of our leaders before, during and after the retreat.</q> Megan H. </p>
            <p><q>The feeling of being surrounded by love.</q> Barb W.</p>
            <p><q>I got everything I wanted and expected, plus much more in the way of animal and human interaction and the feeling of love and care.</q> Lisa H.</p>
          </div>
        </article>
        <StyledButton whileHover={{ backgroundColor: "#444444" }} to="/Contact">Click here to register now</StyledButton>
      </PastRetreats>
    </RetreatPage>
  )
}
