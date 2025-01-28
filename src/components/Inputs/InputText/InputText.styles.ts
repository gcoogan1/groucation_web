import styled from 'styled-components';

import { designTokens } from '../../../styles/designTokens';

const { layout, color, border, font } = designTokens;

interface StyledInputProps {
  isError: boolean;
}

interface InputProps {
  isVisible: boolean;
  isPopulated: boolean;
}

export const InputContainer = styled.div`
  min-width: 120px;
  max-width: 400px;
`;

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  gap: ${layout.space.xSmall};
  background-color: ${color.surface.base1};
  justify-content: space-between;
`;

export const Label = styled.label<StyledInputProps>`
  ${font.body.mediumBold};
  color: ${({ isError }) => (isError ? '#EB0000' : color.surface.text1)};

  &:focus {
    color: ${color.focus.base};
  }
`;

export const Counter = styled.p`
  ${font.body.small};
`;

export const Input = styled.input<StyledInputProps>`
  ${font.body.medium};
  ${border.radius.small};
  ${border.weight.medium};
  width: '100%';
  outline: none;
  color: ${color.surface.text1};
  display: 'flex';
  align-items: 'center';
  padding: ${layout.space.medium};
  gap: ${layout.space.xSmall};
  border-color: ${({ isError }) =>
    isError ? ` #EB0000` : color.surface.text1};

  &:focus {
    border-color: ${color.focus.base};
  }
  &::placeholder {
    color: ${color.surface.text2};
  }
`;

export const Icon = styled.div<InputProps>`
  position: absolute;
  right: ${layout.space.medium};
  /* top: 35%;
  transform: translateY(-50%); */
  color: ${({ isVisible, isPopulated }) =>
    isVisible
      ? isPopulated
        ? color.surface.text1
        : color.surface.text2
      : 'transparent'};
  transition: color 0.2s ease;
`;

export const HelperText = styled.p`
  ${font.body.medium};
  color: ${color.surface.text2};
`;

export const ErrorContainer = styled.div`
  display: flex;
  gap: ${layout.space['2xSmall']};
`;

export const ErrorText = styled.p`
  ${font.body.medium};
  color: #eb0000;
`;
