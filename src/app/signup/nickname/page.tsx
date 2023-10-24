"use client"

import OutlineInput from '@/components/base/input/OutlineInput'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { AiOutlineCheck } from 'react-icons/ai'
import styled from 'styled-components'
import { setNickname } from '@/lib/api/axios/user/setNickname'
import { WindowContext } from '@/context/window'
import { AuthContext } from '@/context/auth'
import Check from '@/components/animation/Check/Check'
import Loading from '@/components/animation/Loading/Spinner/Loading'

const SetNickname = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);  
  const [showSucces, setShowSuccess] = useState<boolean>(false);
  const { loadingState, handleLoadingState } = useContext(WindowContext)
  const { userId } = useContext(AuthContext);

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (username.length === 0) {
      setIsDone(false);
    }
  }

  const handleSubmit = () => {
    if (username.length === 0) {
      setIsDone(false)
    } else {
      setIsDone(true)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [username])

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
          What is your
        </BodyTitle>
        <InputContainer>
          <Nickname>Nickname</Nickname>
          <OutlineInput
            color='#000000'
            fontSize={17}
            bordercolor='#8F959E'
            updateInput={handleUpdate}
            submitInput={() => {}}
            placeholder='what is your nickname?'
            currentValue={username}
          />
          {isDone === false ? (
            <MsgContainer>
              Please fill in to continue
            </MsgContainer>
          ) : (
            <IconContainer>
              <AiOutlineCheck
                size="20"
                color="#8A01D7"
              />
            </IconContainer>
          )}
        </InputContainer>
        {showSucces && (
          <SuccessContainer>
            <Check />
            <SuccessMsg>
              Successfully Registered
            </SuccessMsg>
            <Address>
              Hello, {username}
            </Address>
          </SuccessContainer>
        )}
        <FooterContainer
          onClick={async () => {
            handleLoadingState(true)
            if (userId) {
              const res = await setNickname({
                userInfoId: userId,
                nickname: username
              });
              handleLoadingState(false);
              if (res?.status === 200) {
                setShowSuccess(true);
                setTimeout(() => {
                  setShowSuccess(false);
                  router.back();
                }, 3000)
              }
            }
          }}
        >
          Set Nickname
        </FooterContainer>
        {loadingState && (
          <Loading />
        )}
      </BodyContainer>
    </main>
)}

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
  margin-bottom: 50px;
`

const InputContainer = styled.div`
  width: 100%;
  height: 45px;
  margin: 10px auto 0 auto;
  position: relative;
`

const MsgContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 13px;
  transform: translateY(100%);
  color: red;
`

const Nickname = styled.span`
  font-size: 16px;
  color: #565656;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, -110%);
`

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-80%, -50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 60px;
  max-width: 500px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 18px;
  border: 1px solid #000000;

  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
  }
`

const SuccessContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 80px auto 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const SuccessMsg = styled.div`
  margin-top: 15px;
  font-size: 17px;
  font-weight: 500;
`

const Address = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
`



export default SetNickname