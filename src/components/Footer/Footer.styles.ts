import styled from 'styled-components';

import { designTokens } from '../../styles/designTokens';

export const Wrapper = styled.div`
  display: flex;
  padding: ${designTokens.layout.space.xLarge}
    ${designTokens.layout.space.medium};
  justify-content: center;
  align-items: center;
  background: ${designTokens.color.secondary.base1};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 320px;
`;

export const BodyText = styled.p`
  ${designTokens.font.body.medium};
  color: ${designTokens.color.secondary.text2};
  text-align: center;
`;
