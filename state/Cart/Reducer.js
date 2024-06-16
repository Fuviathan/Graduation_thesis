import {
  ADD_PRODUCT_TO_CART_FAILURE,
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  // CREATE_ORDER_FAILURE,
  // CREATE_ORDER_REQUEST,
  // CREATE_ORDER_SUCCESS,
  DELETE_PRODUCT_FROM_CART_FAILURE,
  DELETE_PRODUCT_FROM_CART_REQUEST,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  // GET_ALL_ORDERS_REQUEST,
  // GET_ALL_ORDERS_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  UPDATE_PRODUCT_IN_CART_FAILURE,
  UPDATE_PRODUCT_IN_CART_REQUEST,
  UPDATE_PRODUCT_IN_CART_SUCCESS,
  CLEAR_PRODUCT_ITEM_CART_REQUEST
} from "./ActionType";

const initialState = {
  cart: null,
  cartItem: null,
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_PRODUCT_ITEM_CART_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
        cartItem: action.payload,
      };
    // case GET_ALL_ORDERS_REQUEST:
    case GET_CART_REQUEST:
    case DELETE_PRODUCT_FROM_CART_REQUEST:
    case UPDATE_PRODUCT_IN_CART_REQUEST:
    // case CREATE_ORDER_REQUEST:
    case ADD_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    // case CREATE_ORDER_SUCCESS:
    case ADD_PRODUCT_TO_CART_SUCCESS:
    case UPDATE_PRODUCT_IN_CART_SUCCESS:
    case DELETE_PRODUCT_FROM_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        cartItem: action.payload,
      };
    }
    // case GET_ALL_ORDERS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: null,
    //     orders: action.payload,
    //   };
    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cart: action.payload,
      };
    // case CREATE_ORDER_FAILURE:
    case GET_CART_FAILURE:
    case DELETE_PRODUCT_FROM_CART_FAILURE:
    case UPDATE_PRODUCT_IN_CART_FAILURE:
    case ADD_PRODUCT_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
