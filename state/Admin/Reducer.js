import {
  GET_ALL_BRAND_FAILURE,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
} from "../Products/ActionType";
import {
  ADD_BRAND_FAILURE,
  ADD_BRAND_REQUEST,
  ADD_BRAND_SUCCESS,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  DELETE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  CHANGE_ROLE_REQUEST,
  CHANGE_ROLE_SUCCESS,
  CHANGE_ROLE_FAILURE,
  SET_IMAGE_NULL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAILURE,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAILURE,
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case UPLOAD_IMAGE_REQUEST:
    case GET_ALL_BRAND_REQUEST:
    case DELETE_IMAGE_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case CHANGE_ROLE_REQUEST:
    case DELETE_BRAND_REQUEST:
    case ADD_BRAND_REQUEST:
    case UPDATE_BRAND_REQUEST:
    case GET_ALL_USER_REQUEST:
    case GET_ALL_ORDERS_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        brands: action.payload,
      };
    case ADD_BRAND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        brand: action.payload,
      };
    case DELETE_IMAGE_SUCCESS:
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        image: action.payload,
      };
    case UPDATE_CATEGORY_SUCCESS:
    case UPDATE_ORDER_STATUS_SUCCESS:
    case DELETE_BRAND_SUCCESS:
    case UPDATE_BRAND_SUCCESS:
    case CHANGE_ROLE_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        orders: action.payload,
      };
    case SET_IMAGE_NULL:
      return {
        ...state,
        isLoading: false,
        error: null,
        image: action.payload,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        allUser: action.payload,
      };
    case UPDATE_CATEGORY_FAILURE:
    case GET_ALL_ORDERS_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case UPDATE_BRAND_FAILURE:
    case CHANGE_ROLE_FAILURE:
    case GET_ALL_BRAND_FAILURE:
    case UPLOAD_IMAGE_FAILURE:
    case DELETE_IMAGE_FAILURE:
    case DELETE_BRAND_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case UPDATE_ORDER_STATUS_FAILURE:
    case ADD_BRAND_FAILURE:
    case GET_ALL_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    // case LOGOUT:
    //   return { ...initialState, jwt: "" };

    default:
      return state;
  }
};
