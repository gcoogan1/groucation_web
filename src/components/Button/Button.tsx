import { StyledButton, Label } from './Button.styles';
import Loader from '../Loader/Loader';
import Graphics from '../Graphics/Graphics';

interface ButtonProps {
  variant: 'filled' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'tertiary';
  loaderIconColor: string;
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  styles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  children,
  loaderIconColor,
  ariaLabel,
  onClick,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  styles,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      styles={styles}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={disabled || loading ? undefined : onClick}
    >
      {leftIcon && !loading && <Graphics>{leftIcon}</Graphics>}
      {!!loading && <Loader color={loaderIconColor} />}
      <Label>{!!loading ? 'Loading...' : children}</Label>
      {rightIcon && !loading && <Graphics>{rightIcon}</Graphics>}
    </StyledButton>
  );
};

export default Button;
