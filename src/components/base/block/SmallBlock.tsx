import styled from 'styled-components';
import { ReactNode } from 'react';

type Props = {
  leftTitle: string;
  rightTitle?: string;
  leftColor: string;
  rightColor?: string;
  children?: ReactNode;
}

const SmallBlock = ({
  leftTitle,
  rightTitle,
  children,
  leftColor,
  rightColor
}: Props ) => {
  return (
    <BlockWrapper>
      <BlockItem 
        $index={1}>
        <BlockTitle 
          $color={leftColor}
          $index={1}>
          {leftTitle}
        </BlockTitle>
      </BlockItem>
      <BlockItem
        $index={2}
        >
        {(rightTitle !== undefined 
        && rightColor !== undefined) 
        ? (
            <BlockTitle 
              $color={rightColor}
              $index={2}>
              {rightTitle}
            </BlockTitle>
        ) : null}
      </BlockItem>
      {children}
    </BlockWrapper>
  );
};


const BlockWrapper = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 15px;
  font-weight: ${(props) => props.$index === 1 ? 500 : 700};
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.$color};
`;

export default SmallBlock;
