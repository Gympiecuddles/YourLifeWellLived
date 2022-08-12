import React from 'react'
import { Link } from 'react-router-dom'
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
        margin-right: 80px;
        display: flex;
        justify-content: space-between;
        width: 820px;
        list-style: none;
    }
`;

const MotionLink = motion(Link);
const StyledLink = styled(MotionLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: .9em;
    letter-spacing: 3px;
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


export default function Navbar() {
  return (
    <NavBox>
        <LogoLink to="/" whileHover={{ color: "#dada00"}} >Your Life Well Lived</LogoLink>
        <span>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>Home</StyledLink>
            <StyledLink to="/retreats" whileHover={{ color: "#a8a8a8"}}>Retreats</StyledLink>
            <StyledLink to="/faqs" whileHover={{ color: "#a8a8a8"}}>FAQs</StyledLink>
            <StyledLink to="/resources" whileHover={{ color: "#a8a8a8"}}>Resources</StyledLink>
            <StyledLink to="/about" whileHover={{ color: "#a8a8a8"}}>About me</StyledLink>
            <StyledLink to="/contact" whileHover={{ color: "#a8a8a8"}}>Contact</StyledLink>
            <StyledLink 
                as="a" 
                href="https://jteleia.wordpress.com/" 
                target="_blank"
                whileHover={{ color: "#a8a8a8"}}
                >Blog</StyledLink>
        </span>
    </NavBox>
  )
}
