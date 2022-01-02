import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { userRequest, publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess())
  } catch (err) {
    dispatch(logoutFailure())
  }
};

export const newRegister = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure())
  }
};