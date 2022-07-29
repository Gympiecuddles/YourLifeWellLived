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

export default function Carousel(props) {
  const [image, setImage] = useState(0);

  useEffect(()=> {
    const timer = setInterval(intervalMech, 5000);

    return () => {
        clearInterval(timer);
    }
  }, [image])
  

  const intervalMech = () => {
    if(image < props.imgs.length - 1) {
        setImage(image + 1);
    } else {
        setImage(0)
    }
  };
  console.log(image);

  return (
    <AnimatePresence exitBeforeEnter>
        <Img 
          key={image}
          src={props.imgs[image]} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{ duration: 1 }}
          />
    </AnimatePresence>
  )
}
