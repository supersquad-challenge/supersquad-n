import React from 'react'
import styled from 'styled-components';

type Props = {
  title: string;
  subTitle: string;
  isActive: boolean;
}

const BaseCheckbox = ({ title, subTitle, isActive }: Props) => {
  return (
    <Container>
      <DotItem
        $active={isActive}
      />
      <ContentContainer>
        <Title>
          {title}
        </Title>
        <SubTitlte>
          {subTitle}
        </SubTitlte>
      </ContentContainer>
    </Container>
  )
}

const DotItem = styled.div<{
  $active: boolean;
}>`
  width: 30px;
  height: 30px;
  margin: 0 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.$active ? '#D6C0F0' : '#DADADA'};
  background-color: ${(props) => props.$active ? '#D6C0F0' : '#ffffff'};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const SubTitlte = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
`

const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default BaseCheckbox