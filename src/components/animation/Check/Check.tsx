import React from 'react'
import styled from 'styled-components'

const Check = () => {
  return (
    <CheckContainer>
      <CheckBackground>
        <CheckSVG viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 25L27.3077 44L58.5 7" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
        </CheckSVG>
      </CheckBackground>
      <CheckShadow className="check-shadow"></CheckShadow>
    </CheckContainer>
  )
}

const CheckContainer = styled.div`
  width: 4.25rem;
  height: 5.5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
`

const CheckBackground = styled.div`
  width: 100%;
  height: calc(100% - 1.25rem);
  background: linear-gradient(to bottom right, #5de593, #41d67c);
  box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  transform: scale(0.84);
  border-radius: 50%;
  animation: animateContainer 2.25s ease-out infinite 0.75s; 
  -webkit-animation: animateContainer 2.25s ease-out infinite 0.75s; 
  -moz-animation: animateContainer 2.25s ease-out infinite 0.75s;
  -o-animation: animateContainer 2.25s ease-out infinite 0.75s;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  @keyframes animateContainer {
  0% {
    opacity: 0;
    transform: scale(0);
    box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  }
  25% {
    opacity: 1;
    transform: scale(0.9);
    box-shadow: 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  }
  43.75% {
    transform: scale(1.15);
    box-shadow: 0px 0px 0px 43.334px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset;
  }
  62.5% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 21.667px rgba(255, 255, 255, 0.25) inset;
  }
  81.25% {
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset;
  }
  100% {
    opacity: 1;
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset;
  }
}

`

const CheckShadow = styled.div`
  bottom: calc(-15% - 5px);
  left: 0;
  border-radius: 50%;
  background: radial-gradient(closest-side, #49da83, transparent);
  animation: animateShadow 0.75s ease-out forwards 0.75s;

  @keyframes animateShadow {
    0% {
      opacity: 0;
      width: 100%;
      height: 15%;
    }
    25% {
      opacity: 0.25;
    }
    43.75% {
      width: 40%;
      height: 7%;
      opacity: 0.35;
    }
    100% {
      width: 85%;
      height: 15%;
      opacity: 0.25;
    }
  }  
`

const CheckSVG = styled.svg`
  width: 65%;
  transform: translateY(0.25rem);
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: animateCheck 0.35s forwards 1.25s ease-out; 

  @keyframes animateCheck {
  from {
    stroke-dashoffset: 80;
  }
  to {
    stroke-dashoffset: 0;
  }
}
`

export default Check