import axios from "axios";
import { toast } from "react-toastify";
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
  GET_FAVORITE_LIST_REQUEST,
  GET_FAVORITE_LIST_FAILURE,
  GET_FAVORITE_LIST_SUCCESS,
  ADD_PRODUCT_TO_FAVORITE_LIST_FAILURE,
  ADD_PRODUCT_TO_FAVORITE_LIST_REQUEST,
  ADD_PRODUCT_TO_FAVORITE_LIST_SUCCESS,
  DELETE_PRODUCT_FROM_FAVORITE_LIST_FAILURE,
  DELETE_PRODUCT_FROM_FAVORITE_LIST_REQUEST,
  DELETE_PRODUCT_FROM_FAVORITE_LIST_SUCCESS,
} from "./ActionType";
import { API_BASE_URL, api } from "@/config/apiConfig";

export const getProductByCategory = (category) => async (dispatch) => {

  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/product/get-all?categoryName=${category}&size=${10}`
    );
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}


export const getProductByBrand = (brand) => async (dispatch) => {

  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/product/get-all?${brand!==null ? `brandName=${brand}`:" "}&size=${100}`
    );
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}

  

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/product/get-all?size=${100}`
    );
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const getProductByFilter = (req) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_BY_FILTER_REQUEST });
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/product/get-all?${
        req?.brand ? `brandName=${req?.brand}&` : ""
      }${req?.category ? `categoryName=${req?.category}&` : ""}${
        req?.minPrice ? `minPrice=${req?.minPrice}&` : ""
      }${req?.maxPrice ? `maxPrice=${req?.maxPrice}&` : ""}${`size=${100}`}`
    );
    dispatch({ type: GET_PRODUCTS_BY_FILTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_BY_FILTER_FAILURE, payload: error.message });
  }
};

export const getAllBrand = () => async (dispatch) => {
  dispatch({ type: GET_ALL_BRAND_REQUEST });

  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/brands/get-all?size=${100}`
    );
    dispatch({ type: GET_ALL_BRAND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_BRAND_FAILURE, payload: error.message });
  }
};

export const getAllCategory = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORY_REQUEST });

  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/categories/get-all?size=${100}`
    );
    dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORY_FAILURE, payload: error.message });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}product/${id}`);
    dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const getFavoriteList = () => async (dispatch) => {
  dispatch({ type: GET_FAVORITE_LIST_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}user/favorites/get-all`);
    dispatch({ type: GET_FAVORITE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_FAVORITE_LIST_FAILURE, payload: error.message });
  }
};

export const addProductToFavoriteList = (id) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_FAVORITE_LIST_REQUEST });
  try {
    const { data } = await api.get(
      `${API_BASE_URL}user/favorites/add?productId=${id}`
    );
    dispatch({ type: ADD_PRODUCT_TO_FAVORITE_LIST_SUCCESS, payload: data });
    toast.success("Thêm thành công");
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_TO_FAVORITE_LIST_FAILURE,
      payload: error.message,
    });
    toast.error(error.message);
  }
};

export const deleteProductFromFavoriteList = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_FROM_FAVORITE_LIST_REQUEST });
  try {
    const { data } = await api.get(
      `${API_BASE_URL}user/favorites/remove?productId=${id}`
    );
    dispatch({
      type: DELETE_PRODUCT_FROM_FAVORITE_LIST_SUCCESS,
      payload: data,
    });
    toast.success("Xóa thành công");
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FROM_FAVORITE_LIST_FAILURE,
      payload: error.message,
    });
  }
};
