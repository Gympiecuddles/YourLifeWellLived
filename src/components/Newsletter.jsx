import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import one from '../assets/NewsImage1.webp'

const NewsBox = styled(motion.article)`
    position: fixed;
    top: 99px;
    right: 0%;
    display: flex;
    width: 400px;
    height: 325px;
    z-index: 3;
`;

const NewsButton = styled(motion.div)`
    width: 40px;
    height: 120px;
    background-color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    h3 {
        padding: 10px;
        color: #000000;
        font-size: .9em;
        font-weight: 400;
        writing-mode: vertical-lr;
        letter-spacing: 3px;
    }
`;

const NewsContent = styled.div`
    width: 100%;
    height: 480px;
    background-color: #ffffff;
    border-radius: 5px;
    img {
        width: 100%;
        height: 180px;
    }
    h4 {
        margin: 15px;
        margin-top: 5px;
        margin-left: 25px;
        font-size: 1em;
        font-weight: 400;
    }
    h4::after {
        content: "";
        position: absolute;
        top: 72.1%;
        left: 16.5%;
        width: 295px;
        height: 1px;
        border-top: 1px solid #000000;
        background-color: #000000;
    }
    p {
        margin: 15px;
        margin-top: 20px;
        margin-left: 25px;
        width: 85%;
        font-size: .9em;
        font-weight: 400;
        a, a:active {
            font-style: italic;
            color: #000000;
            cursor: pointer;
            text-decoration: none;
        }
    }
    form {
        margin-top: 5px;
        margin-left: 27px;
        input {
            width: 200px;
            height: 22px;
        }
        button {
            display: block;
            margin-top: 10px;
            width: 100px;
            height: 40px;
            color: #ffffff;
            background-color: #000000;
            border: none;
            cursor: pointer;
        }
        label {
            margin-left: -70px;
        }
    }
`;

const CheckBox = styled.input`
    margin-top: 8px;
    margin-left: -89px;
    width: 10px;
    height: 10px;
    scale: .9;
`;

const collapseVariants = {
    closed: { x: 365 },
    open: { x: 0 },
}

export default function Newsletter() {
    const [collapsed, setCollapsed] = useState(true);
  return (
    <NewsBox initial={{ x: 305 }} animate={collapsed ? "closed" : "open"} variants={collapseVariants}>
        <NewsButton 
        whileHover={{ backgroundColor: '#ececec' }} 
        onClick={() => setCollapsed(collapsed => !collapsed)}
        >
            <h3>Newsletter</h3>
        </NewsButton>
        <NewsContent>
            <img src={one} />
            <h4>Sign up for our FREE monthly newsletter with holistic wellness tips!</h4>
            <p>Every month we release our wellness newsletter to help people live better lives. Fake text to take up space. Fake text to take up space. Fake text to take up space. Fake text to take up space. Fake text to take up space.  Take a look at our most recent newsletter 
                <motion.a whileHover={{ color: "#5f5f5f"}} href="/" > here</motion.a>.
            </p>
            <form>
                <input placeholder="Email" type="email" required />
                <motion.button whileHover={{ backgroundColor: '#5a5a5a' }} type='submit'>Join Now. No spam ever!</motion.button>
                <CheckBox type="checkbox" name="confirm" value="confirm" />
                <label for="confirm">Check to confirm subscription</label>
            </form>
        </NewsContent>
    </NewsBox>
  )
}
