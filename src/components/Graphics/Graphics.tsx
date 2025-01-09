import { GraphicsContainer } from './Graphics.styles';

interface GraphicsProps {
  size?: 'small' | 'medium';
  children: React.ReactNode;
}

const Graphics: React.FC<GraphicsProps> = ({ size = 'small', children }) => {
  return <GraphicsContainer size={size}>{children}</GraphicsContainer>;
};

export default Graphics;
