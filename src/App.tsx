// import { useSelector } from 'react-redux';

import { designTokens } from './styles/designTokens';
import Add from './assets/Icons/Add.svg?react'; // special import for svgs with vite-plugin-svgr
import Layout from './components/Layout/Layout';
import Button from './components/Button/Button';

// import { RootState } from './store';
// import useAuthListener from './features/hooks/authHook';
// import AuthForm from './testScreens/AuthForm';
// import HomeScreen from './testScreens/HomeScreen';
// import useUserDetails from './features/hooks/userDetailsHook';

const App: React.FC = () => {
  // useAuthListener();

  // const { user, loading } = useSelector((state: RootState) => state.auth);

  // useUserDetails(user);

  // if (loading) {
  //   return <div>Loading...</div>;
  //}

  return (
    <Layout>
      {/* {user ? (
        <HomeScreen />
      ) : (
        <div>
          <AuthForm mode="signup" />
          <AuthForm mode="login" />
        </div>
      )} */}
      <h1
        style={{
          textAlign: 'center',
          color: designTokens.color.primary.base1,
          ...designTokens.font.title.large,
          padding: designTokens.layout.space.large,
        }}
      >
        Groupcation -- Coming Soon!
        <Add fill={designTokens.color.primary.nase1} />
      </h1>
      <div
        style={{
          width: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          leftIcon={<Add fill={'white'} />}
          rightIcon={<Add fill={'white'} />}
          loaderIconColor="black"
        >
          Click me
        </Button>
      </div>
    </Layout>
  );
};

export default App;
