import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/stateSlices/authSlice';
import userReducer from '../features/stateSlices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
