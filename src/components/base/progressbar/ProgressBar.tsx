import React, { useState } from 'react'
import styled from 'styled-components';

type Props = {
  rate: number;
}

const ProgressBar = ({ rate }: Props) => {
  return (
    <BarBody
      $width={rate}>
      <BarDot
        $width={rate}
      />
    </BarBody>
  )
}

const BarBody = styled.div<{$width: number}>`
  width: 35%;
  border: 1px solid #cccccc;
  position: absolute;
  left: 48.5%;
  top: 68%;
  transform: translate(-50%, -50%);
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -2.5px;
    border: 3px solid #8A01D7;
    border-radius: 3px;
    width: ${(props) => `${props.$width}%`};
    animation-name: appearRight;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  &::before {
    position: relative;
  }

  @keyframes appearRight {
    0% {
      width: 0px;
    }
    100% {
      width: ${(props) => `${props.$width}%`}
    }
  }
`

const BarDot = styled.div<{$width: number}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #8A01D7;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-45%);
  z-index: 99;
  animation-name: moveRight;
  animation-duration: .5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  
  @keyframes moveRight {
    0% {
      left: 0;
    }
    100% {
      left: ${(props) => `${props.$width}%`}
    }
  }
`

export default ProgressBar