import React from 'react'
import { ButtonProp } from '@/types/Button';
import styled from 'styled-components';

type OutlineButtonT = {
  color: string;
  fontSize: number;
  bordercolor: string;
};


const OutlineButton = ({ title, onClickHandler, color, fontSize, bordercolor }: ButtonProp & OutlineButtonT) => {
  
  const OutlineButton = styled.button<OutlineButtonT>`
    width: 100%;
    min-width: 50px;    
    height: 100%;
    min-height: 20px;
    font-size: ${(props) => `${(props.fontSize)}px`};
    color: ${(props) => props.color};
    text-align: center;
    border: 1px solid ${(props) => props.bordercolor};
    background-color: #ffffff;
    
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.bordercolor};
      color: #fff;
    }
  `

  return (
    <OutlineButton
      color={color}
      fontSize={fontSize}
      bordercolor={bordercolor}
      onClick={() => onClickHandler()}
    >
      {title}
    </OutlineButton>
  )
}

export default OutlineButton