import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';

import { onAuthStateChangedListener } from '../services/firebase/firebaseServices';
import { setUser, setLoading } from '../store/slices/authSlice';

/* Listens for authentication state changes and updates the Redux store accordingly, 
then removes listener (cleanup) */
const useAuthListener = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Set loading state to true before setting up the listener
    dispatch(setLoading(true));

    // Set up the Firebase auth state listener
    const authStateListener = onAuthStateChangedListener((currentUser) => {
      // Update Redux store with the current user or null
      if (currentUser) {
        // Update Redux store with the current user email and uid
        dispatch(
          setUser({
            email: currentUser.email,
            uid: currentUser.uid,
          }),
        );
      } else {
        // Handle case where there is no authenticated user
        dispatch(setUser(null));
      }
      // Set loading state to false after fetching user info
      dispatch(setLoading(false));
    });

    // Cleanup: authListener the listener when the component unmounts
    return () => {
      if (typeof authStateListener === 'function') {
        authStateListener();
      }
    };
  }, [dispatch]); // Ensures the effect only runs when `dispatch` changes
};

export default useAuthListener;
