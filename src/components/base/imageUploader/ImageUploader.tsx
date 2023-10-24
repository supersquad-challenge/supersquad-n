import { WindowContext } from '@/context/window';
import postPhoto from '@/lib/api/axios/feature/postPhoto';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { isMobile } from '@/utils/detectDeviceUtils';

type Props = {
  onClickEvent: () => void;
  userChallengeId: string;
}

const ImageUploader = ({ onClickEvent, userChallengeId }: Props) => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const { handleModalState } = useContext(WindowContext);
  const detectDetive = isMobile(window.navigator.userAgent);

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (detectDetive === false) {
      return ;
    }
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      const res = await postPhoto(
        userChallengeId, 
        file
      );
      if (res === undefined || res === null || res.status === 0) {
        router.push('/error');
        return ;
      }
      if (res.status === 200) {
        handleModalState('upload');
        setTimeout(() => {
          handleModalState(undefined);
          router.push(`/challenge/my/detail/${userChallengeId}?state=my`);
        }, 3000)
      }
    }
  };
  
  return (
    <Container
      onClick={() => {
        if (detectDetive === false) {
          onClickEvent();
        }
      }}
    >
      <input
        id='image'
        accept="image/*"
        name='image'
        type="file"
        onChange={onUpload}
        style={{ display: "none" }}
      />
      <ButtonItem
        $color={detectDetive ? '#000' : '#ccc'}
        htmlFor={detectDetive ? 'image' : ''}
      >
        Complete Mission
      </ButtonItem>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 30px;
  width: 90%;
  transform: translateX(-50%);
  height: 60px;
  max-width: 500px;
  margin: 0 auto;
  color: #ffffff;
`

const ButtonItem = styled.label<{
  $color: string
}>`
  font-size: 18px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$color};
  border-radius: 20px;
`


export default ImageUploader