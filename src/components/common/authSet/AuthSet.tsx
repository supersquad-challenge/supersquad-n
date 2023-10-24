"use client"
import Profile from '@/components/base/Profile/Profile'
import FillButton from '@/components/base/button/FillButton'
import { AuthContext } from '@/context/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import styled from 'styled-components'

const AuthSetContainer = styled.div`
  width: auto;
  height: 100%;
  padding-top: 5px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ButtonContainer = styled.div`
  height: 26px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #8A01D7;
  transition: all .3s;

  &:hover {
    background-color: #8A01D7;
  }
`

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const AuthSet = () => {
  const { isLogin } = useContext(AuthContext);
  const router = useRouter();

  return (
    <AuthSetContainer>
      {isLogin ? (
      <IconContainer>
        <Link href={'/mypage'}>
          <Profile
            color='#222222'
            size={28}
          />
        </Link>
      </IconContainer>
      ) : (
        <ButtonContainer>
          <FillButton
            title='Login'
            onClickHandler={() => {
              router.push('/signup')
            }}
            color='#8A01D7'
            fontSize={16}
            backgroundcolor='#ffffff'
          />
        </ButtonContainer>
      )}
    </AuthSetContainer>
  )
}

export default AuthSet