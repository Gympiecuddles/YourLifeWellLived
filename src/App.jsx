import { useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import useTimer from './hooks/useTimer'

import Carousel from './components/Carousel'
import CarouselButton from './components/CarouselButton'
import Arrow from './components/Arrow'

import one from './assets/HomeImage1.webp'
import two from './assets/HomeImage2.webp'
import three from './assets/HomeImage3.webp'
import four from './assets/HomeImage4.webp'
import five from './assets/One.webp'
import eight from './assets/HomeImage8.webp'
import nine from './assets/HomeImage9.webp'
import ten from './assets/homeimage10.webp'
import eleven from './assets/HomeImage11.webp'

const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImgLayer1 = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000000;
  z-index: -1;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 0% 0%;
    filter: brightness(80%);
  }
  @media screen and (max-width: 928px) {
    img {
      object-position: 85% 0%;
    }
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
  img {
   
    width: 100%;
    object-fit: contain;
    z-index: -1;
  }
  @media screen and (max-width: 2240px) {
    h2 {
      font-size: 2.4em;
    }
    p {
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 1600px) {
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 1366px) {
    h2 {
      margin-left: 10px;
      width: 90%;
      font-size: 1.5em;
    }
    p {
      margin-left: 10px;
      font-size: 1em;
    }
  }
  @media screen and (max-width: 528px) {
    h2 {
      margin-left: 5px;
      margin-bottom: 0px;
      width: 82%;
      font-size: 1.4em;
    }
    p {
      margin-left: 5px;
      font-size: 1em;
    }
  }
`;

const HeaderSection2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 900px;
  background-image: url(${five});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  }
  p {
    margin-left: 82px;
    margin-right: 82px;
    padding: 19px;
    font-size: 1.5em;
    letter-spacing: 1.25px;
    color: #ffffff;
  }
  @media screen and (max-width: 1600px) {
    h2 {
      font-size: 2em;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media screen and (max-width: 1366px) {
    h2 {
      margin-left: 10px;
      font-size: 1.5em;
    }
    p {
      margin-left: 10px;
      font-size: 1em;
    }
  }
  @media screen and (max-width: 474px) {
    height: 700px;
    h2 {
      margin-top: 40px;
      margin-left: 10px;
      font-size: 1.4em;
    }
    p {
      margin-left: 10px;
      margin-right: 10px;
      font-size: .9em;
    }
  }
`;

const AboutBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-color: #cdfafc;
  z-index: 2;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
    img {
      align-self: flex-start;
      margin-top: 109px;
      width: 400px;
    }
  }  
  @media screen and (max-width: 1920px) {
    height: 530px;
    span {
      div {
        h3 {
          font-size: 1.2em;
        }
        p {
          font-size: .9em;
        }
      }
      img {
          margin-top: 0px;
          width: 320px;
        }
    }
  }
  @media screen and (max-width: 1600px) {
    height: 500px;
    span {
      div {
        h3 {
          font-size: 1.2em;
        }
        p {
          font-size: .9em;
        }
      }
      img {
          width: 320px;
        }
    }
  }
  @media screen and (max-width: 1366px) {
    span {
      div {
        h3 {
          font-size: 1em;
        }
      }
      img {
          margin-top: 10px;
          width: 300px;
        }
    }
  }
  @media screen and (max-width: 850px) {
    span {
      div {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 772px){
    height: 700px;
    span {
      flex-direction: column;
      div {
        width: 60%;
        h3 {
          font-size: 1.2em;
        }
      }
      img {
        align-self: center;
        margin-top: 10px;
        width: 60%;
      }
    }  
  }
  @media screen and (max-width: 404px){
    height: 700px;
    span {
      div {
        width: 80%;
        h3 {
          font-size: 1.2em;
        }
      }
      img {
        align-self: center;
        margin-top: 10px;
        width: 80%;
      }
    }  
  }
`;

const MotionButton = motion(HashLink);
const AboutButton = styled(MotionButton)`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 70px;
  padding: 15px;
  width: 350px;
  font-size: .9em;
  font-weight: 600;
  border: none;
  color: #ffffff;
  background-color: #0a3a86;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  @media screen and (max-width: 1600px) {
    width: 270px;
    font-size: .8em;
  }
  @media screen and (max-width: 470px) {
    margin-top: 50px;
    width: 230px;
    font-size: .7em;
  }
`

const ServicesBox = styled.section`
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdfafc;
  z-index: 1;
  div {
    margin: 110px;
    width: 17%;
    height: 760px;
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
      li {
        margin-bottom: 5px;
        font-size: .9em;
      }
    }
  }
  @media screen and (max-width: 1822px) {
    div {
      width: 350px;
    }
  }
  @media screen and (max-width: 950px) {
    div {
      margin: 35px;
      width: 40%;
      img {
        width: 280px;
      }
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    height: 1700px;
    div {
      width: 90%;
      height: 50%;
      img {
        width: 90%;
      }
      h4 {
        width: 90%;
        font-size: 1.2em;
      }
      p {
        margin: 10px;
        width: 84%;
        padding-right: 35px;
        font-size: .9em;
      }
      ul {
        width: 75%;
        li {
          margin-bottom: 5px;
          font-size: .9em;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    height: 1600px;
  }
`;

const ServiceBox2 = styled(ServicesBox)`
  height: 700px;
  div {
    height: 650px;
    ul {
      li {
        font-size: .9em;
      }
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    height: 1400px;
  }
`;

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
    margin-bottom: 40px;
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
  @media screen and (max-width: 1822px) {
    h3 {
      margin: 50px;
      font-size: 1.2em;
    }
    div {
      width: 70%;
    }
  }
  @media screen and (max-width: 850px) {
    h3 {
      margin: 50px;
      font-size: 1.2em;
    }
    div {
      width: 100%;
      article {
        p {
          line-height: 25px;
        }
      }
    }
  }
  @media screen and (max-width: 674px) {
    h3 {
      margin: 45px;
      font-size: 1.1em;
    }
    div {
      article {
        margin-left: 10px;
        margin-right: 10px;
        width: 45%;
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 446px) {
    h3 {
      margin: 30px;
      font-size: 1em;
    }
    div {
      flex-direction: column;
      article {
        margin-left: 10px;
        margin-right: 10px;
        width: 95%;
        p {
          line-height: 18px;
        }
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
  z-index: 1; 
`

const BottomButton = styled(MotionButton)`
  margin: 40px;
  margin-bottom: 70px;
  padding: 23px;
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




function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.36, .37], [0, -650, -500]);

  const [explainText, setExplainText] = useState(false);

  const CarouselText = {
    head: ["Holistic Counseling and Coaching", "Dolphin Retreats", "Whale Retreats"],
    subhead: ["You deserve to feel like this!",
  "Transformational Retreats with Wild Dolphins!",
"Inspirational Retreats with Wild Whales!"],
    button: ["Let's get started", "Click for more", "Ready to go?"],
  }

  let counter = useTimer(3, 5);

  const Location = ["/#Services", "/Retreats", "/Retreats"];

  return (
    <>
      <HomePage>
        <ImgLayer1 style={{y}}>
          <Carousel imgs={[one, two, three]} counter={counter} />
        </ImgLayer1>
        <HeaderSection style={{height: "89vh", marginTop: "150px"}}>
          <h2>Welcome! You Are One Step Closer to Reclaiming your JOY!</h2>
          <p>There's an easier, faster, more FUN way to your best life…</p>
          <CarouselButton innerText={CarouselText} counter={counter} location={Location}/>
          <Arrow />
        </HeaderSection>
        <AboutBox>
          <span>
            <div>
              <h3>How Do You Want to Feel About Your Life?</h3>
              <p>I believe we are all naturally creative, resourceful and whole, and the answers are already inside you.</p>
              <p>I can help you find them again or maybe for the first time.  We will work to uncover your true potential and lead a life that is worth celebrating!</p>
            </div>
            <img src={four} loading="lazy" />
          </span>  
          <AboutButton whileHover={{ backgroundColor: "#1154be" }} to="/Retreats">Learn more about who I am and what I do</AboutButton>
        </AboutBox>
        <HeaderSection2 id="Services">
          <h2>What I can do for you</h2>
          <p>What lights you up? Personal Growth work doesn’t have to be difficult!<br />  We will elicit your own brilliance for healing and transformation. <br /><br />  I use the power of play because it is a Fundamental Universal Need<br /> (or F.U.N.) that helps us grow and invigorates our lives.</p>
        </HeaderSection2>
        <ServicesBox>
          <div >
            <img src={eight} loading="lazy" />
            <h4>Holistic Psychotherapy and Life, Family and Wellness Coaching</h4>
            <p>"Once I accept myself just as I am, THEN I can change."  -Carl Rogers, Father of Modern Psychology</p>
            <ul>
              <li>Holistic Mind-Body-Spirit Approach</li>
              <li>Trauma Informed,  Experiential and Unique Techniques</li>
              <li>Non-judgemental and Compassionate</li>
              <li>Practical Feedback and Support Grounded in the Latest Research</li>
              <li>Highly Personalized Approach to Your Specific Situation</li>
              <li>I work exclusively from a virtual office so you can meet with me from the comfort of your home, office or car!</li>
            </ul>  
          </div>
          <div>
            <img src={eleven} loading="lazy" />
            <h4>Public Speaking, Consultation, and Supervision</h4>
            <p>Topics included:
            </p>
            <ul>
              <li>Dolphin Assisted Therapy</li>
              <li>Life Without Sweets Is Not Worth Living BUT It Shouldn't Kill You!</li>
              <li>Powerful Parenting</li>
              <li>Developing Youth Assets</li>
              <li>Emotional Intelligence</li>
              <li>Child Friendly Divorce/Collaborative Divorce</li>
              <li>The Power of Tapping</li>
              <li>Finding Your Best Self (for adolescents and/or girls)</li>
              <li>Mindfulness and Stress Reduction for the Rest of Us (non-meditators)</li>
              <li>The Importance of Play for Children and Adults</li>
              <li>Group and Family Play Therapy</li>
            </ul>
          </div>
        </ServicesBox>
        <ExplainBox>
          <h3 onClick={() => { setExplainText(!explainText) }} >Which is right for me--Therapy or Coaching?  CLICK HERE</h3>
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
                <p>All people can benefit from coaching at any time in the life to help them discover where they are going to achieve their goals, dreams, and vision.</p>
              </article>
              <article>
                <h4>Therapy</h4>
                <p>Focus is often on the past, as well as the present difficulties to help discover what is holding the client back. The client or their loved ones are having significant challenges with emotions and behavior.</p>
                <p>The therapist provides advice, education, emotional support, and feedback and is often seen as having expertise that the client is seeking. </p>
                <p>Therapy works on fixing or eliminating a problem, with a focus on healing. I also hold my clients accountable for their healing and growth.</p>
                <p>Usually done in person or online. Clients and therapists generally live in the same state where the therapist is licensed.  Counseling/Psychoeducation and Coaching can be done worldwide.</p>
                <p>Usually covered by insurance due to a diagnosable emotional, behavioral, or mental condition (from very minor to major). Includes strong, legal, privacy protections and is regulated by legal and ethical guidelines nationally and in the state where the therapist is licensed.</p>
                <p>Most people can benefit from therapy at some point in their lives to understand how they got to where they are now.</p>       
              </article>
            </div>
          }
        </ExplainBox>
        <ServiceBox2>
          <div>
            <img src={ten} loading="lazy" />
            <h4>Transformational Wellness Retreats with Whales!</h4>
            <p>Looking into the eye of one of the world's largest sentient beings, knowing they are choosing to be with you, can transform your relationship with life. What do you need to get over, get past, get through?  The whales can show us the way from their story of forgiveness and our story of redemption.</p>
          </div>
          <div>
            <img src={nine} loading="lazy" />
            <h4>Wild Dolphin Inspirational Wellness Retreats</h4>
            <p>We use the lessons the dolphins show us both in and above the water in a retreat that can change your life.  The dolphins show us how to play and live life to the fullest.  Play is an essential aspect of life--as important as sleep or nutrition!</p>
          </div>
        </ServiceBox2>
        <ButtonBox>
          <BottomButton whileHover={{ backgroundColor: "#444444" }} to="/Contact">Let's get started</BottomButton>
        </ButtonBox>
      </HomePage>
    </>
  )
}

export default App
