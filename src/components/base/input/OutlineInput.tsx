import { InputProp } from '@/types/Input';
import React from 'react'
import styled from 'styled-components';

export type OutlineInputT = {
  color: string;
  fontSize: number;
  bordercolor: string;
}

  const OutlineInputElement = styled.input<OutlineInputT>`
  width: 100%;
  min-width: 70px;
  height: 100%;
  min-height: 30px;
  font-size: ${(props) => `${(props.fontSize)}px`};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 10px;
  text-align: left;
  padding-left: 10px;
  outline: ${(props) => props.bordercolor};
`

const OutlineInput = ({ placeholder, updateInput, submitInput, currentValue, color, fontSize, bordercolor }: InputProp & OutlineInputT) => {
  const devide = parseFloat(currentValue) / 1000;
  return (
      <OutlineInputElement
        placeholder={placeholder}
        onChange={(event) => updateInput(event)}
        onKeyDown={submitInput}
        color={color}
        fontSize={fontSize}
        bordercolor={bordercolor}
        value={devide.toString() || ''}
      />  
    )
}

export default OutlineInput