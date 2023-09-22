/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserProjects, createNewProject, uploadProjectImage, deleteProject } from '../../Services/projects';
import { store } from '../../store';
import { setuserProjects, setprojectDetails } from '../reducers/projects';

const getUserProjectAction = async (id: number) => {
  const result: any = await getUserProjects(id);
  if (result.status === 200) {
    store.dispatch(setuserProjects(result.data));
  }
  return result;
};

const createNewProjectAction = async (id: number, data: any) => {
  const result: any = await createNewProject(id, data);
  if (result.status === 201) {
    store.dispatch(setprojectDetails(result.data));
  }
  return result;
};
const uploadProjectImageAction = async (data: any) => {
  const result: any = await uploadProjectImage(data);
  if (result.status === 201) {
    // store.dispatch(setprojectDetails(result.data));
  }
  return result;
};

const deleteProjectAction = async (id: number) => {
  const result: any = await deleteProject(id);
  if (result.status === 201) {
    // store.dispatch(setprojectDetails(result.data));
  }
  return result;
};

export { getUserProjectAction, createNewProjectAction, uploadProjectImageAction, deleteProjectAction };
