import Loading from '@/components/animation/Loading/Spinner/Loading';
import { getUserInfo } from '@/lib/api/querys/user/getUserInfo';
import React from 'react'
import { useQuery } from 'react-query'
import CommonError from '@/components/common/error/CommonError';
import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi'
import { AiFillEdit } from 'react-icons/ai'

type Props = {
  id: string;
}

const UserInfo = ({ id }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`user-${id}`],
    queryFn: async () => {
      const res = await getUserInfo({
        userId: id
      });
      const userInfo = res.userInfo;
      return userInfo;
    }
  })

  if (isLoading) {
    return <Loading />
  }
  
  if (!isLoading && (error
    || data === undefined || data === null)) {
    return <CommonError msg="Fetch failed" />;
  }

  return (
    <Container>
      <BlockItem>
        Connect Wallet
        {data.address.length !== 0 ? (
          <IconContainer>
            <BsCheckLg
              size='20'
              color='#01fb03'
            />
          </IconContainer>
        ) : (
          <IconContainer>
            <RxCross2
              size='20'
              color='#ff0003'
            />
          </IconContainer>
        )}
        <Link href={'/signup/connect'}>
          <LinkContainer>
            {data.address.length === 0 ? (
              <FiArrowRight
                size='20'
                color='#222222'
              />
              ) : (
                <AiFillEdit
                  size='20'
                  color='#888888'
                />
              )}
            </LinkContainer>
        </Link>
      </BlockItem>
      <BlockItem>
        Set Nickname
        {data.nickname.length !== 0 ? (
          <IconContainer>
            <BsCheckLg
              size='20'
              color='#01fb03'
            />
          </IconContainer>
        ) : (
          <IconContainer>
            <RxCross2
              size='20'
              color='#ff0003'
            />
          </IconContainer>
        )}
        <Link href={'/signup/nickname'}>
          <LinkContainer>
            {data.nickname.length === 0 ? (
              <FiArrowRight
                size='20'
                color='#222222'
              />
              ) : (
                <AiFillEdit
                  size='20'
                  color='#888888'
                />
              )}
          </LinkContainer>
        </Link>
      </BlockItem>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const BlockItem = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 35px;
  font-weight: 500;
  margin: 5px auto;
  position: relative;
`

const IconContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 50%;
  transform: translate(8px, -50%);
`

const LinkContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 50%;
  transform: translate(-10px, -50%);
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #cccccc;
  }
`

export default UserInfo