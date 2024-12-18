import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  city?: string | null;
  country?: string | null;
}

const initialState: UserState = {
  userId: '',
  email: '',
  firstName: '',
  lastName: '',
  city: null,
  country: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    resetUserDetails: () => {
      return initialState;
    },
  },
});

export const { setUserDetails, resetUserDetails } = userSlice.actions;
export default userSlice.reducer;
