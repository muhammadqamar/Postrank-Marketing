import { get, post, put, remove } from "./http";
// import { errorHandling } from './error';

const getAccountDetails = async (token: string) => {
  try {
    return await get(`analytics/accountSummaries?accessToken=${token}`);
  } catch (err) {
    return err;
  }
};
const getUserProfile = async (id: number) => {
  try {
    return await get(`analytics/users/${id}`);
  } catch (err) {
    return err;
  }
};
const createNewUser = async (data: object) => {
  try {
    return await post(`analytics/users`, data);
  } catch (err) {
    return err;
  }
};
const updateUserProfile = async (id: number, data: object) => {
  try {
    return await put(`analytics/users/${id}`, data);
  } catch (err) {
    return err;
  }
};

const deleteUserProfile = async (id: number) => {
  try {
    return await remove(`analytics/users/${id}`);
  } catch (err) {
    return err;
  }
};

export {
  getAccountDetails,
  createNewUser,
  updateUserProfile,
  getUserProfile,
  deleteUserProfile,
};
