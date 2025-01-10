import styled from 'styled-components';

import { designTokens } from '../../styles/designTokens';

const { layout, color, font } = designTokens;

export const Links = styled.div`
  display: flex;
  gap: ${layout.space.small};
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: ${layout.space.large};
  justify-content: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  ${font.display.medium};
  color: ${color.primary.base1};

  @media (max-width: 320px) {
    ${font.display.small};
  }
`;

export const SubTitle = styled.h2`
  ${font.title.medium};
  color: ${color.surface.text1};

  @media (max-width: 320px) {
    ${font.title.small};
  }
`;
