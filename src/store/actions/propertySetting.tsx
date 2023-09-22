/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  propertySettings,
  getPropertySettings,
} from "../../Services/propertySetting";
import { store } from "../../store";
import { setPropertySetting } from "../reducers/propertySetting";

const getPropertySettingsAction = async (pid: number, data: object) => {
  const result: any = await propertySettings(pid, data);
  if (result.status === 200) {
    // result.status
  }
  return result;
};

const getPropertySettingsIdsAction = async (id: number) => {
  const result: any = await getPropertySettings(id);
  if (result.status === 200) {
    store.dispatch(setPropertySetting(result.data));
  }
  return result;
};

export { getPropertySettingsAction, getPropertySettingsIdsAction };
