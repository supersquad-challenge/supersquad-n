import React from 'react'
import styled from 'styled-components'

const NoChallenge = () => {
  return (
    <Container>
      <MessageContaienr>
        No challenge is registered 😥
      </MessageContaienr>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const MessageContaienr = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 500;
`

export default NoChallenge