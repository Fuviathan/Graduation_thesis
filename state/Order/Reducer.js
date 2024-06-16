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
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  
} from "./ActionType";

const initialState = {
  order: null,
  orderCod: null,
  orderCash: null,
  orders: [],
  loading: false,
  error: null,
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type){
    case CREATE_ORDER_REQUEST:
    case CREATE_ORDER_WITH_COD:
    case CREATE_ORDER_WITH_CASH:
    case GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload,
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
    case CREATE_ORDER_FAILURE:
    case CREATE_ORDER_WITH_COD_FAILURE:
    case CREATE_ORDER_WITH_CASH_FAILURE:
    case GET_ALL_ORDERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


