import styled from 'styled-components';
import BasicButton from '@/components/base/button/BasicButton';
import Image from 'next/image';

type Props = {
  title: string;
  detail: string;
  buttonTitle: string;
}

const SuccessModal = ({ title, detail, buttonTitle }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Image 
          src="/assets/check.svg" 
          alt="challenge registered"
          fill
          priority={true}
        />
      </ImageContainer>
      <CompletionTitle>{title}</CompletionTitle>
      <CompletionDetail>{detail}</CompletionDetail>
      <ButtonContainer>
        <BasicButton
          title={buttonTitle}
          onClickHandler={() => {}}
          color="white"
          backgroundColor={'#000000'}
          borderRadius={12}
          fontSize={16}
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation-name: appearIn;
  animation-duration: .4s;
  animation-timing-function: ease-out;
  
  @keyframes appearIn {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const ImageContainer = styled.div`
  width: 55px;
  height: 55px;
  position: relative;

  @media (max-width: 600px) {
    width: 55px;
    height: 55px;
  }
  @media (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 392px) {
    width: 48px;
    height: 48px;
  }
`;

const CompletionTitle = styled.div`
  @media (max-width: 600px) {
    font-size: 28px;
  }
  @media (max-width: 450px) {
    font-size: 24px;
  }
  @media (max-width: 392px) {
    font-size: 24px;
  }
  font-weight: 600;
  color: #121212;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CompletionDetail = styled.div`
  @media (max-width: 600px) {
    width: 300px;
    font-size: 18px;
  }
  @media (max-width: 450px) {
    width: 280px;
    font-size: 16px;
  }
  @media (max-width: 392px) {
    width: 261px;
    font-size: 14px;
  }

  margin-top: 10px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ButtonContainer = styled.div`
  @media (max-width: 600px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 180px;
  }
  @media (max-width: 392px) {
    width: 170px;
  }
  height: 44px;
  margin-top: 25px;
`;

export default SuccessModal;
