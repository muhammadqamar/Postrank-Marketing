import { get, post, remove } from "./http";

const getFolders = async (pid: number) => {
  try {
    return await get(`projects/${pid}/folders`);
  } catch (err) {
    return err;
  }
};

const createNewFolder = async (pid: number, data: object) => {
  try {
    return await post(`projects/${pid}/create`, data);
  } catch (err) {
    return err;
  }
};

const deleteFolder = async (id: number) => {
  try {
    return await remove(`folders${id}`);
  } catch (err) {
    return err;
  }
};

export { getFolders, createNewFolder, deleteFolder };
