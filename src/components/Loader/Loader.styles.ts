import styled, { keyframes } from 'styled-components';

interface StyledLoaderProps {
  color: string;
  size: 'small' | 'medium';
  duration: number;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div<StyledLoaderProps>`
  width: ${({ size }) => (size === 'medium' ? '22px' : '18px')};
  height: ${({ size }) => (size === 'medium' ? '22px' : '18px')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};

  svg {
    width: 100%;
    height: 100%;
    animation: ${spin} ${({ duration }) => duration}s linear infinite;
  }
`;
