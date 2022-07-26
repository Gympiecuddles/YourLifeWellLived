import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import one from '../assets/one.jpg'

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
  height: 405px;
  background-color: #00000000;
  z-index: 1;
  h2 {
    margin-top: 150px;
    margin-left: 82px;
    margin-bottom: 25px;
    padding: 9px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 2.4em;
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

const ContactForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  div {
    margin: 150px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin-bottom: 40px;
      width: 95%;
      font-size: .9em;
      font-weight: 400;
      line-height: 24px;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      label {
        margin-top: 37px;
        font-size: .9em;
      }
      input {
        margin-top: 10px;
        width: 100%;
        height: 45px;
        border: 1px solid #c5c5c5;
        border-radius: 2px;
        font-size: 1.3em;
        background-color: #fafafa;
      }
      textarea {
        margin-top: 10px;
        border: 1px solid #c5c5c5;
        border-radius: 2px;
        font-size: 1em;
        background-color: #fafafa;
      }
      span {
        display: flex;
        width: 100%;
        label {
          margin: 0;
          margin-top: 8px;
          width: 100%;
          font-size: .7em;
        }
      }
      fieldset {
        margin: 0;
        display: flex;
        flex-direction: column;
        border: none;
        font-size: .9em;
        span {
          margin: 0;
          margin-top: 10px;
          display: flex;
          align-items: center;
          label {
            margin: 0px;
            margin-top: 1px;
            margin-left: 8px;
            font-size: .8em;
          }
          input {
            margin: 0;
            width: 15px;
            height: 17px;
          }
        }
      }
      button {
        margin-top: 35px;
        margin-bottom: 50px;
        width: 140px;
        height: 45px;
        font-size: .9em;
        font-weight: 600;
        border: none;
        color: #ffffff;
        background-color: #000000;
        text-transform: uppercase;
      }
    }
    p {
      margin-top: 18px;
      font-size: .9em;
      line-height: 22px;
    }
  }
`

export default function Contact() {
  return (
    <>
      <ImgLayer src={one} />
      <HeaderSection>
        <h2>Contact</h2>
        <p>We would love to hear from you.</p>
      </HeaderSection>
      <ContactForm>
        <div>
          <h3>Introduce yourself! Our team would be happy to answer any questions you may have and schedule a free phone consultation. Please complete the form below and someone will be in touch with you shortly. </h3>
          <form>
            <label htmlFor="">Name</label>
            <span>
              <input style={{ marginRight: "20px" }} type="text" />
              <input type="text" />
            </span>
            <span>
              <label htmlFor="">First Name</label>
              <label style={{marginLeft: "20px"}} htmlFor="">Last Name</label>
            </span>
            <label style={{ marginTop: "30px" }} htmlFor="">Email Address</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Phone</label>
            <span>
              <input style={{ marginRight: "20px", width: "60px" }} type="text" name="" id="" />
              <input style={{ marginRight: "20px", width: "60px" }} type="text" name="" id="" />
              <input style={{ width: "60px" }} type="text" name="" id="" />
            </span>
            <span>
              <label style={{ marginRight: "22px", width: "60px" }} htmlFor="">(###)</label>
              <label style={{ marginRight: "22px", width: "60px" }} htmlFor="">###</label>
              <label style={{ width: "60px" }} htmlFor="">####</label>
            </span>
            <label htmlFor="">Briefly, what brings you to therapy?</label>
            <textarea name="" id="" cols="30" rows="10" />
            <label htmlFor=""> Anything else you would like us to know? </label>
            <input type="text" name="" id="" />
            <label htmlFor=""> Please let us know a few times that you're available to be contacted:</label>
            <input type="text" name="" id="" />
            <label htmlFor=""> How'd you hear about us?</label>
            <fieldset>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Friend</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Google Search</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inclusive Therapists</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Psychology Today</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Social Media</label>
              </span>
            </fieldset>
            <label htmlFor=""> How'd you hear about us?</label>
            <fieldset>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Friend</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Google Search</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Psychology Today</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inclusive Therapists</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Social Media</label>
              </span>
            </fieldset>
            <label htmlFor=""> How'd you hear about us?</label>
            <fieldset>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Friend</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Google Search</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Psychology Today</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Inclusive Therapists</label>
              </span>
              <span>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Social Media</label>
              </span>
            </fieldset>
            <button type="submit">submit</button>
          </form>
          <p><b>Please note:</b> If you have an urgent medical situation, please do not wait for our email response. Instead, immediately contact your physician, visit the nearest emergency room or call 911.</p>
          <p>This email also is not a secure means of communication, and therefore, you should not send confidential information to us. Remember that any information we provide through email is not a substitute for a medical consultation with your physician and should not be used to diagnose or treat a health problem or disease.</p>
        </div>
      </ContactForm>
    </>
  )
}
