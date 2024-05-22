import React, { useEffect } from "react";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { getCart } from "@/state/Cart/Action";

const Cart = (props) => {
  const dispatch = useDispatch()
  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem("user")) || null;
  }
  const cart = useSelector((store) => store?.cart?.cart);
  const cartItem = useSelector((store) => store?.cart?.cart?.totalItem);
  useEffect(() => {
    // Get the value from local storage if it exists
    dispatch(getCart(value.id))
  }, [cartItem]);

  if (!cart || cart?.totalPrice === 0) return (
    <div className="flex flex-col items-center justify-center h-full my-4 bg-white">
      <div className="p-6 text-2xl font-medium bg-white">
        Giỏ hàng của bạn chưa có sản phẩm nào
      </div>
      <Link href='/product' className="flex justify-center p-3 mx-auto font-sans text-2xl font-semibold rounded-lg shadow-md bg-light-brown w-fit h-fit text-orange-gray hover:opacity-75">
        Quay lại mua sắm
      </Link>
    </div>
  )
  else if (cart) return (
    <div className="h-full my-4">
      <div className="flex justify-between mx-auto max-w-[1320px]">
        <div className="w-4/6 mr-8">
          {cart?.cartItems.map((item) => (
            <CartItem key={item.id} data={item}></CartItem>
          ))}
        </div>
        <div className="w-1/3">
          <PriceDetail cart={cart} onOpen={props.onOpen}></PriceDetail>
        </div>
      </div>
    </div>
  );
};

export default Cart;
