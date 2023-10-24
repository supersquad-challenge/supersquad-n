import React from 'react'
import { ButtonProp } from '@/types/Button'
import styled from 'styled-components'

type FillButtonT = {
  color: string;
  fontSize: number;
  backgroundcolor: string;
}

const Button = styled.button<{
  $color: string,
  $fontSize: number,
  $backgroundcolor: string
}>`
  width: 100%;
  min-width: 50px;    
  height: 100%;
  min-height: 20px;
  font-size: ${(props) => `${(props.$fontSize)}px`};
  color: ${(props) => props.$color};
  text-align: center;
  line-height: 100%;
  background-color: ${(props) => props.$backgroundcolor};
  border: none;
  transition: all .2s;

  &:hover {
    cursor: pointer;
    font-weight: 500;
    background-color: ${(props) => props.$color};
    color: ${(props) => props.$backgroundcolor};
  }
`

const FillButton = ({ title, onClickHandler, color, fontSize, backgroundcolor }: ButtonProp & FillButtonT) => {
  return (
    <Button
      $color={color}
      $fontSize={fontSize}
      $backgroundcolor={backgroundcolor}
      onClick={() => onClickHandler()}
    >
      {title}
    </Button>
  )
}

export default FillButton