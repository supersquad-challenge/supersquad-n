"use client"
import React from 'react'
import styled from 'styled-components'
import { IoReloadOutline } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import { useRouter } from 'next/navigation';

type Props = {
  msg: string;
}

const CommonError = ({ msg }: Props) => {
  const router = useRouter();
  return (
    <ErrorContainer>
      <TitleContainer>        
        Oops, Somethings wrong 😥
      </TitleContainer>
      <MsgContainer>
        {msg}
      </MsgContainer>
      <ButtonContainer>
        <ButtonItem
          onClick={() => {
            router.refresh();
          }}
        >
          <IoReloadOutline
            size='18'
            color='#ffffff'
          /> Reload
        </ButtonItem>
        <ButtonItem
          onClick={() => {
            router.push(`/challenge`)
          }}
        >
          <GoHome
            size='20'
            color='#ffffff'
          /> Home
        </ButtonItem>
      </ButtonContainer>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.section`
  width: 100%;
  height: 450px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.div`
  width: 200px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  width: 50%;
  max-width: 90px;
  height: 30px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }
`

const MsgContainer = styled.div`
  font-size: 17px;
  width: 80%;
  display: flex;
  align-items: center;
  margin: 40px auto 0 auto;
  justify-content: center;
`

const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 80px auto 0 auto;
  font-size: 27px;
  font-weight: 600;

`

export default CommonError