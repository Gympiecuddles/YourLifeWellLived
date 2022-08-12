import React from 'react'
import styled from 'styled-components';

const ArrowDiv = styled.div`
  position: absolute;
  bottom: 3%;
  left: 49.4%;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  z-index: 2;
`;

export default function Arrow({position}) {
  return (
    <>
        <ArrowDiv style={{ bottom: position }} />
    </>    
  )
}
