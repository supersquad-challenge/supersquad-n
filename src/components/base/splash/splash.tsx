import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Loading from '@/components/animation/Loading/Bar/Loading'

const Splash = () => {
  return (
    <Container>
      <Title>
        Win over the
        <br></br>
        Authentic LifeGame
      </Title>
      <LogoContainer>
        <Image
          src={'/assets/supersquad_logo.svg'}
          alt='supersquad'
          width={40}
          height={40}
        />
        <LogoTitle>
          SUPERSQUAD
        </LogoTitle>
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
      </LogoContainer>
    </Container>
  )
}

const Container = styled.section`
  position: fixed;
  width: 100%;
  max-width: 600px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #00F0FF;
  z-index: 9999;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ClashDisplayVariable;
  position: absolute;
  top: 20%;
  left: 25px;
`

const LogoContainer = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-family: ClashDisplayVariable;  
  font-weight: 800;
  font-size: 24px;
`

const LoadingContainer = styled.div`
  z-index: 99;
  width: 200px;
`

export default Splash