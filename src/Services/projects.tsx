/* eslint-disable @typescript-eslint/no-explicit-any */
import { post, get, remove } from './http';

const getUserProjects = async (uid: number) => {
  try {
    return await get(`/user/${uid}/projects`);
  } catch (err) {
    return err;
  }
};

const createNewProject = async (uid: number, data: any) => {
  try {
    return await post(`user/${uid}/projects`, data, {
      headers: { accept: '*/*', 'Content-Type': 'multipart/form-data' },
    });
  } catch (err) {
    return err;
  }
};

const uploadProjectImage = async (data: any) => {
  try {
    return await post(`uploads/image`, data);
  } catch (err) {
    return err;
  }
};

const deleteProject = async (id: number) => {
  try {
    return await remove(`projects/${id}`);
  } catch (err) {
    return err;
  }
};

export { getUserProjects, createNewProject, uploadProjectImage, deleteProject };
