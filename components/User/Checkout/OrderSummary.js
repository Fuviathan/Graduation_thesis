import React, { useEffect } from "react";
// import AddressCard from "../AddressCard/AddressCard";
import Cart from "../Cart/Cart";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import PriceDetail from "../Cart/PriceDetail";
import AddressCard from "./AddressCard";
import PriceSummary from "./PriceSummary";
// import { getOrderById } from "../../../State/Order/Action";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";

const OrderSummary = ({address,cart}) => {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  // const { order } = useSelector((store) => store);
  console.log(cart)
  const order={}
  useEffect(() => {
    // dispatch(getOrderById(orderId));
  }, [orderId]);
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-sm border">
        <AddressCard address={address}></AddressCard>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2 h-[50vh] overflow-x-hidden">
            { cart?.cartItems?.map((item) => (
              <CartItem  key={item.id} data={item}></CartItem>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[60vh] mt-5 lg:mt-0 ">
            <div className="mt-5">
            <PriceSummary className=""  cart={cart} onOpen={{}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
