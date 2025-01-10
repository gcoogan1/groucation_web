import styled from 'styled-components';

import { designTokens } from '../../styles/designTokens';

const { layout, color, border, font } = designTokens;

interface StyledInputProps {
  isError: boolean;
}

interface InputProps {
  isVisible: boolean;
  isPopulated: boolean;
}

export const InputContainer = styled.div`
  position: relative;
  margin: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${layout.space['2xSmall']};
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: ${layout.space.medium};
  border: ${({ isError }) =>
      isError
        ? `${border.weight.medium.borderWidth} solid #EB0000`
        : `${border.weight.medium.borderWidth} solid ${color.surface.text1}`};
  ${border.radius.small};
  ${font.body.medium};
  outline: none;
  color: ${color.surface.text1};
  display: 'flex';
  gap: ${layout.space.xSmall};
  align-items: 'center';

  &:focus {
    border-color: ${color.focus.base};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -8px;
    font-size: 12px;
  }

  &::placeholder {
    color: ${color.surface.text2};
  }
`;

export const Label = styled.label<StyledInputProps>`
  position: absolute;
  top: -8px;
  left: 10px;
  background: white;
  padding: 0 5px;
  ${font.body.smallBold};
  color: ${({ isError }) => isError ? '#EB0000' : color.surface.text1};
  transition: 0.2s ease all;

  ${StyledInput}:focus + & {
    color: ${color.focus.base};
  }
`;

export const Icon = styled.div<InputProps>`
  position: absolute;
  right: ${layout.space.medium};
  top: 35%;
  transform: translateY(-50%);
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
`

export const ErrorText = styled.p`
  ${font.body.medium};
  color: #EB0000;
`
