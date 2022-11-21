import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const NavBox = styled(motion.nav)`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #0a3a86;
    z-index: 3;
    span {
        margin-right: 100px;
        display: flex;
        justify-content: space-between;
        width: 1150px;
        list-style: none;
    }
`;

const MotionLink = motion(Link);
const StyledLink = styled(MotionLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1em;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    outline: none;
`;

const LogoLink = styled(StyledLink)`
    margin-left: 100px;
    display: flex;
    align-items: center;
    width: 400px;
    font-size: 1.6em;
    font-weight: 400;
    letter-spacing: 8px;
    color: #ffff00;
    outline: none;
`;

const MotionHashLink = motion(HashLink);
const StyledHashLink = styled(MotionHashLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1em;
    letter-spacing: 3px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    outline: none;
`

export default function Navbar() {
    
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

  return (
    <NavBox>
        <LogoLink to="/" whileHover={{ color: "#dada00"}} >Your Life Well Lived</LogoLink>
        <span>
            <StyledLink to="/" whileHover={{ color: "#cee0fc"}}>Home</StyledLink>
            <StyledLink to="/retreats" whileHover={{ color: "#cee0fc"}}>Dolphin and Whale Wellness Retreats</StyledLink>
            <StyledHashLink smooth to="../#Services" scroll={el => scrollWithOffset(el)} >Counseling & Coaching</StyledHashLink>
            <StyledLink to="/about" whileHover={{ color: "#cee0fc"}}>About me</StyledLink>
            <StyledLink to="/contact" whileHover={{ color: "#cee0fc"}}>Contact</StyledLink>
            <StyledLink to="/resources" whileHover={{ color: "#cee0fc"}}>Links & Resources</StyledLink>
            <StyledLink to="/faqs" whileHover={{ color: "#cee0fc"}}>FAQ's</StyledLink>
            <StyledLink 
                as="a" 
                href="https://jteleia.wordpress.com/" 
                target="_blank"
                whileHover={{ color: "#a8a8a8"}}
                >A Guide to Play-full Life (blog)</StyledLink>
        </span>
    </NavBox>
  )
}
