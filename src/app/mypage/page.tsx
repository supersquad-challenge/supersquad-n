"use client"
import UserInfo from '@/components/common/user/UserInfo'
import { AuthContext } from '@/context/auth'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

const MyPage = () => {
  const { isLogin, userId } = useContext(AuthContext);
  const router = useRouter()

  useEffect(() => {
    if (!isLogin) {
      router.push('/signup')
    }
  }, [])
  
  return (
    <PageContainer>
      <PageInner>
        <PageTitle>
          Profile
        </PageTitle>
        {isLogin && userId && (
          <UserInfo
            id={userId}
          />
        )}
      </PageInner>
    </PageContainer>
  )
}


const PageContainer = styled.main`
  width: 100%;
  height: auto;
  position: relative;
`

const PageInner = styled.section`
  width: 90%;
  margin: 70px auto 0 auto;
  display: flex;
  flex-direction: column;
`

const PageTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 35px;
    margin-bottom: 15px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 11px;
  }
  @media (max-width: 390px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
  font-weight: 800;
  color: #000000;
`



export default MyPage