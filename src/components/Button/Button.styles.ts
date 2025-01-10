import styled from 'styled-components';

import { buttonVariants } from '../../styles/buttonVariants';
import { designTokens } from '../../styles/designTokens';

const { color, font, layout, border } = designTokens;

interface ButtonProps {
  variant: 'filled' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'tertiary';
  disabled: boolean;
  styles?: React.CSSProperties;
}

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant, color, disabled }) =>
    disabled
      ? buttonVariants[variant][color]['disabled']?.backgroundColor
      : buttonVariants[variant][color]['enabled']?.backgroundColor};
  color: ${({ variant, color, disabled }) =>
    disabled
      ? buttonVariants[variant][color]['disabled']?.color
      : buttonVariants[variant][color]['enabled']?.color};
  border: ${({ variant, color, disabled }) =>
    disabled
      ? buttonVariants[variant][color]['disabled']?.border
      : buttonVariants[variant][color]['enabled']?.border};
  padding: ${layout.space.medium};
  ${font.body.mediumBold};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  gap: ${layout.space.xSmall};
  border-radius: ${layout.space.medium};

  &:focus-visible {
    outline: ${border.weight.medium.borderWidth} solid white;
    box-shadow: 0 0 0 4px ${color.focus.base};
  }

  &:hover {
    background: ${({ variant, color, disabled }) =>
      !disabled && buttonVariants[variant][color]['hovered']?.backgroundColor};
    color: ${({ variant, color, disabled }) =>
      !disabled && buttonVariants[variant][color]['hovered']?.color};
  }

  &:active {
    background: ${({ variant, color, disabled }) =>
      !disabled && buttonVariants[variant][color]['pressed']?.backgroundColor};
    color: ${({ variant, color, disabled }) =>
      !disabled && buttonVariants[variant][color]['pressed']?.color};
  }

  ${({ styles }) => styles && { ...styles }};
`;

export const Label = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
