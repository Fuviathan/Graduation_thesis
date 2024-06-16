import React, { useState } from "react";
import { createOrder } from "@/state/Order/Action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "@/config/apiConfig";
import { createOrderCash, createOrderCod } from "@/state/Order/Action";

const PriceSummary = (props) => {
  const [coupon, setCoupon] = useState();
  const [code, setCode] = useState();
  const [method, setMethod] = useState("COD");
  const dispatch = useDispatch();

  const getCoupon = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}user/coupons/${code}`
      );
      console.log(response);
      if(response) {setCoupon(response.data);toast.success("Mã giảm giá hợp lệ")}
      else toast.error("Mã giảm giá không hợp lệ");
    } catch (error) {
      setCoupon(null);
      toast.error("Mã giảm giá không hợp lệ");
    }
   
  }

  const handleCheckCoupon = () => {
    getCoupon();
  }
  
  const order = useSelector((store) => store.order);
 console.log(order?.order)
  const handleCreateOrder = async() => {
    const data = {
      coupon: coupon,
      address: props.address,
    };
    if(method === "COD") {
      const dataOrder = await dispatch(createOrder(data));
      dispatch(createOrderCod(dataOrder?.id));
       
    }
    else {
      const dataOrder = await dispatch(createOrder(data));
      dispatch(createOrderCash(dataOrder));
    }
  }

  


  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem("user")) || null;
  }
  return (
    <div className="">
      <div className="items-center px-8 py-4 border rounded-lg shadow ">
        <div className="mb-4 text-3xl font-bold text-center text-gray-700">
          Giá cả chi tiết
        </div>
        <hr></hr>
        <div className="px-4 text-xl font-medium text-black">
          <div className="flex justify-between pt-3">
            <div>Tổng tiền thanh toán</div>
            <div>{props?.cart?.totalPrice?.toFixed(2)}$</div>
          </div>
          <div className="flex justify-between pt-3">
            <div>Giảm giá</div>
            <div className="text-green-600">
              {props.cart.totalPrice?.toFixed(2) -
                props.cart?.totalDiscountedPrice?.toFixed(2)}
              $
            </div>
          </div>
          <div className="flex justify-between pt-3 mb-4">
            <div>Phí vận chuyển</div>
            <div className="text-green-600">Miễn phí</div>
          </div>
          <hr></hr>
          <span className="text-sm">Nhập mã giảm giá</span>
          <div className="flex justify-between gap-2  ">
            <input
              onChange={(e) => {
                setCode(e.target.value);
                console.log(e.target.value);
              }}
              className="border focus:outline-gray-400 px-2 rounded-2xl w-[30vh]"
            ></input>
            <button
              onClick={handleCheckCoupon}
              className="text-sm text-white rounded-md border px-3 bg-[#baaf9d] shadow hover:bg-[#a7967c]"
            >
              Áp dụng
            </button>
          </div>
          {coupon && (
            <div className="flex justify-between pt-3 text-md">
              <span>Số tiền giảm: </span>
              <div className="">- {coupon?.discountValue}$</div>
            </div>
          )}
          <div className="flex justify-between pt-3">
            <div>Tổng số tiền</div>
            <div className="text-green-600">
              {props.cart?.totalDiscountedPrice?.toFixed(2) <
              coupon?.discountValue
                ? 0
                : coupon?.discountValue
                ? props.cart?.totalDiscountedPrice?.toFixed(2) -
                  coupon?.discountValue
                : props.cart?.totalDiscountedPrice?.toFixed(2)}
              $
            </div>
          </div>
        </div>
        <hr></hr>

        {/* <div className="mb-4 text-3xl font-bold text-center text-gray-700">
          Phương thức thanh toán
        </div> */}
        <div className="flex justify-between items-center font-semibold  pt-3 px-4" >
          <span>Phương thức thanh toán</span>
          <select className="border focus:outline-gray-400 px-2 rounded-2xl w-[30vh]" onChange={(event)=> setMethod(event.target.value)}>
            <option value="COD">Thanh toán khi nhận hàng</option>
            <option value="CASH">Thanh toán bằng VnPay</option>
          </select>
        </div>
        <hr></hr>
        <button
          className="w-full mt-4 py-2 rounded-lg bg-[#baaf9d] shadow hover:bg-[#a7967c] text-xl font-semibold text-white"
          onClick={handleCreateOrder}
        >
          Tiến hành thanh toán
        </button>
      </div>
    </div>
  );
};

export default PriceSummary;
