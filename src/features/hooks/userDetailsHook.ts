import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUserDetails } from '../stateSlices/userSlice';
import { getUserInfo } from '../../services/firebase/firebaseServices';

type UserCreds = {
  email: string | null;
  uid: string;
};

type UserDetails = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  city?: string;
  country?: string;
  photoURL?: string;
};

const useUserDetails = (user: UserCreds | null) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.uid && !user?.email) return;

    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();

        if (!userInfo) {
          throw new Error('User info is unavailable.');
        }

        //Set user details global state
        dispatch(setUserDetails(userInfo as UserDetails));
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [dispatch, user?.uid, user?.email]);
};

export default useUserDetails;
