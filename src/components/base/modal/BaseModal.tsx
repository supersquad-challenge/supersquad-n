import React, { ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai';
import { WindowContext } from '@/context/window';

type Props = {
  title: string;
  deletePath: string | undefined;
  children: ReactNode;
  show: boolean;
}

const BaseModal = ({ title, deletePath, children, show }: Props) => {
  const { handleModalState } = useContext(WindowContext);
  return (
    <ModalBackground>
      <ModalContainer
        $show={show}
      >
        <IconContainer
           onClick={() => 
            handleModalState(deletePath)
          }
        >
          <AiOutlineClose
            size='24'
          />
        </IconContainer>
        <ModalTitle>
          {title}
        </ModalTitle>
        {children}
      </ModalContainer>
    </ModalBackground>
  )
}

const ModalBackground = styled.section`
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;

`

const ModalContainer = styled.div<{
  $show: boolean;
}>`
  width: 100%;
  height: 450px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 20px 20px 0px 0px;
  animation-name: ${(props) => props.$show ? 'moveUp' : 'moveDown'};
  animation-duration: .3s;
  animation-timing-function: linear;

  @media (max-width: 350px) {
    height: 400px;
  }

  @media (max-width: 300px) {
    height: 350px;
  }

  @keyframes moveUp {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes moveDown {
    0% {
      transform: translateY(0%);
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`

const IconContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`
  
const ModalTitle = styled.div`
  padding-top: 20px;
  font-size: 32px;
  
  @media (max-width: 600px) {
    margin-top: 60px;
    font-size: 32px;
  }
  @media (max-width: 450px) {
    margin-top: 50px;
    font-size: 28px;
  }
  @media (max-width: 392px) {
    margin-top: 46px;
    font-size: 25px;
  }
  @media (max-width: 350px) {
    margin-top: 42px;
    font-size: 22px;
  }

  font-weight: 700;

  color: black;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

`;


export default BaseModal