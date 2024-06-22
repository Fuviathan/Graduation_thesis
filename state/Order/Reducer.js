import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_WITH_CASH,
  CREATE_ORDER_WITH_CASH_FAILURE,
  CREATE_ORDER_WITH_CASH_SUCCESS,
  CREATE_ORDER_WITH_COD,
  CREATE_ORDER_WITH_COD_FAILURE,
  CREATE_ORDER_WITH_COD_SUCCESS,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS, 
  CREATE_REVIEW_REQUEST, 
  CREATE_REVIEW_FAILURE, 
  CREATE_REVIEW_SUCCESS
} from "./ActionType";

const initialState = {
  order: null,
  orderCod: null,
  orderCash: null,
  orders: [],
  orderData: null,
  loading: false,
  error: null,
  log: null
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case CREATE_ORDER_WITH_COD:
    case CREATE_ORDER_WITH_CASH:
    case GET_ALL_ORDERS_REQUEST:
    case GET_ORDER_BY_ID_REQUEST:
    case DELETE_ORDER_REQUEST:
    case CREATE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_ORDER_SUCCESS:
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        log: action.payload,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload,
      };
    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orderData: action.payload,
      };
    case CREATE_ORDER_WITH_COD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orderCod: action.payload,
      };
    case CREATE_ORDER_WITH_CASH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orderCash: action.payload,
      };
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload,
      };
    case DELETE_ORDER_FAILURE:
    case CREATE_REVIEW_FAILURE:
    case CREATE_ORDER_FAILURE:
    case CREATE_ORDER_WITH_COD_FAILURE:
    case CREATE_ORDER_WITH_CASH_FAILURE:
    case GET_ALL_ORDERS_FAILURE:
    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
