import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ROUTES } from './routes';

interface AuthRouteProps {
  element: React.ReactNode;
}

const AuthenticatedRoute: React.FC<AuthRouteProps> = ({ element }) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If no user is found, redirect to login/signup page
  if (!user) {
    return <Navigate to="/signup" />;
  }

  return element;
};

const UnauthenticatedRoute: React.FC<AuthRouteProps> = ({ element }) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is authenticated, redirect to home or any other route
  if (user) {
    return <Navigate to="/" />;
  }

  return element;
};

const routesWithAuth = ROUTES.map((route) => {
  // Check if the route needs to be protected
  if (route.isAuth) {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<AuthenticatedRoute element={route.element} />}
      />
    );
  }

  // If the route does not require authentication, wrap it in UnauthenticatedRoute
  return (
    <Route
      key={route.path}
      path={route.path}
      element={<UnauthenticatedRoute element={route.element} />}
    />
  );
});

export const router = createBrowserRouter(
  createRoutesFromElements(routesWithAuth),
);
