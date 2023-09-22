/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createNewFolder,
  getFolders,
  deleteFolder,
} from "../../Services/folders";
import { store } from "../../store";
import { setAllfolders } from "../reducers/folders";

const getFoldersAction = async (pid: number) => {
  const result: any = await getFolders(pid);
  if (result.status === 200) {
    store.dispatch(setAllfolders(result.data));
  }
  return result;
};

const createNewFolderAction = async (pid: number, data: object) => {
  const result: any = await createNewFolder(pid, data);
  if (result.status === 201) {
    // store.dispatch(setprojectDetails(result.data));
  }
  return result;
};

const deleteFolderAction = async (id: number) => {
  const result: any = await deleteFolder(id);
  if (result.status === 201) {
    // store.dispatch(setprojectDetails(result.data));
  }
  return result;
};

export { getFoldersAction, createNewFolderAction, deleteFolderAction };
