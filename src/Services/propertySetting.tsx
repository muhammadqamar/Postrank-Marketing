import { get, post } from "./http";

const propertySettings = async (uid: number, data: object) => {
  try {
    return await post(`property-settings/${uid}`, data);
  } catch (err) {
    return err;
  }
};

const getPropertySettings = async (id: number) => {
  try {
    return await get(`property-settings/${id}`);
  } catch (err) {
    return err;
  }
};

export { propertySettings, getPropertySettings };
