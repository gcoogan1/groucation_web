import Signup from '../testScreens/Signup';
import HomeScreen from '../testScreens/HomeScreen';
import Login from '../testScreens/Login';

type Route = {
  path: string;
  element: React.ReactNode;
  isAuth: boolean;
};

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <HomeScreen />,
    isAuth: true,
  },
  {
    path: '/signup',
    element: <Signup />,
    isAuth: false,
  },
  {
    path: '/login',
    element: <Login />,
    isAuth: false,
  },
];
