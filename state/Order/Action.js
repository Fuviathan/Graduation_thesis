import axios from "axios";
import { api, API_BASE_URL } from "@/config/apiConfig";
import { apiFormData } from "@/config/apiConfig";
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
  GETT_ORDER_BY_ID_FAILURE,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS, 
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS
} from "./ActionType";
import { toast } from "react-toastify";

export const createOrder = (req) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  console.log(req);
  try {
    const { data } = await api.put(
      `/user/orders/create${
        req.address.id ? `?addressId=${req.address.id}` : ""
      }${req?.coupon?.id ? `?couponId=${req.coupon.id}` : ""}`,
      req?.address
    );
    console.log(data);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    toast.success("Tạo đơn hàng thành công!");
    return data;
    // setTimeout(redirect, 1000)
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    toast.error("Tạo đơn hàng fail!");
  }
};

export const createOrderCod = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_WITH_COD });
  try {
    const { data } = await api.put(`/user/orders/place/${orderId}`);
    dispatch({ type: CREATE_ORDER_WITH_COD_SUCCESS, payload: data });
    window.location.href = `/orderHistory/${orderId}`;
  } catch (error) {
    dispatch({ type: CREATE_ORDER_WITH_COD_FAILURE, payload: error.message });
  }
};

export const createOrderCash = (order) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_WITH_CASH });
  try {
    const { data } = await api.get(
      `/vnpay/payment/url?amount=${order.totalDiscountedPrice}&orderId=${order.id}&userId=${order.user.id}`
    );
    dispatch({ type: CREATE_ORDER_WITH_CASH_SUCCESS, payload: data });
    toast.success("Thanh toán thành công !");
    window.location.href = `${data}`;
    // setTimeout(redirect, 1000)
  } catch (error) {
    dispatch({ type: CREATE_ORDER_WITH_CASH_FAILURE, payload: error.message });
  }
};

export const getAllOrderOfUser = (filters) => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDERS_REQUEST });

  try {
    const { data } = await api.get(`/user/orders/history?filter=${filters}`);
    dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDERS_FAILURE, payload: error.message });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });

  try {
    const { data } = await api.get(`/user/orders/${orderId}`);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};

export const DeleteOrderByID = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });

  try {
    const { data } = await axios.put(`${API_BASE_URL}user/orders/cancel/${orderId}`);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    toast.success("Huỷ đơn hàng thành công")
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    console.log(error)
    toast.error(error.response.data)
  }
};

export const CreateReview = (req) => async (dispatch) => {
  dispatch({ type: CREATE_REVIEW_REQUEST });
  console.log(req)
  try {
    const { data } = await api.post(`user/reviews-ratings/create`, req);
    dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
    toast.success("Đánh giá thành công")
  } catch (error) {
    dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
    console.log(error)
    toast.error(error.response.data)
  }
};