import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWordpressSimple } from 'react-icons/fa'

import badge1 from '../assets/badge1.png'
import badge2 from '../assets/badge2.png'

const FooterBox = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0a3a86;
    color: #ffffff;
    z-index: 1;
    a {
        align-self: flex-end;
        margin: 10px;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 14px;
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
        z-index: 4;
    }
    div {
        margin-right: 5px;
        display: flex;
        align-items: center;
        z-index: 3;
        a {
            align-self: center;
            margin: 0;
            margin-left: 20px;
            font-size: 18px;
            img {
                width: 130px;
            }
        }
    }
`;

const ContactBox = styled(motion.div)`
    div {
        margin-right: 100px;
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        z-index: 3;
        p {
            margin-left: 22px;
            margin-bottom: 10px;
        } 
    }
`;

export default function Footer() {
  return (
    <FooterBox>
        <motion.a 
            whileHover={{ color: "#bee5f8"}}
            href='https://www.linkedin.com/in/richard-schembri/' 
            target="_blank"
            >Website developed by<br /> Richard Schembri</motion.a>
        <ContactBox>
            <div>
                <p>(719) 212-1254</p>
                <span>
                    <a href='https://www.instagram.com/cetaceaninspirations/' target="_blank"><AiOutlineInstagram /></a>
                    <a href='https://www.facebook.com/CetaceanInspirationWellnessCoachingandRetreats' target="_blank"><FaFacebookF /></a>
                    <a href='https://www.facebook.com/groups/572114303159420' target="_blank"><FaFacebookF /></a>
                    <a href='https://www.linkedin.com/in/jeanne-teleia-70299791/' target="_blank"><FaLinkedinIn /></a>
                    <a href='https://twitter.com/jeanne_teleia' target="_blank"><FaTwitter /></a>
                    <a href='https://jteleia.wordpress.com/' target="_blank"><FaWordpressSimple /></a>
                </span>
            </div>
            <a href='mailto: jteleia@gmail.com' target="_blank">jteleia@gmail.com</a>
        </ContactBox>
        <div>
            <a href='https://www.e-counseling.com/profile/Jeanne-Teleia' target="_blank">
                <img src={badge1} />
            </a>
            <a href='https://www.psychologytoday.com/profile/123454' target="_blank">
                <img style={{ width: "200px" }} src={badge2} />
            </a>
        </div>
    </FooterBox>
  )
}
