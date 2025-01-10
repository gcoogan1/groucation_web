import {
  Links,
  Container,
  TextContainer,
  Title,
  SubTitle,
} from './Homepage.styles';
import { designTokens } from '../../styles/designTokens';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';

const Homepage = () => {
  return (
    <>
      <Navbar>
        <Links>
          <div>
          <Button
            variant="text"
            color="primary"
            ariaLabel="login"
            loaderIconColor={designTokens.color.primary.base1}
          >
            Log In
          </Button>
          </div>
          <Button
            variant="filled"
            color="primary"
            ariaLabel="signup"
            loaderIconColor={designTokens.color.primary.text1}
          >
            Sign Up
          </Button>
        </Links>
      </Navbar>
      <Container>
        <TextContainer>
          <Title>Groupcation</Title>
          <SubTitle>Travel the world together.</SubTitle>
        </TextContainer>
        <div>
          <Button
            variant="filled"
            color="primary"
            ariaLabel="get started"
            loaderIconColor={designTokens.color.primary.text1}
          >
            Get Started
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Homepage;
