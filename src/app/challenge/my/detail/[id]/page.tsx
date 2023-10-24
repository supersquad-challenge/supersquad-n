"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from '@/styles/color';
import MyNavigation from '@/components/common/challenge/detail/my/MyNavigation';
import Total from '@/components/common/challenge/detail/my/Total';
import My from '@/components/common/challenge/detail/my/My';
import About from '@/components/common/challenge/detail/my/About';
import ImageUploader from '@/components/base/imageUploader/ImageUploader';
import { WindowContext } from '@/context/window';
import SuccessModal from '@/components/base/modal/SuccessModal';
import { AuthContext } from '@/context/auth';
import PopupModal from '@/components/base/modal/PopupModal';

const MyDetail = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get('state');
  const userChallengeId = pathname.split('/')[4];
  const { isLogin } = useContext(AuthContext)
  const { modalState, handleModalState } = useContext(WindowContext);

  const [current, setCurrent] = useState<string | null>(query)
  useEffect(() => {
    if (!isLogin) {
      router.push('/signup');
    }
    setCurrent(query);
  }, [query])

  const handleDetectDevice = () => {
    handleModalState('onlyMobile');
    setTimeout(() => {
      handleModalState(undefined);
    }, 1500)
  }
  
  return (
    <PageContainer>
      <ImageContainer>
        <Image
          src={'/default/diet_thumbnail.svg'}
          alt='challenge thumbnail'
          fill
          style={{
              objectFit: "cover"
            }}
          priority={true}

        />
      </ImageContainer>
      <MyNavigation
        current={current}
      />
        {current === 'my' && (
          <PageInner>
            <PageTitle>
                My Status
            </PageTitle>
            <My
              id={userChallengeId}
            />
          </PageInner>
        )}
        {current === 'total' && (
          <PageInner>
            <PageTitle>
                Total Status
            </PageTitle>
            <Total
              id={userChallengeId}
            />
          </PageInner>
        )}
        {current === 'about' && (
          <PageInner>
            <PageTitle>
                Info
            </PageTitle>
            <About
              id={userChallengeId}
            />
          </PageInner>
        )}
        <ImageUploader 
          onClickEvent={() => {
            handleDetectDevice();
          }}
          userChallengeId={userChallengeId}
        />
      {modalState === 'upload' && (
        <SuccessModal
          title='Congrats!'
          detail='You have completed today’s challenge'
          buttonTitle='Check Your Status'
        />
      )}
      {modalState === 'onlyMobile' && (
        <PopupModal
          title='Can authenticate mobile'
        />
      )}
    </PageContainer>
  )
}

const PageContainer = styled.main`
  width: 100%;
  height: auto;
  margin-bottom: 120px;
  position: relative;
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
  color: ${colors.black};
`

const PageInner = styled.section`
  width: 90%;
  margin: 25px auto 0 auto;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.section`
  width: 100%;
  height: 240px;
  position: relative;

  @media (max-width: 450px) {
    height: 220px;
  }
  @media (max-width: 370px) {
    height: 200px;
  }
`
  
export default MyDetail