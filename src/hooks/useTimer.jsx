import React, { useState, useEffect } from 'react'

export default function useTimer(max, delayMS) {
    const [counter, setCounter] = useState(0);

    const delay = delayMS * 1000;

  useEffect(()=> {
    const timer = setInterval(intervalMech, delay);

    return () => {
        clearInterval(timer);
    }
  }, [counter])

  const intervalMech = () => {
    if(counter < max - 1) {
        setCounter(counter + 1);
    } else {
        setCounter(0)
    }
  };
  return counter;
}
