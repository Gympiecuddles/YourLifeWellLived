import { useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import useTimer from './hooks/useTimer'

import Carousel from './components/Carousel'
import CarouselButton from './components/CarouselButton'
import Newsletter from './components/Newsletter'
import Arrow from './components/Arrow'

import one from './assets/HomeImage1.jpg'
import two from './assets/HomeImage2.jpg'
import three from './assets/HomeImage3.png'
import four from './assets/HomeImage4.jpeg'
import five from './assets/HomeImage5.jpg'
import eight from './assets/HomeImage8.jpg'
import nine from './assets/HomeImage9.jpg'
import ten from './assets/HomeImage10.jpg'
import eleven from './assets/HomeImage11.jpg'

const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImgLayer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000000;
  z-index: -1;
  img {
    width: 100%;
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
  height: 900px;
  background-color: #00000000;
  z-index: 1;
  h2 {
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 3.1em;
    font-weight: 400;
    letter-spacing: 6px;
    color: #ffffff;
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1.5em;
    letter-spacing: 1.25px;
    color: #ffffff;
  }
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: 2.5em;
    } 
  }
`;

const AboutBox = styled.section`
  width: 100%;
  height: 46vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  div {
    width: 29%;
    display: flex;
    flex-direction: column;
    h3 {
      margin: 10px;
      font-size: 1.3em;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    p {
      margin: 10px;
      padding-right: 35px;
      font-size: 1em;
      font-weight: 400;
      line-height: 23px;
    }
    button {
      align-self: end;
      margin-top: 30px;
      margin-right: 15px;
      width: 350px;
      height: 60px;
      font-size: .9em;
      font-weight: 600;
      border: none;
      color: #ffffff;
      background-color: #000000;
      text-transform: uppercase;
    }
  }
  img {
    align-self: flex-start;
    margin-top: 109px;
    width: 400px;
  }
`;

const ServicesBox = styled.section`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  div {
    margin: 110px;
    width: 17%;
    height: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 30px;
      width: 300px;
    }
    h4 {
      margin: 10px;
      font-size: 1.2em;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    p {
      margin: 10px;
      padding-right: 35px;
      font-size: .9em;
      font-weight: 400;
      line-height: 30px;
    }
  }
`;

const ServiceBox2 = styled(ServicesBox)`
  height: 650px;
  div {
    height: 600px;
  }
`;

const ServiceBullets = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    li {
      margin-top: 10px;
    }
  }
`

const ExplainBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: #0e50b9;
  z-index: 1;
  h3 {
    margin: 100px;
    padding: 8px;
    color: #ffff00;
    border: solid 1px #ffff00;
    font-size: 1.3em;
    cursor: pointer;
  }
  div {
    margin-bottom: 20px;
    width: 50%;
    display: flex;
    justify-content: center;
    article {
      margin-left: 20px;
      margin-right: 20px;
      width: 40%;
      h4 {
        margin: 10px;
      }
      p {
        margin: 10px;
        font-size: .9em;
        font-weight: 400;
        line-height: 30px;
      }
    }  
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #cdfafc;
  z-index: 3; 
  button {
    margin: 40px;
    margin-bottom: 70px;
    width: 350px;
    height: 60px;
    font-size: .9em;
    font-weight: 600;
    border: none;
    color: #ffffff;
    background-color: #000000;
    text-transform: uppercase;
  }
`




function App() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.6, 1], [1600, 10, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [0, -400, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  const [explainText, setExplainText] = useState(false);

  const CarouselText = {
    head: ["Services", "Dolphin Retreats", "Whale Retreats"],
    subhead: ["You deserve to feel like this!",
  "Transformational Retreats with Wild Dolphins!",
"Inspirational Retreats with Wild Whales!"],
    button: ["Let's get started", "Click for more", "Ready to go?"],
  }

  let counter = useTimer(3, 5);

  return (
    <>
      <Newsletter />
      <HomePage>
        <ImgLayer style={{height, y}}>
          <Carousel imgs={[one, two, three]} counter={counter} />
        </ImgLayer>
        <ImgLayer style={{opacity, zIndex: 0}}>
          <img src={five} alt="" />
        </ImgLayer>
        <HeaderSection style={{height: "89vh", marginTop: "150px"}}>
          <h2>Welcome! You Are One Step Closer to Reclaiming your JOY!</h2>
          <p>There's the hard way...or an easier, faster, more fun way to your best life…</p>
          <CarouselButton innerText={CarouselText} counter={counter} />
          <Arrow />
        </HeaderSection>
        <AboutBox>
          <div>
            <h3>How Do You Want to Feel About Your Life?</h3>
            <p>I believe we are all naturally creative, resourceful and whole, and the answers are already inside you.</p>
            <p>I can help you find them again or maybe for the first time.  We will work to uncover your true potential and lead a life that is worth celebrating!</p>
            <motion.button whileHover={{ backgroundColor: "#444444" }}>Learn more about who I am and what I do</motion.button>
          </div>
          <img src={four} />
        </AboutBox>
        <HeaderSection>
          <h2 style={{marginTop: "80px", fontSize: "2.3em"}} >Services</h2>
          <p>I work exclusively from a virtual office so you can meet with me from the comfort of your home, office or car!</p>
        </HeaderSection>
        <ServicesBox>
          <div >
            <img src={eight} />
            <h4>Holistic Psychhotherapy and Life, Family and Wellness Coaching</h4>
            <p>What lights you up? Personal Growth work doesn’t have to be hard!  We will elicit your own brilliance for healing and transformation.  I use the power of play because it is a Fundamental Universal Need (or F.U.N.) that helps us grow and invigorates our lives.</p>
            <p>"Once I accept myself just as I am, THEN I can change."  -Carl Rogers, Father of Modern Psychology</p>
          </div>
          <div>
            <img src={nine} />
            <h4>Wild Dolphin Insprational Wellness Retreats</h4>
            <p>We use the lessons the dolphins show us both in and above the water in a retreat that can change your life.  The dolphins show us how to play and live life to the fullest.  Play is an essential aspect of life--as important as sleep or nutrition!</p>
          </div>
        </ServicesBox>
        <ServiceBullets>
          <ul>
            <li>Holistic (mind-Body-Spirit) Approach</li>
            <li>Trauma informed, Exeriential and Unique Techniques</li>
            <li>Non-Judgemental and Compassionate</li>
            <li>Practical Feedback and Support Grounded in the Latest Research</li>
            <li>Highly personalized Approach to Your Specific Situation</li>
          </ul>  
        </ServiceBullets>
        <ExplainBox>
          <h3 onClick={() => { setExplainText(!explainText) }} >COACHING OR THERAPY?  Which is right for me?</h3>
          {explainText && 
            <div>
              <article>
                <h4>Coaching</h4>
                <p>Focus is on the present and the future—to create what you want. There are not significant behavioral or emotional challenges but healing and transformation do occur.</p>
                <p>Coaching uses a process of inquiry or asking questions to elicit the client’s own brilliance.</p>
                <p>The coach is seen as an equal, a partner who will support your growth.</p>
                <p>Coaching clients often know where they want to go; coaches help them clarify their goals and see their way more clearly. Coaches hold their clients accountable for their progress.</p>
                <p>Can be done from anywhere—via phone, internet, or in person. Clients and coaches don’t even need to live in the same country or state.</p>
                <p>Not covered by insurance because there is no diagnosable emotional or mental condition. Coaching is not regulated or licensed by federal or state governments.</p>
                <p>Many people are happy to tell others they have a coach vs. a therapist.</p>
                <p>All people can benefit from coaching at any time in the life to help them discover where they are going in order to achieve their goals, dreams and vision.</p>
              </article>
              <article>
                <h4>Therapy</h4>
                <p>Focus is often on the past, as well as the present difficulties to help discover what is holding the client back. The client or their loved ones are having significant challenges with emotions and behavior.</p>
                <p>The therapist provides advice, education, emotional support and feedback and is often seen as having expertise that the client is seeking. </p>
                <p>Therapy works on fixing or eliminating a problem, with a focus on healing. I also hold my clients accountable for their healing and growth.</p>
                <p>Usually done in person or online. Clients and therapists generally live in the same state where the therapist is licensed.  Counseling/Psychoeducation and Coaching can be done worldwide.</p>
                <p>Usually covered by insurance due to a diagnosable emotional, behavioral or mental condition (from very minor to major). Includes strong, legal, privacy protections and is regulated by legal and ethical guidelines nationally and in the state where the therapist is licensed.</p>
                <p>Most people can benefit from therapy at some point in their lives to understand how they got to where they are now.</p>       
              </article>
            </div>
          }
        </ExplainBox>
        <ServiceBox2>
          <div>
            <img src={ten} />
            <h4>Transformational Wellness Retreats with Whales!</h4>
            <p>Looking into the eye of one of the world's largest sentient beings, knowing they are choosing to be with you, can transform your relationship with life. What do you need to get over, get past, get through?  The whales can show us the way from their story of forgiveness and our story of redemption.</p>
          </div>
          <div>
            <img src={eleven} />
            <h4>Public Speaking and Consultation</h4>
            <p>Topics included: Dolphin Assisted Therapy, Life Without Sweets Is Not Worth Living BUT It Shouldn't Kill You!, Powerful Parenting, Developing Youth Assets, Emotional Intelligence, Child Friendly Divorce/Collaborative Divorce, The Power of Tapping
              , Finding Your Best Self (for adolescents and/or girls), Mindfulness and Stress Reduction for the Rest of Us (non-meditators), The Importance of Play for Children and Adults, Group and Family Play Therapy​
            </p>
          </div>
        </ServiceBox2>
        <ButtonBox>
          <motion.button whileHover={{ backgroundColor: "#444444" }}>Let's get started</motion.button>
        </ButtonBox>
      </HomePage>
    </>
  )
}

export default App
