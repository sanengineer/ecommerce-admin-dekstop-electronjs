import { setAuthToken } from "../../utils";
import * as actionTypes from "./actionTypes";
import { UserServices } from "../../services";

export const loginUser = (user_data) => (dispatch) => {
  UserServices.authLogin(user_data)
    .then((res) => {
      //debug
      console.log(res);
      localStorage.setItem("authToken", res.data.tokenString);
      localStorage.setItem("user_id", res.data.userId);

      setAuthToken(res.data.tokenString);

      dispatch(setCurrentUser(res.data.tokenString));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user_id");
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (decoded) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};
