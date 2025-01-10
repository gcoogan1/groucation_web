import styled from 'styled-components';

import { designTokens } from '../../styles/designTokens';

const { layout, color, border } = designTokens;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${layout.space.large} ${layout.space.medium};
  gap: ${layout.space.medium};
  background-color: ${color.surface.base1};
  border-bottom: ${border.weight.thin.borderWidth} solid ${color.surface.line};
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: ${layout.space.small};
  justify-content: space-between;
  color: ${color.primary.base1};
`;

export const LogoContainer = styled.div`
  width: 64px;
  height: 64px;
`;

export const LinksContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;
