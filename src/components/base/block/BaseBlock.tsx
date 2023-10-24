import styled from 'styled-components';
import { Block } from '@/types/Block';

const BaseBlock = ({ backgroundColor, children }: Block) => {
  return (
  <BlockWrapper 
    $backgroundColor={backgroundColor}>
    {children}
  </BlockWrapper>
  )
};
export default BaseBlock;

const BlockWrapper = styled.div<{ $backgroundColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$backgroundColor};
`;