import { ParsedDesc } from '@/types/challenge/Challenge'
import React from 'react'
import styled from 'styled-components';

type Props = {
  block: ParsedDesc;
}

const ChallengeDesc = ({ block }: Props) => {

  if (block.type === 'T')
    return (
      <Title>{block.text}</Title>
    )
  return (
    <Desc>
      <Dot />
      {block.text}
    </Desc>
  )
}

const Title = styled.div`
  margin: 10px 0px;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
`

const Desc = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 130%;
  margin: 5px 0;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  padding-left: 15px;
  position: relative;

`

const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: translateY(150%);
  left: 0;
  z-index: 99;
`

export default ChallengeDesc