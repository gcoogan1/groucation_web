import { useSelector } from 'react-redux';

import { RootState } from './store';
import { logout } from './services/firebase/firebaseServices';
import useAuthListener from './features/hooks/authHook';
import AuthForm from './testScreens/AuthForm';

const App: React.FC = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  useAuthListener();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
          <button onClick={() => logout()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <AuthForm mode="signup" />
          <AuthForm mode="login" />
        </div>
      )}
    </div>
  );
};

export default App;
