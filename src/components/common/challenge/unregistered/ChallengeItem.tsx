import { isValidUrl } from '@/utils/urlUtils';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components'

type Props = {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  participants: number;
  deposit: string;
  isRegistered: boolean;
}

const UnRegisterItem = ({
  id,
  title,
  thumbnailUrl,
  participants,
  deposit,
}: Props) => {
  return (
    <Link href={`/challenge/detail/${id}`}>
      <ChallengeContainer>
        <ImageContainer>
          <Image
            src={isValidUrl(thumbnailUrl) ? thumbnailUrl : "/default/diet_thumbnail.svg"}
            alt='challenge'
            fill
            style={{
              objectFit: "cover"
            }}
            priority={true}
          />
        </ImageContainer>
        <Inner>
          <ChallengeTitle>
            {title}
          </ChallengeTitle>
          <ChallengeMetaContainer>
            <Participants>
              {participants} participants
            </Participants>
            <Deposit>
              ${deposit}
            </Deposit>
          </ChallengeMetaContainer>
        </Inner>
      </ChallengeContainer>
    </Link>
  )
}

const ChallengeContainer = styled.div`
  width: 100%;
  background-color: #cccccc;
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  transition: all .2s ease;

  &:hover {
    transform: scale(105%);
    box-shadow: 2px 2px 2px 2px #545454;
    z-index: 99;
  }

`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, transparent, #222);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 7px;
`

const ChallengeTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  white-space: pre-line;
  line-height: 95%;

  @media (max-width: 350px) {
    font-size: 16px;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`

const ChallengeMetaContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Participants = styled.div`
  font-size: 14px;
  font-weight: 450;
  color: #ffffff;
  margin: 8px 10px 8px 0px;

  @media (max-width: 350px) {
    font-size: 13px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`

const Deposit = styled.div`
  font-size: 14px;
  font-weight: 450;
  color: #ffffff;
  margin: 8px 15px 8px 0px;

  @media (max-width: 350px) {
    font-size: 13px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`

export default UnRegisterItem