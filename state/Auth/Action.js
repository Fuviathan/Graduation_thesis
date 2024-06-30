import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  GET_ALL_ADDRESS_FAILURE,
  GET_ALL_ADDRESS_REQUEST,
  GET_ALL_ADDRESS_SUCCESS,
  UPDATE_NEW_ADDRESS_FAILURE,
  UPDATE_NEW_ADDRESS_REQUEST,
  UPDATE_NEW_ADDRESS_SUCCESS,
  CREATE_NEW_ADDRESS_FAILURE,
  CREATE_NEW_ADDRESS_REQUEST,
  CREATE_NEW_ADDRESS_SUCCESS,
  DELETE_NEW_ADDRESS_FAILURE,
  DELETE_NEW_ADDRESS_REQUEST,
  DELETE_NEW_ADDRESS_SUCCESS,
  FORGOT_PASSWORD_WITH_EMAIL_FAILURE,
  FORGOT_PASSWORD_WITH_EMAIL_REQUEST,
  FORGOT_PASSWORD_WITH_EMAIL_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS
} from "./ActionType";
import { API_BASE_URL, api } from "@/config/apiConfig";
import { toast } from "react-toastify";

function redirect() {
  window.location.href = '/login'
}

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}api/auth/signup`, userData);
    const user = response.data;
    dispatch({ type: REGISTER_SUCCESS, payload: user });
    toast.success("Đăng ký thành công!");
    setTimeout(redirect, 1000)
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
    toast.error(error?.response.data);
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}api/auth/login`, userData);
    const user = response.data;
    localStorage.setItem('userToken', JSON.stringify(user.accessToken))
    if (user) {
      dispatch(getUser(user.accessToken))
    }
    toast.success("Đăng nhập thành công!");
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
    console.log(error)
    toast.error("Sai tài khoản hoặc mặt khẩu");
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
  toast.success("Bạn đã đăng xuất!");
  setTimeout(window.location.href = '/', 1000)
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const userInformation = response.data;
    localStorage.setItem('userInformation', JSON.stringify(userInformation))
    dispatch(getUserSuccess(userInformation));
    window.location = "/product";
  } catch (error) {
    dispatch(getUserFailure(error.message));
    console.log(error)
  }
};

export const addNewAddress = (req) => async (dispatch) => {
  dispatch({ type: CREATE_NEW_ADDRESS_REQUEST });
  try {
    const { data } = await api.post(`user/address/create`, req);
    dispatch({ type: CREATE_NEW_ADDRESS_SUCCESS, payload: data });
    toast.success("Thêm địa chỉ thành công");
    // setTimeout(refresh, 1000);
  } catch (e) {
    dispatch({ type: CREATE_NEW_ADDRESS_FAILURE, payload: e });
  }
};

export const getAllAddress = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ADDRESS_REQUEST });
  try {
    const { data } = await api.get(`user/address/get-all`);
    dispatch({ type: GET_ALL_ADDRESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_ADDRESS_FAILURE, payload: error.message });
  }
};

export const deleteAddress = (id) => async (dispatch) => {
  dispatch({ type: DELETE_NEW_ADDRESS_REQUEST })
  try {
    const { data } = await api.delete(`user/address/delete/${id}`);
    dispatch({ type: DELETE_NEW_ADDRESS_SUCCESS, payload: data });
    toast.success('Xóa địa chỉ thành công')
  } catch (error) {
    dispatch({ type: DELETE_NEW_ADDRESS_FAILURE, payload: error.message });
  }
}

export const updateAddress = (req) => async (dispatch) => {
  dispatch({ type: UPDATE_NEW_ADDRESS_REQUEST });
  try {
    const { data } = await api.put(`user/address/update/${req.id}`, req);
    dispatch({ type: UPDATE_NEW_ADDRESS_SUCCESS, payload: data });
    toast.success("Sửa địa chỉ thành công");
    // setTimeout(refresh, 1000);
  } catch (e) {
    dispatch({ type: UPDATE_NEW_ADDRESS_FAILURE, payload: e });
    console.log(e)
  }
};

export const forgotPassword = (req) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_WITH_EMAIL_REQUEST })
  try {
    const { data } = await axios.post(`${API_BASE_URL}api/auth/forgot-password?email=${req}`);
    dispatch({ type: FORGOT_PASSWORD_WITH_EMAIL_SUCCESS, payload: data });
    toast.success("Mật khẩu mới đã được gửi đến email của bạn!");
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_WITH_EMAIL_FAILURE, payload: error });
    toast.error(error?.response?.data.message);
  }
}

export const changePassword = (req) => async (dispatch) => {
  console.log(req)
  dispatch({ type: CHANGE_PASSWORD_REQUEST })
  try {
    const { data } = await api.put(`${API_BASE_URL}api/auth/update-profile`, req);
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
    toast.success("Thay đổi mật khẩu thành công!");
  } catch (error) {
    dispatch({ type: CHANGE_PASSWORD_FAILURE, payload: error });
    console.log(error.response)
    toast.error(error?.response?.data);
  }
}