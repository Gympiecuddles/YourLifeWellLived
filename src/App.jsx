import styled from 'styled-components'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'

import one from './assets/one.jpg'

const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TrackingDots = styled.div`

`;

const ImgLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000000;
  z-index: -1;
  img {
    width: 100%;
    height: 100vh;
  }
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 80vh;
  background-color: #00000000;
  z-index: 0;
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
`;

const AboutBox = styled.section`
  width: 100%;
  height: 46vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  height: 46vh;
  background-color: white;
`;


function App() {
  return (
    <>
      <Navbar />
      <TrackingDots>

      </TrackingDots>
      <HomePage>
        <ImgLayer>
          <img src={one} ></img>
          <img></img>
        </ImgLayer>
        <HeaderSection style={{height: "89vh", marginTop: "150px"}}>
          <h2>welcome</h2>
          <p>We are glad you found your way here.</p>
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
            <button>learn more about dr.harwell</button>
          </div>
          <img src={one} />
        </AboutBox>
        <HeaderSection>
          <h2 style={{marginTop: "80px", fontSize: "2.3em"}} >SERVICES</h2>
          <p>We offer psychotherapy, medication consultation and management, support groups, parent consultations, workshops, and developmental assessments.</p>
        </HeaderSection>
        <ServicesBox>
          <div>
            <img></img>
            <h4>Therapy/Coaching</h4>
            <p>We take lessons from the dolphins and work holistically with the breath, using yoga and other techniques to sharpen our awareness, relax, unwind and fill our bodies with a natural sense of wellbeing.</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <img></img>
            <h4>Retreats</h4>
            <p>We invite you to come and enjoy these magnificent sentient beings in their own home, on their own terms and to share the mutual joy of being together in the crystal clear, warm waters off the Bimini coast.</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </ServicesBox>
      </HomePage>
    </>
  )
}

export default App
