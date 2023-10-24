import BaseBlock from '@/components/base/block/BaseBlock';
import styled from 'styled-components';

type Props = {
  title: string;
  content: string;
  contentColor: string;
  direction: 'right' | 'left'
  shadow: 'rt' | 'rb' | 'lt' | 'lb';
}

const ChallengeInfo = ({ title, content, contentColor, direction, shadow }: Props) => {
  return (
    <ShadowContainer
      $direction={direction}
    >
      <BaseBlock backgroundColor="#ffffff">
        <Title>{title}</Title>
        <Content $color={contentColor}>
          {content}
        </Content>
      </BaseBlock>
    </ShadowContainer>
  );
};

export default ChallengeInfo;

const ShadowContainer = styled.div<{
  $direction: string
}>`
  border-radius: 20px;
  margin: 10px auto;
  box-shadow: 0px 5px 25px 0px #eee;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$direction === 'left' ? 'flex-start' : 'flex-end'} ;
  width: 46%;
  margin-left: ${(props) => props.$direction === 'left' ? 0 : 'unset'};
  margin-right: ${(props) => props.$direction === 'right' ? 0 : 'unset'};
  height: 125px;
  @media (max-width: 600px) {
    height: 120px;
  }
  @media (max-width: 450px) {
    height: 103px;
  }
  @media (max-width: 350px) {
    height: 95px;
  }

`

const Title = styled.div`
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
  font-weight: 500;
  margin-top: 10px;
  margin-left: 15px;
`;

const Content = styled.div<{
  $color: string
}>`
  font-size: 23px;
  width: 80%;
  @media (max-width: 600px) {
    font-size: 21px;
  }
  @media (max-width: 450px) {
    font-size: 19px;
  }
  @media (max-width: 392px) {
    font-size: 17px;
  }
  font-weight: 700;
  margin-top: 5px;
  margin-left: 15px;
  white-space: pre-line;
  line-height: 98%;
  color: ${(props) => props.$color};
`;