import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import one from '../assets/NewsImage1.webp'

const NewsBox = styled(motion.article)`
    position: fixed;
    top: 99px;
    right: 0%;
    display: flex;
    width: 350px;
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
    height: 410px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;
    img {
        width: 100%;
        height: 140px;
    }
    h4 {
        margin: 15px;
        margin-top: 5px;
        margin-left: 25px;
        font-size: 1em;
        font-weight: 600;
    }
    h4::after {
        content: "";
        position: absolute;
        top: 67%;
        left: 16.5%;
        width: 280px;
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

const collapseVariants = {
    closed: { x: 314 },
    open: { x: 0 },
}

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({ EMAIL: email });
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {status === "sending" && (
                <div>
                    sending
                </div>
            )}
            {status === "error" && (
                <div dangerouslySetInnerHTML={{__html: message}} />
            )}
            {status === "success" && (
                <div dangerouslySetInnerHTML={{__html: message}} />
            )}
            {status !== "success" ? (
                <>            
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        required
                    />
                    <motion.button whileHover={{ backgroundColor: '#5a5a5a' }} type='submit'>Join Now. No spam ever!</motion.button>
                </>    
                ) : null}
        </form>
    );
}

const MailchimpFormComtainer = props => {

    const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div>
            <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message}) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />    
                )}
            />
        </div>
    )
}

export default function Newsletter() {
    const [collapsed, setCollapsed] = useState(true);
  return (
    <NewsBox initial={{ x: 305 }} animate={collapsed ? "closed" : "open"} variants={collapseVariants}>
        <NewsButton 
        whileHover={{ backgroundColor: '#ececec' }} 
        onClick={() => setCollapsed(collapsed => !collapsed)}
        >
            <h3>Freebies!!</h3>
        </NewsButton>
        <NewsContent>
            <img src={one} />
            <h4>Sign up for our FREE monthly newsletter with holistic wellness tips!</h4>
            <p>Every month we send tips on building emotional intelligence and wellness in your life.  Take a look at our most recent newsletter
                <motion.a whileHover={{ color: "#5f5f5f"}} href="https://jteleia.wordpress.com/" > here</motion.a>.
            </p>
            <MailchimpFormComtainer />
        </NewsContent>
    </NewsBox>
  )
}
