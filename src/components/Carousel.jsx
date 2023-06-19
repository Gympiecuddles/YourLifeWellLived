import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';

const Img = styled(motion.img)`
   width: 100%;
   object-fit: cover;
   object-position: 0% 0%;
`;

export default function Carousel({imgs, counter}) {

  return (
    <AnimatePresence exitBeforeEnter>
        <Img 
          key={counter}
          src={imgs[counter]} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{ duration: .3 }}
          alt='Hero images'
          />
    </AnimatePresence>
  )
}
