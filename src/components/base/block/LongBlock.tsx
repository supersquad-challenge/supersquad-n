import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  leftTitle: string;
  leftContent: string;
  leftBackground: string;
  rightTitle?: string;
  rightContent?: string;
  rightBackground: string;
  leftColor: string;
  rightColor?: string;
  children?: ReactNode;
}

const LongBlock = ({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  children,
  leftBackground,
  rightBackground,
  leftColor,
  rightColor
}: Props ) => {
  return (
    <BlockWrapper 
      $leftBackground={leftBackground}
      $rightBackground={rightBackground}>
      <BlockItem 
        $index={1}>
        <BlockTitle
          $index={1}
          $color={leftColor}>
          {leftTitle}
        </BlockTitle>
        <BlockContent 
          $index={1}
          $color={leftColor}>
          {leftContent}
        </BlockContent>
      </BlockItem>
      <BlockItem
        $index={2}
        >
        {(rightTitle !== undefined 
        && rightContent !== undefined
        && rightColor !== undefined) 
        ? (
          <>
            <BlockTitle 
              $index={2}
              $color={rightColor}>
              {rightTitle}
            </BlockTitle>
            <BlockContent 
              $index={2}
              $color={rightColor}>
              {rightContent}
            </BlockContent>        
          </>
        ) : null}
      </BlockItem>
      {children}
    </BlockWrapper>
  );
};


const BlockWrapper = styled.div<{
  $leftBackground: string,
  $rightBackground: string}>`
  width: 100%;
  height: 110px;

  border-radius: 20px;
  margin-top: 10px;
  padding: 10px 20px;
  background: linear-gradient( to right, ${(props) => props.$leftBackground}, ${(props) => props.$rightBackground});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 350px) {
    height: 95px;
  }
`;

const BlockItem = styled.div<{$index: number}>`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$index === 1 ?  'flex-start' : 'flex-end'};
`

const BlockTitle = styled.div<{
  $color: string,
  $index: number
}>`
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$index === 1 ? 'flex-start' : 'flex-end'};
  color: ${(props) => props.$color};

  @media (max-width: 450px) {
    font-size: 13px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

const BlockContent = styled.div<{
  $color: string,
  $index: number
}>`
  font-size: 24px;
  font-weight: 600;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$index === 1 ? 'flex-start' : 'flex-end'};
  color: ${(props) => props.$color};

  
  @media (max-width: 450px) {
    font-size: 22px;
  }

  @media (max-width: 350px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 17px;
  }
`;

export default LongBlock;
