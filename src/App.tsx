// import { useSelector } from 'react-redux';

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
    <div>
      {/* {user ? (
        <HomeScreen />
      ) : (
        <div>
          <AuthForm mode="signup" />
          <AuthForm mode="login" />
        </div>
      )} */}
      <h1 style={{ textAlign: "center" }}>Groupcation -- Coming Soon!</h1>
    </div>
  );
};

export default App;
