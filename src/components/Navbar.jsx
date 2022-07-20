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
    height: 70px;
    color:#585858;
    background-color: #ffffff;
    z-index: 3;
    span {
        margin-right: 80px;
        display: flex;
        justify-content: space-between;
        width: 700px;
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
    color: #000000;
    text-decoration: none;
    outline: none;
`;

const LogoLink = styled(StyledLink)`
    margin-left: 100px;
    display: flex;
    align-items: center;
    width: 400px;
    font-size: 1.4em;
    font-weight: 400;
    letter-spacing: 8px;
    color: #000000;
    outline: none;
`;


export default function Navbar() {
  return (
    <NavBox>
        <LogoLink to="/" whileHover={{ color: "#a8a8a8"}} >Your Life Well Lived</LogoLink>
        <span>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>Home</StyledLink>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>Retreats</StyledLink>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>FAQs</StyledLink>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>Resources</StyledLink>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>About me</StyledLink>
            <StyledLink to="/" whileHover={{ color: "#a8a8a8"}}>Contact</StyledLink>
        </span>
    </NavBox>
  )
}
