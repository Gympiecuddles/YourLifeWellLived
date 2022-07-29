import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'

import Carousel from './components/Carousel'
import Newsletter from './components/Newsletter'

import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import { useState } from 'react'

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
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    z-index: -1;
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

const AboutBox = styled.section`
  width: 100%;
  height: 46vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;
  div {
    width: 29%;
    display: flex;
    flex-direction: column;
    h3 {
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
      line-height: 23px;
    }
    ul {
      margin-top: 13px;
      display: flex;
      li {
        margin: 10px;
        list-style: none;
      }
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
  background-color: #ffffff;
  z-index: 1;
  div {
    margin: 110px;
    width: 17%;
    height: 500px;
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
    ul {
      align-self: start;
      margin-top: 10px;
      margin-left: 40px;
      li {
        margin: 10px;
      }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
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
  background-color: #ffffff;
  z-index: 1;
  h3 {
    margin: 115px;
    padding: 5px;
    border: solid 1px #000000;
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
  background-color: #ffffff;

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

const Arrow = styled.div`
  position: absolute;
  bottom: 3%;
  left: 49%;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  border-style: solid;
  border-color: #000000;
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
`;


function App() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.6, 1], [1600, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [0, -400, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  const [explainText, setExplainText] = useState(false);

  return (
    <>
      <Newsletter />
      <HomePage>
        <ImgLayer style={{height, y}}>
          <Carousel imgs={[one, two, three]} />
        </ImgLayer>
        <ImgLayer style={{opacity, zIndex: -1}}>
          <img src={two} alt="" />
        </ImgLayer>
        <HeaderSection style={{height: "89vh", marginTop: "150px"}}>
          <h2>welcome</h2>
          <p>We are glad you found your way here.</p>
          <Arrow />
        </HeaderSection>
        <AboutBox>
          <div>
            <h3>relationships are the foundation of life.</h3>
            <p>When we experience painful events and the trust in our relationships seem compromised, it can feel like the ground is taken from under our feet. From the bottom of the hill, the journey upward can feel steep and daunting. It takes courage to reach out and find a supportive and experienced therapist who can help you restore your life.</p>
            <p>Our team is committed to walking alongside you or your family to overcome stressful experiences and gain a deeper understanding of yourself and others. We will work towards helping you build secure and fulfilling relationships so you do not need to journey alone.</p>
            <p>-  Michelle Harwell, Owner</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <motion.button whileHover={{ backgroundColor: "#444444" }}>learn more about dr.harwell</motion.button>
          </div>
          <img src={one} />
        </AboutBox>
        <HeaderSection>
          <h2 style={{marginTop: "80px", fontSize: "2.3em"}} >Services</h2>
          <p>We offer Coaching, Therapy, Retreats, Supervision, and Speaches</p>
        </HeaderSection>
        <ServicesBox>
          <div >
            <img src={one} />
            <h4>Therapy/Coaching</h4>
            <p>We take lessons from the dolphins and work holistically with the breath, using yoga and other techniques to sharpen our awareness, relax, unwind and fill our bodies with a natural sense of wellbeing.</p>
          </div>
          <div>
            <img src={one} />
            <h4>Retreats</h4>
            <p>We invite you to come and enjoy these magnificent sentient beings in their own home, on their own terms and to share the mutual joy of being together in the crystal clear, warm waters off the Bimini coast.</p>
          </div>
        </ServicesBox>
        <ServiceBullets>
          <ul>
            <li>Focus is on the present</li>
            <li>The coach is seen as an equal</li>
            <li>Can be done from anywhere</li>
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
            <img src={one} />
            <h4>Educational Lectures</h4>
            <p>We take lessons from the dolphins and work holistically with the breath, using yoga and other techniques to sharpen our awareness, relax, unwind and fill our bodies with a natural sense of wellbeing.</p>
            <ul>
              <li>Focus is on the present</li>
              <li>The coach is seen as an equal</li>
              <li>Can be done from anywhere</li>
            </ul>
          </div>
          <div>
            <img src={one} />
            <h4>Supervision</h4>
            <p>We invite you to come and enjoy these magnificent sentient beings in their own home, on their own terms and to share the mutual joy of being together in the crystal clear, warm waters off the Bimini coast.</p>
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
