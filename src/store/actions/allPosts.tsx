/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable */

import { getAllPosts, getPostsDetail } from '../../Services/allPosts';
import { store } from '../../store';
import { setAllPosts, setPostDetail } from '../reducers/allPosts';

const getAllPostsAction = async (data: any, path: string, id: number, payload: object) => {
  try {
    const result: any = await getAllPosts(data, path, id, payload);
    if (result.status === 201) {
      store.dispatch(setAllPosts(result.data));
    }
    return result;
  } catch (err) {
    return err;
  }
};

const getPostsDetailAction = async (data: any, path: string | undefined, propertyid: string, payload: object) => {
  try {
    const result: any = await getPostsDetail(data, path, propertyid, payload);
    if (result.status === 201) {
      store.dispatch(setPostDetail(result.data));
    }
    return result;
  } catch (err) {
    return err;
  }
};

export { getAllPostsAction, getPostsDetailAction };
