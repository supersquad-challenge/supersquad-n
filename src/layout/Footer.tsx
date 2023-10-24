import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { LuFlag } from 'react-icons/lu'
import Profile from '@/components/base/Profile/Profile'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/auth'
import { WindowContext } from '@/context/window'
import { AiOutlineSearch } from "react-icons/ai";

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  max-width: 600px;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  border-radius: 5px;
  z-index: 99;
`

const FooterItem = styled.div<{display: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`

const FooterTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isLogin } = useContext(AuthContext);
  const { handleModalState } = useContext(WindowContext);

  const handlePageState = () => {
    if (pathname === "/challenge") {
      return 0
    } else if (pathname === "/challenge/my") {
      return 1
    } else {
      return 2
    }
  }
 
  const [pageState, setPageState] = useState<number>(handlePageState());

  useEffect(() => {
    setPageState(handlePageState());
  }, [pathname])

  return (
    <FooterContainer>
      <FooterItem
        onClick={() => {
          const path = "/challenge"
          router.push(`${path}`)
        }}
        display={pageState === 0 ? "block" : "none"}
      >
        <AiOutlineSearch
          color="#ffffff"
          size="25"
        />
        <FooterTitle>
          Explore
        </FooterTitle>
      </FooterItem>
      <FooterItem
        onClick={() => {
          const path = "/challenge/my"
          if (isLogin) {
            router.push(`${path}`)
          } else {
            handleModalState('login');
            setTimeout(() => {
              handleModalState(undefined);
            }, 2400)
          }
        }}
        display={pageState === 1 ? "block" : "none"}
      >
        <LuFlag
          color="#ffffff"
          size="25"
        />
        <FooterTitle>      
          My Challenges
        </FooterTitle>
      </FooterItem>
      <FooterItem
        onClick={() => {
          const path = "/mypage"
          if (isLogin) {
            router.push(`${path}`)
          } else {
            handleModalState('login');
            setTimeout(() => {
              handleModalState(undefined);
            }, 2400)   
          }
        }}
        display={pageState === 2 ? "block" : "none"}
      >
        <Profile
          color='#ffffff'
          size={26}
        />
        <FooterTitle>
          Profile
        </FooterTitle>
      </FooterItem>
    </FooterContainer>
  )
}

export default Footer