import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Img = styled(motion.img)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: 0% 0%;
`;

export default function Carousel(props) {
  const [image, setImage] = useState(0);

  useEffect(()=> {
    const timer = setInterval(intervalMech, 2000);

    return function stopTimer() {
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

  return (
    <>
        <Img src={props.imgs[image]} alt="" />
    </>
  )
}
