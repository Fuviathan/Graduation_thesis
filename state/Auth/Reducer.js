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

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  address: [],
  log: null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_WITH_EMAIL_REQUEST:
    case GET_ALL_ADDRESS_REQUEST:
    case CHANGE_PASSWORD_REQUEST:
    case CREATE_NEW_ADDRESS_REQUEST:
    case DELETE_NEW_ADDRESS_REQUEST:
    case UPDATE_NEW_ADDRESS_REQUEST:
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };
    case GET_ALL_ADDRESS_SUCCESS:
      return { ...state, isLoading: false, error: null, address: action.payload };
    case UPDATE_NEW_ADDRESS_SUCCESS:
    case DELETE_NEW_ADDRESS_SUCCESS:
    case CREATE_NEW_ADDRESS_SUCCESS:
    case CHANGE_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_WITH_EMAIL_SUCCESS:
      return { ...state, isLoading: false, error: null, log: action.payload };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_ALL_ADDRESS_FAILURE:
    case FORGOT_PASSWORD_WITH_EMAIL_FAILURE:
    case CREATE_NEW_ADDRESS_FAILURE:
    case UPDATE_NEW_ADDRESS_FAILURE:
    case DELETE_NEW_ADDRESS_FAILURE:
    case CHANGE_PASSWORD_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case LOGOUT:
      return { ...initialState, jwt: "" };
    default:
      return state;
  }
};
