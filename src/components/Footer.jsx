import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

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
    a {
        align-self: flex-end;
        margin: 10px;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 14px;
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
    }
    div {
        margin-right: 5px;
        display: flex;
        align-items: center;
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
                <p>561 000 0000</p>
                <span>
                    <a><AiOutlineInstagram /></a>
                    <a><FaFacebookF /></a>
                    <a><FaLinkedinIn /></a>
                </span>
            </div>
            <p>1212 DueNorth St, <br />Delray Beach, FL 33435</p>
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
