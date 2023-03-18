import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'

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
    @media screen and (max-width: 1366px) {
       span {
        margin-right: 40px;
       } 
    }
    @media screen and (max-width: 1110px) {
       span {
        display: none;
       } 
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
    @media screen and (max-width: 1366px) {
       font-size: .8em; 
    }
    @media screen and (max-width: 1110px) {
        height: 7vh;
        color: #000000;
        border-bottom: 1px solid #dadada;
    }
    @media screen and (max-width: 414px){
        letter-spacing: 2px;
    }
`;

const LogoLink = styled(MotionLink)`
    margin-left: 100px;
    display: flex;
    align-items: center;
    width: 400px;
    font-size: 1.6em;
    font-weight: 400;
    letter-spacing: 8px;
    color: #ffff00;
    text-decoration: none;
    border: none;
    outline: none;
    @media screen and (max-width: 1366px) {
        margin-left: 20px;
        font-size: 1.4em; 
        text-align: center;
    }
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
    @media screen and (max-width: 1366px) {
        font-size: .8em; 
    }
    @media screen and (max-width: 1110px) {
        height: 7vh;
        color: #000000;
        border-bottom: 1px solid #dadada;
    }
    @media screen and (max-width: 414px){
        letter-spacing: 2px;
    }
`

const Hamburger = styled.button`
    display: none;
    margin: 30px;
    margin-right: 40px;
    color: #ffffff;
    background-color: #00000000;
    border: none;
    font-size: 30px;
    cursor: pointer;
    @media screen and (max-width: 1110px) {   
        display: block;
    }
`;

const HamburgerNav = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 100px);
    background-color: #ffffff;
    border-top: 1px solid #000000;
    z-index: 4;
`;

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false);
    
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const handleClick = () => {
        setMobileNav(!mobileNav);
    }

  return (
    <NavBox>
        <LogoLink to="/" whileHover={{ color: "#dada00"}} >Your Life Well Lived</LogoLink>
        <Hamburger onClick={handleClick}>
            <GiHamburgerMenu />
        </Hamburger>
        <span>
            <StyledLink to="/" whileHover={{ color: "#cee0fc"}}>Home</StyledLink>
            <StyledLink to="/retreats" whileHover={{ color: "#cee0fc"}}>Dolphin and Whale Wellness Retreats</StyledLink>
            <StyledHashLink smooth to="../#Services" scroll={el => scrollWithOffset(el)} whileHover={{ color: "#cee0fc"}} >Counseling & Coaching</StyledHashLink>
            <StyledHashLink smooth to="../Retreats/#Gallery" scroll={el => scrollWithOffset(el)} whileHover={{ color: "#cee0fc"}} >Gallery</StyledHashLink>
            <StyledLink to="/about" whileHover={{ color: "#cee0fc"}}>About me</StyledLink>
            <StyledLink to="/contact" whileHover={{ color: "#cee0fc"}}>Contact</StyledLink>
            <StyledLink to="/resources" whileHover={{ color: "#cee0fc"}}>Links & Resources</StyledLink>
            <StyledLink to="/faqs" whileHover={{ color: "#cee0fc"}}>FAQ's</StyledLink>
            <StyledLink 
                as="a" 
                href="https://jteleia.wordpress.com/" 
                target="_blank"
                whileHover={{ color: "#a8a8a8"}}
            >A Guide to Play-full Life</StyledLink>
        </span>
        {mobileNav &&
            <HamburgerNav>
                <StyledLink to="/" onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>Home</StyledLink>
                <StyledLink to="/retreats" onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>Dolphin and Whale Wellness Retreats</StyledLink>
                <StyledHashLink smooth to="../#Services" scroll={el => scrollWithOffset(el)} onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>Counseling & Coaching</StyledHashLink>
                <StyledHashLink smooth to="../Retreats/#Gallery" scroll={el => scrollWithOffset(el)} onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>Gallery</StyledHashLink>
                <StyledLink to="/about" onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>About me</StyledLink>
                <StyledLink to="/contact" onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>Contact</StyledLink>
                <StyledLink to="/resources" onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>Links & Resources</StyledLink>
                <StyledLink to="/faqs" onClick={handleClick} whileHover={{ backgroundColor: "#f5f5f5"}}>FAQ's</StyledLink>
                <StyledLink 
                    as="a" 
                    href="https://jteleia.wordpress.com/" 
                    target="_blank"
                    onClick={handleClick}
                    whileHover={{ backgroundColor: "#f5f5f5"}}
                >A Guide to Play-full Life</StyledLink>
            </HamburgerNav>
        }
    </NavBox>
  )
}
