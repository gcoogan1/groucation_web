import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { RootState } from './store';
import { router } from './routes/router';
import Layout from './components/Layout/Layout';
import useAuthListener from './hooks/authHook';
import useUserDetails from './hooks/userDetailsHook';

const App: React.FC = () => {
  useAuthListener();

  const { user, loading } = useSelector((state: RootState) => state.auth);

  useUserDetails(user);

  // if (loading) {
  //   return <div>Loading...</div>;
  //}

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
