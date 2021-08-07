import { AUTH } from "../constants/data.js";
import * as api from "../service/api.js";

export const signIn = (formData, router) => async (dispatch) => {
  try {
    console.log("i tried to signin");
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    if (error.response.status === 404) {
      alert(error.response.data.message);
    }
    console.log(error.response);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    console.log("i tried to signup");
    const { data } = await api.signUp(formData);
    console.log("i tried to signup");
    console.log(data);
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    if (error.response.status === 404) {
      alert(error.response.data.message);
    }
    console.log(error);
  }
};
