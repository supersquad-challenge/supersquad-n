import styled from 'styled-components';

type Props = {
  title: string;
  participants: number;
  deposit: string;
}

const ChallengeMeta = ({ title, participants, deposit }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wapper>
        <Participants>
          {participants} Participants
        </Participants>
        <Deposit>${deposit}</Deposit>
      </Wapper>
    </Container>
  );
};

export default ChallengeMeta;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 35px;
  width: 460px;
  @media (max-width: 600px) {
    font-size: 33px;
    width: 440px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
    width: 370px;
  }
  @media (max-width: 392px) {
    font-size: 24px;
    width: 345px;
  }
  margin-top: 20px;
  font-weight: 600;
`;

const Wapper = styled.div`
  width: 460px;
  @media (max-width: 600px) {
    width: 440px;
  }
  @media (max-width: 450px) {
    width: 370px;
  }
  @media (max-width: 392px) {
    width: 345px;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
`;

const Participants = styled.div`
  font-size: 20px;
  line-height: 20px;
  padding-right: 12px;
  border-right: 2px solid black;
  margin-right: 12px;
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 18px;
    padding-right: 12px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    line-height: 16px;
    padding-right: 12px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
    line-height: 14px;
    padding-right: 12px;
  }
`;

const Deposit = styled.div`
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
  @media (max-width: 392px) {
    font-size: 14px;
  }
`;