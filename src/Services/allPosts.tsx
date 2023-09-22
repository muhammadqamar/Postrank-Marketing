import { post } from './http';

const getAllPosts = async (token: string, path: string, id: number, payload: object) => {
  try {
    return await post(`analytics/getallPageViews?accessToken=${token}&path=${path}&propertyId=${id}`, payload);
  } catch (err) {
    return err;
  }
};

const getPostsDetail = async (token: string, path: string | undefined, propertyid: string, payload: object) => {
  try {
    return await post(`analytics/getPageTrends?accessToken=${token}&pagePath=${path}&propertyId=${propertyid}`, payload);
  } catch (err) {
    return err;
  }
};

export { getAllPosts, getPostsDetail };
