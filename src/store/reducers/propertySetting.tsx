/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  property: null,
};

export const propertys = createSlice({
  name: "propertys",
  initialState,
  reducers: {
    setPropertySetting: (state, action) => {
      state.property = action.payload;
    },
  },
});

export const { setPropertySetting } = propertys.actions;

export default propertys.reducer;
