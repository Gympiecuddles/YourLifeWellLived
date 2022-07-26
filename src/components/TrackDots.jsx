import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TrackingDots = styled.div`
  position: fixed;
  top: 45%;
  right: 0;
  z-index: 2;
  div {
    margin: 25px;
    width: 10px;
    height: 10px;
    border: solid 3px #000000;
    border-radius: 50%;
    background-color: #00000000;
  }
`;

export default function TrackDots(dots, link1, link2, link3) {
  return (
    <TrackingDots>
        <motion.div whileHover={{ backgroundColor: "#00000000"}} />
        <motion.div whileHover={{ backgroundColor: "#00000000"}} />
        <motion.div whileHover={{ backgroundColor: "#00000000"}} />
    </TrackingDots>
  )
}
