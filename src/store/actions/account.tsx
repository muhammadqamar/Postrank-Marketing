/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccountDetails, createNewUser, updateUserProfile, getUserProfile, deleteUserProfile } from '../../Services/account';
import { store } from '../../store';
import { setUserAccountDetails, setUserProfile, updateUserProfileReducer, deleteUserProfileReducer } from '../reducers/accountDetails';
const getAccountdetailsAction = async (codeResponse: string) => {
  const result: any = await getAccountDetails(codeResponse);
  if (result.status === 200) {
    store.dispatch(setUserAccountDetails(result.data?.data));
  }
  return result;
};
const getUserProfiledetailsIdAction = async (id: number) => {
  const result: any = await getUserProfile(id);
  if (result.status === 200) {
    store.dispatch(setUserProfile(result.data));
  }
  return result;
};

const createNewUserAccoutnAction = async (data: any) => {
  const result: any = await createNewUser(data);
  if (result.status === 201) {
    store.dispatch(setUserProfile(result.data));
  }
  return result;
};

const updateUserProfileAction = async (id: number, data: any) => {
  const result: any = await updateUserProfile(id, data);
  if (result.status === 200) {
    store.dispatch(updateUserProfileReducer(result.data));
  }
  return result;
};

const deleteUserProfileAction = async (id: number) => {
  const result: any = await deleteUserProfile(id);
  if (result.status === 200) {
    store.dispatch(deleteUserProfileReducer(result.data));
  }
  return result;
};

export { getAccountdetailsAction, createNewUserAccoutnAction, updateUserProfileAction, getUserProfiledetailsIdAction, deleteUserProfileAction };
