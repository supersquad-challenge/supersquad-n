"use client"
import React, { useEffect, useState } from 'react'
import AuthSet from '@/components/common/authSet/AuthSet'
import { usePathname, useRouter } from 'next/navigation'
import { FiChevronLeft } from 'react-icons/fi'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px auto 10px auto;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 99;
  background-color: #ffffff;
  `

const HeaderInner = styled.section`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled.div`
  width: auto;
  min-width: 160px;
  font-size: 20px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 24px;
  font-family: OpenSansBold;
  font-weight: 600;
`

const Header = () => {
  const [pageTitle, setPageTitle] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  const isDetail = () => {
    if (pathname.includes('/detail') || pathname.includes('/mypage'))
      return false;
    return true;
  }

  useEffect(() => {
    if (pathname === "/challenge") {
      setPageTitle("Supersquad")
    } else if (pathname === "/challenge/my") {
      setPageTitle("My Challenges")
    }

  }, [pathname])


  return (
    <HeaderContainer>
      <HeaderInner>
        {isDetail() ? (
        <HeaderTitle>
          {pageTitle}
        </HeaderTitle>
        ) : (
        <ButtonContainer
          onClick={() => router.back()}
        >
          <FiChevronLeft
            color="#000000"
            size="24"
          />
        </ButtonContainer>
        )}
        <AuthSet />
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: all .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    background-color: #cccccc;
  }
`