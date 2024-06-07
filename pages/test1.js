import { staticPageGenerationTimeout } from "@/next.config";
import {
  GET_ALL_BRAND_FAILURE,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
  GET_ALL_CATEGORY_FAILURE,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_FILTER_FAILURE,
  GET_PRODUCTS_BY_FILTER_REQUEST,
  GET_PRODUCTS_BY_FILTER_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCTS_REQUEST,
  GET_SINGLE_PRODUCTS_SUCCESS,
  // GET_CATEGORY_COUNT_FAILURE,
  // GET_CATEGORY_COUNT_SUCCESS,
  // GET_CATEGORY_COUNT_REQUEST,
  GET_FAVORITE_LIST_FAILURE,
  GET_FAVORITE_LIST_REQUEST,
  GET_FAVORITE_LIST_SUCCESS,
  ADD_PRODUCT_TO_FAVORITE_LIST_FAILURE,
  ADD_PRODUCT_TO_FAVORITE_LIST_REQUEST,
  ADD_PRODUCT_TO_FAVORITE_LIST_SUCCESS,
  DELETE_PRODUCT_FROM_FAVORITE_LIST_FAILURE,
  DELETE_PRODUCT_FROM_FAVORITE_LIST_REQUEST,
  DELETE_PRODUCT_FROM_FAVORITE_LIST_SUCCESS
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  brand: [],
  loading: false,
  error: null,
  favoriteList: [],
  log: null,
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_LIST_REQUEST:
    case DELETE_PRODUCT_FROM_FAVORITE_LIST_REQUEST:
    case ADD_PRODUCT_TO_FAVORITE_LIST_REQUEST:
    case GET_PRODUCTS_REQUEST:
    case GET_PRODUCTS_BY_FILTER_REQUEST:
    case GET_SINGLE_PRODUCTS_REQUEST:
    case GET_ALL_BRAND_REQUEST:
    case GET_ALL_CATEGORY_REQUEST:
    // case GET_CATEGORY_COUNT_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_BY_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case GET_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        favoriteList: action.payload,
      }
    case GET_SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload,
      };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        brand: action.payload,
      };
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        category: action.payload,
      };
    case ADD_PRODUCT_TO_FAVORITE_LIST_SUCCESS:
    case DELETE_PRODUCT_FROM_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        log: action.payload,
      }
    // case GET_CATEGORY_COUNT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //     categoryCount: action.payload,
    //   };
    case GET_PRODUCTS_FAILURE:
    case GET_PRODUCTS_BY_FILTER_FAILURE:
    case GET_SINGLE_PRODUCTS_FAILURE:
    case GET_ALL_CATEGORY_FAILURE:
    // case GET_CATEGORY_COUNT_FAILURE:
    case GET_ALL_BRAND_FAILURE:
    case GET_FAVORITE_LIST_FAILURE:
    case ADD_PRODUCT_TO_FAVORITE_LIST_FAILURE:
    case DELETE_PRODUCT_FROM_FAVORITE_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
