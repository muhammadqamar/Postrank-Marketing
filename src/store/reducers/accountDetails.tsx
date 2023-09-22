/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAccountDetails: null,
  userProfile: null,
  activePropertySettings: null,
};

export const account = createSlice({
  name: 'acountDetails',
  initialState,
  reducers: {
    setUserAccountDetails: (state, action) => {
      state.userAccountDetails = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setActivePropertySettings: (state, action) => {
      state.activePropertySettings = action.payload;
    },
    updateUserProfileReducer: (state, action) => {
      state.userProfile = action.payload;
    },

    deleteUserProfileReducer: (state, action) => {
      state.userProfile === null;
    },
  },
});

export const { setUserAccountDetails, setUserProfile, updateUserProfileReducer, deleteUserProfileReducer, setActivePropertySettings } = account.actions;

export default account.reducer;
