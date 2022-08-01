import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';

const Img = styled(motion.img)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: 0% 0%;
   filter: brightness(65%);
`;

export default function Carousel2({imgs, counter}) {

  return (
    <AnimatePresence exitBeforeEnter>
        <Img 
          key={counter}
          src={imgs[counter]} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{ duration: .3 }}
          />
    </AnimatePresence>
  )
}
