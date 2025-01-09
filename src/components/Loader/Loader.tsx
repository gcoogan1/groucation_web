import { StyledLoader } from './Loader.styles';
import LoaderAsset from '../../assets/Animations/Loader.svg?react';

interface LoaderProps {
  color: string;
  size?: 'small' | 'medium';
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({
  color,
  size = 'small',
  duration = 2,
}) => {
  return (
    <StyledLoader color={color} size={size} duration={duration}>
      <LoaderAsset />
    </StyledLoader>
  );
};

export default Loader;
