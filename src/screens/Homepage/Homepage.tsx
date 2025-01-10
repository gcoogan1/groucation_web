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
          <Button
            styles={{ width: '100px' }}
            variant="text"
            color="primary"
            ariaLabel="login"
            loaderIconColor={designTokens.color.primary.base1}
          >
            Log In
          </Button>
          <Button
            styles={{ width: '100px' }}
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
        <Button
          styles={{ width: '120px' }}
          variant="filled"
          color="primary"
          ariaLabel="get started"
          loaderIconColor={designTokens.color.primary.text1}
        >
          Get Started
        </Button>
      </Container>
    </>
  );
};

export default Homepage;
