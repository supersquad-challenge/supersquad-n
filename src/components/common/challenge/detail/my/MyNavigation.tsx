import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
  current: string | null;
}

const MyNavigation = ({ current }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <NavContainer>
      <NavItem
        onClick={() => {
          const query = "my"
          router.push(`${pathname}?state=${query}`)
        }}
        display={current === "my" ? "block" : "none"}
      >
        My
      </NavItem>
      <NavItem
        onClick={() => {
          const query = "total"
          router.push(`${pathname}?state=${query}`)
        }}
        display={current === "total" ? "block" : "none"}
      >
        Total
      </NavItem>
      <NavItem
        onClick={() => {
          const query = "about"
          router.push(`${pathname}?state=${query}`);
        }}
        display={current === "about" ? "block" : "none"}
      >
        About
      </NavItem>
    </NavContainer>  
  )
}

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  
  @media (max-width: 350px) {
    height: 35px;
    font-size: 14px;
  }
`

const NavItem = styled.div<{display: string}>`
  position: relative;
  width: 50%;
  min-width: 65px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #6F7789;
  font-weight: ${(props) => props.display === 'block' ? 700 : 'unset'};

    &:hover {
    cursor: pointer;
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    border: 2px solid #000000;
    border-radius: 2px;
    z-index: 9;
    display: ${(props) => props.display};
    animation-name: appearLeft;
    animation-duration: .3s;
    animation-fill-mode: forwards;

    @keyframes appearLeft {
       0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }
`

export default MyNavigation