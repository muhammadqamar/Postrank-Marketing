/* eslint-disable  */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFolder: null,
  activeFolder: null,
  deleteFolder: null,
};

export const folders = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setAllfolders: (state, action) => {
      state.allFolder = action.payload;
    },
    setActiveFolders: (state, action) => {
      state.activeFolder = action.payload;
    },
    setDeleteFolders: (state: any, action) => {
      state.deleteFolder = state.deleteFolder.filter((r: any) => {
        return r.id !== action.payload;
      });
    },
  },
});

export const { setAllfolders, setActiveFolders, setDeleteFolders } =
  folders.actions;

export default folders.reducer;
