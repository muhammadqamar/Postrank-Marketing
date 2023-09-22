/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projectDetail: null,
  userProject: null,
  activeProject: null,
};

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setprojectDetails: (state, action) => {
      state.projectDetail = action.payload;
    },
    setuserProjects: (state, action) => {
      state.userProject = action.payload;
    },
    setActiveProjectDetail: (state, action) => {
      state.activeProject = action.payload;
    },
  },
});

export const { setuserProjects, setprojectDetails, setActiveProjectDetail } = projects.actions;

export default projects.reducer;
