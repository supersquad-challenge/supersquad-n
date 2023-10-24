"use client"
import { ReactNode, useContext  } from 'react'
import Header from '@/layout/Header'
import React from 'react'
import Footer from '@/layout/Footer'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { WindowContext } from '@/context/window'
import PopupModal from '@/components/base/modal/PopupModal'
import Splash from '@/components/base/splash/splash'

const Layout = (
  { children }: 
  { children: ReactNode }) => {
  const pathname = usePathname();
  const { modalState, isEntry } = useContext(WindowContext);

  const showHeader = () => {
    if (pathname.includes('/signup') || pathname.includes('/error'))
      return false;
    return true;
  }
  const showFooter = () => {
    if (pathname.includes('/signup') || pathname.includes('/detail') || pathname.includes('/error'))
      return false;
    return true;
  }
  return (
    <>
      {showHeader() && <Header />}
      <BodyContainer
        top={!showHeader() || pathname.includes('/detail') || pathname.includes('/mypage') ? 35 : 60}
        bot={showFooter() ? 110 : 40}
      >
        {modalState === 'login' && (
          <PopupModal
            title='Login required!'
          />
        )}
        {isEntry ? (
          <Splash />
        ) : (
          children
        )}
      </BodyContainer>
      {showFooter() && <Footer />}
    </>
  )
}

const BodyContainer = styled.div<{
  top: number,
  bot: number
  }>`
  margin-top: ${(props) => `${props.top}px`};
  margin-bottom: ${(props) => `${props.bot}px`};
`

export default Layout