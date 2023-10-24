"use client"
import React from 'react'
import styled from 'styled-components'
import { FiChevronLeft } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const HeaderContainer = styled.header`
  width: 90%;
  height: auto;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: all .2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #cccccc;
  }
`

const BodyContainer = styled.section`
  width: 90%;
  margin: 0 auto;
`

const BodyTitle = styled.div`
  margin-top: 40px;
  font-size: 22px;
  font-weight: 700;
`

const GoogleSignIn = styled.div`
  width: 100%;
  height: auto;
  margin-top: 70px;
`

const GoogleDesc = styled.span`
  text-align: start;
  color: #898989;
  font-size: 13px;
`

const GoogleDescUnderline = styled.span`
  text-decoration: underline;
`

const GOOGLE_LOGIN_URL = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL || "";

const Signup = () => {
  const router = useRouter();
  return (
    <main>
      <HeaderContainer>
        <ButtonContainer
          onClick={() => router.back()}
        >
          <FiChevronLeft
            color="#000000"
            size="24"
          />
        </ButtonContainer>      
      </HeaderContainer>
      <BodyContainer>
        <BodyTitle>
          Sign Up With
        </BodyTitle>
        <Link href={GOOGLE_LOGIN_URL}>
          <GoogleSignIn>
            <Image
              src="/assets/google_signin.svg"
              alt="google signin"
              width={100}
              height={50}
              style={{
                width: "100%",
                height: "50px"
              }}
              />
          </GoogleSignIn>
        </Link>
        <GoogleDesc>
          Already have an account? Then 
          <Link href={GOOGLE_LOGIN_URL}>
            <GoogleDescUnderline>
              {` SignIn `}
            </GoogleDescUnderline>
          </Link> 
          to continue!
        </GoogleDesc>
      </BodyContainer>
    </main>
  )
}

export default Signup;