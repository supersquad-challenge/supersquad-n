import { colors } from '@/styles/color';
import styled from 'styled-components';
import BasicButton from '@/components/base/button/BasicButton';
import Image from 'next/image';
import { isValidUrl } from '@/utils/urlUtils';
import { daysBetweenDates } from '@/utils/dateFormatUtils';
import { BsChevronCompactRight } from 'react-icons/bs';
import Link from 'next/link';

type Props = {
  id: string;
  title: string;
  thumbnailUrl: string;
  startDate: string;
  endDate: string;
  status: string;
  frequency: string;
  isRegistered: boolean;
}

const ChallengeItem = ({
  id,
  title,
  thumbnailUrl,
  startDate,
  endDate,
  status,
  frequency,
}: Props) => {

  return (
    <ItemContainer onClick={() => {}}>
      <Link href={`/challenge/my/detail/${id}?state=my`}>
        <ImageContainer>
          <Image
            src={isValidUrl(thumbnailUrl) ? thumbnailUrl : "/default/diet_thumbnail.svg"}
            alt='challenge'
            fill
            style={{
              objectFit: "cover",
              borderRadius: '6px'
            }}
            priority={true}
          />
        </ImageContainer>
      </Link>
      <ChallengeInner>
        <Link href={`/challenge/my/detail/${id}?state=my`}>
          <ChallengeTitle>
            {title}
          </ChallengeTitle>
        </Link>
        <MetaContainer>
          <Duration>
            {frequency}
          </Duration>
          {startDate.length === 0 ? '2 Weeks' : daysBetweenDates(startDate, endDate)}
        </MetaContainer>
        <ButtonContainer>
          <BasicButton
            title={status === 'ongoing' ? 'On Going' : 'Complete'}
            onClickHandler={() => {}}
            color={'#ffffff'}
            backgroundColor={status === 'ongoing' ? "#00F0FF" : "#8A01D7"}
            borderRadius={50}
            fontSize={14}
          />
        </ButtonContainer>
      </ChallengeInner>
      <Link href={`/challenge/my/detail/${id}?state=my`}>
        <IconContainer>
          <BsChevronCompactRight
            size='32'
          />
        </IconContainer>
      </Link>
    </ItemContainer>
  );
};


const ItemContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 20px;
  min-width: 290px;
  position: relative;
  background-color: ${colors.blockGray};
  display: flex;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 350px) {
    right: 0px;
  }
`


const ChallengeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  
  margin-left: 50px;

  @media (max-width: 600px) {
    margin-left: 45px;
  }
  @media (max-width: 450px) {
    margin-left: 30px;
  }
  @media (max-width: 370px) {
    margin-left: 15px;
  }
`;

const ChallengeTitle = styled.div`
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 17px;
  }

  @media (max-width: 350px) {
    font-size: 16px;
  }

  @media (max-width: 300px) {
    font-size: 15px;
  }

  font-weight: 600;
  color: #121212;
`;

const Duration = styled.div`
  position: relative;
  font-size: 15px;
  padding-right: 10px;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    font-size: 15px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (max-width: 392px) {
    font-size: 14px;
  }

  font-weight: 400;
  color: #898989;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    transform: translateY(-40%);
    top: 50%;
    border: .5px solid #898989;
    border-radius: 0.5px;
    height: 80%;
    display: flex;
  }
`;

const ImageContainer = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
`

const ButtonContainer = styled.div`
  width: 180px;
  height: 30px;

  @media (max-width: 600px) {
    width: 160px;
  }

  @media (max-width: 450px) {
    width: 140px;
  }

  @media (max-width: 350px) {
    width: 120px;
  }

  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const MetaContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #898989;
`

export default ChallengeItem;
