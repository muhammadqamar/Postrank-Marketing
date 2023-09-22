import { configureStore } from "@reduxjs/toolkit";
import accountDetails from "./reducers/accountDetails";
import posts from "./reducers/allPosts";
import projects from "./reducers/projects";
import folders from "./reducers/folders";
import propertys from "./reducers/propertySetting";

export const store = configureStore({
  reducer: {
    accountDetails,
    projects,
    posts,
    folders,
    propertys,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
