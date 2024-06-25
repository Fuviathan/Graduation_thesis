import React, { useEffect } from "react";
import Cart from "../Cart/Cart";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "./AddressCard";
import PriceSummary from "./PriceSummary";

const OrderSummary = ({ address, cart }) => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  console.log(cart);
  const order = {};
  useEffect(() => {}, [orderId]);
  return (
    <div>
      <div className="p-5 border-2 border-gray-200 rounded-lg shadow">
        <AddressCard address={address}></AddressCard>
      </div>
      <div>
        <div className="relative grid-cols-3 lg:grid ">
          <div className="col-span-2 h-[50vh] overflow-x-hidden mt-5">
            {cart?.cartItems?.map((item) => (
              <CartItem key={item.id} data={item}></CartItem>
            ))}
          </div>
          <div className="mt-5 ml-5 rounded-lg min-h-[50vh] shadow lg:mt-0">
            <div className="h-full mt-5 min-h-[50vh] ">
              <PriceSummary
                className=""
                address={address}
                cart={cart}
                onOpen={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
