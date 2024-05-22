import {
  GET_ALL_BRAND_FAILURE,
  GET_ALL_BRAND_REQUEST,
  GET_ALL_BRAND_SUCCESS,
  GET_ALL_CATEGORY_FAILURE,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_COLOR_FAILURE,
  GET_ALL_COLOR_REQUEST,
  GET_ALL_COLOR_SUCCESS,
  GET_PRODUCTS_BY_FILTER_FAILURE,
  GET_PRODUCTS_BY_FILTER_REQUEST,
  GET_PRODUCTS_BY_FILTER_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS_FAILURE,
  GET_SINGLE_PRODUCTS_REQUEST,
  GET_SINGLE_PRODUCTS_SUCCESS,
  GET_CATEGORY_COUNT_FAILURE,
  GET_CATEGORY_COUNT_SUCCESS,
  GET_CATEGORY_COUNT_REQUEST
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  // color: [],
  brand: [],
  loading: false,
  error: null,
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_COLOR_REQUEST:
    case GET_PRODUCTS_REQUEST:
    case GET_PRODUCTS_BY_FILTER_REQUEST:
    case GET_SINGLE_PRODUCTS_REQUEST:
    case GET_ALL_BRAND_REQUEST:
    case GET_ALL_CATEGORY_REQUEST:
    case GET_CATEGORY_COUNT_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_BY_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
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
    case GET_CATEGORY_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        categoryCount: action.payload,
      };
    // case GET_ALL_COLOR_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //     color: action.payload,
    //   };
    // case GET_ALL_COLOR_FAILURE:
    case GET_PRODUCTS_FAILURE:
    case GET_PRODUCTS_BY_FILTER_FAILURE:
    case GET_SINGLE_PRODUCTS_FAILURE:
    case GET_ALL_CATEGORY_FAILURE:
    case GET_CATEGORY_COUNT_FAILURE:
    case GET_ALL_BRAND_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
