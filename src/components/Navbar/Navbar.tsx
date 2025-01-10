import {
  NavbarWrapper,
  Container,
  LogoContainer,
  LinksContainer,
} from './Navbar.styles';
import Logo from '../../assets/Logos/Groupcation.svg?react';

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <NavbarWrapper>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LinksContainer>{children}</LinksContainer>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
