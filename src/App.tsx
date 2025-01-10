// import { useSelector } from 'react-redux';

import { designTokens } from './styles/designTokens';
import Add from './assets/Icons/Add.svg?react'; // special import for svgs with vite-plugin-svgr
import Layout from './components/Layout/Layout';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import Homepage from './screens/Homepage/Homepage';

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
      <Homepage />
    </Layout>
  );
};

export default App;
