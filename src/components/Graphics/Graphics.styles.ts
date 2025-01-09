import styled from 'styled-components';

interface GraphicsContainerProps {
  size: 'small' | 'medium';
}

export const GraphicsContainer = styled.div<GraphicsContainerProps>`
  width: ${({ size }) => (size === 'medium' ? '22px' : '18px')};
  height: ${({ size }) => (size === 'medium' ? '22px' : '18px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
