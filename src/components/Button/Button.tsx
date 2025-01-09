import { StyledButton, Label } from './Button.styles';
import Loader from '../Loader/Loader';
import Graphics from '../Graphics/Graphics';

interface ButtonProps {
  variant: 'filled' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'tertiary';
  loaderIconColor: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  children,
  loaderIconColor,
  onClick,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      disabled={disabled}
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
