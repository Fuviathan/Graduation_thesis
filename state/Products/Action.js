import axios from "axios";
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
  GET_CATEGORY_COUNT_REQUEST,
  GET_CATEGORY_COUNT_SUCCESS,
} from "./ActionType";
import { API_BASE_URL } from "@/config/apiConfig";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}admin/product/get-all?size=${100}`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const getProductByFilter = (req) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_BY_FILTER_REQUEST });
  console.log(`${API_BASE_URL}admin/product/get-all?${req?.brand ? `brandName=${req?.brand}&` : ""
}${req?.category ? `categoryName=${req?.category}&` : ""
}${req?.minPrice ? `minPrice=${req?.minPrice}&` : ""
}${req?.maxPrice ? `maxPrice=${req?.maxPrice}&` : ""}`)
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}admin/product/get-all?${req?.brand ? `brandName=${req?.brand}&` : ""
      }${req?.category ? `categoryName=${req?.category}&` : ""
      }${req?.minPrice ? `minPrice=${req?.minPrice}&` : ""
      }${req?.maxPrice ? `maxPrice=${req?.maxPrice}&` : ""}${`size=${100}`}`,
    );
    dispatch({ type: GET_PRODUCTS_BY_FILTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_BY_FILTER_FAILURE, payload: error.message });
  }
};

export const getProductByColor = () => async (dispatch) => {
  dispatch({ type: GET_ALL_COLOR_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}product/color`);
    dispatch({ type: GET_ALL_COLOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_COLOR_FAILURE, payload: error.message });
  }
};

export const getAllBrand = () => async (dispatch) => {
  dispatch({ type: GET_ALL_BRAND_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}admin/brands/get-all?size=${100}`);
    dispatch({ type: GET_ALL_BRAND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_BRAND_FAILURE, payload: error.message });
  }
};

export const getAllCategory = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORY_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}admin/categories/get-all?size=${100}`);
    dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORY_FAILURE, payload: error.message });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}product/${id}`);
    console.log(data);
    dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const getCategoryCount = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_COUNT_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}prodcategory/count`);
    dispatch({ type: GET_CATEGORY_COUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_COUNT_FAILURE, payload: error.message });
  }
};
