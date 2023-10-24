import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Logo = () => {
  const LogoContainer = styled.div`
    width: 200px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  `

  const LogoTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1.4px;
`

  const LogoImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  `
  return (
    <Link href={'/'}>
      <LogoContainer>
        <LogoImage>
          <Image
            src={'/base/profile.jpg'}
            alt='Logo'
            width={40}
            height={40}
          />
        </LogoImage>
        <LogoTitle>resister-devlog</LogoTitle>
      </LogoContainer>
    </Link>
  )
}

export default Logo