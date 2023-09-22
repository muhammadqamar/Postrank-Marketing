/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPost: null,
  postDetail: null,
  selectedPost: null,
  secondPost: null,
};

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.allPost = action.payload;
    },
    setPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setSecondaPostdetail: (state, action) => {
      state.secondPost = action.payload;
    },
  },
});

export const { setAllPosts, setPostDetail, setSelectedPost, setSecondaPostdetail } = posts.actions;

export default posts.reducer;
