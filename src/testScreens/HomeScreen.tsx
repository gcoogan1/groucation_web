import { useState, useEffect } from 'react';
import {
  getUserInfo,
  logout,
  updateUser,
} from '../services/firebase/firebaseServices';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { setUser } from '../features/stateSlices/authSlice';
import {
  resetUserDetails,
  setUserDetails,
} from '../features/stateSlices/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userId, email, firstName, lastName, ...state } = useSelector(
    (state: RootState) => state.user,
  );
  const [city, setCity] = useState(state.city || '');
  const [country, setCountry] = useState(state.country || '');

  const handleLogout = () => {
    // Reset global state
    dispatch(setUser(null));
    dispatch(resetUserDetails());
    logout();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(userId, firstName, lastName, email, city, country);
    } catch (error: any) {
      console.log('error updating profile:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <h1>Welcome</h1>
        <h1>
          {firstName} {lastName}!
        </h1>
        <p>Please add a city and country to your profile</p>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '6px',
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="city"
            placeholder={state.city ? state.city : 'City'}
            value={city}
            style={{
              height: '30px',
            }}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="country"
            placeholder={state?.country ? state.country : 'Country'}
            value={country}
            style={{
              height: '30px',
            }}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <button
            style={{
              width: '200px',
              borderRadius: '15px',
              padding: '10px',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Add
          </button>
        </form>
        <button
          style={{
            width: '200px',
            borderRadius: '15px',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
