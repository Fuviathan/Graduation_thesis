import React, { useEffect } from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder, Start } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "@/state/Order/Action";
import { If } from 'react-haiku'

const OrderDetails = ({ orderId }) => {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order.orderData);

  console.log(order);
  useEffect(() => {
    dispatch(getOrderById(parseInt(orderId)));
  }, [orderId]);

  const checkStatusOrder = (status) => {
    switch (status) {
      case "PENDING":
        return 1;
      case "PLACED":
        return 2;
      case "CONFIRMED":
        return 3;
      case "DELIVERY":
        return 4;
      case "SHIPPED":
        return 5;
      case "CANCELLED":
        return 6;
      case "RETURNED":
        return 7;
      default:
        return 1;
    }
  };
  return (
    <div className="px-5 lg:px-20">
      <div className="pt-10">
        <AddressCard address={order?.address}></AddressCard>
      </div>

      <div className="py-20">
        <OrderTracker
          activeStep={checkStatusOrder(order?.orderStatus)}
        ></OrderTracker>
      </div>

      <Grid className="space-y-5" container>
        {order?.orderItems?.map((item) => (
          <Grid
            key={item.id}
            item
            container
            className="py-5 border rounded-md shadow-xl px-9 "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[15rem] h-[10rem] object-fir mr-8 object-top"
                  src={item?.images[0]?.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <div className="text-xl font-semibold">{item?.title}</div>
                  <div className="space-x-5 text-base font-semibold opacity-50">
                    <div className="mt-2">
                      {item?.productSkus?.skuValues.map((item) => (
                        <span className="flex gap-2" key={item.id}>
                          <div>{item?.key?.option.name}</div>:
                          <div>{item?.optionValues?.value}</div>
                        </span>
                      ))}
                    </div>
                    <span className="">Số lượng: {item.quantity}</span>
                  </div>
                  <p className="space-x-5">
                    <span className="text-lg font-semibold text-green-500">
                      {item.discountedPrice}$
                    </span>
                    <span className="text-lg font-semibold line-through text-black-500">
                      {item.price}$
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <If isTrue={order.orderStatus === 'SHIPPED'}>
              <Grid item className="group">
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorder
                    className="px-2 text-5xl group-hover:opacity-80"
                    sx={{ fontSize: "2rem" }}
                  ></StarBorder>
                  <button className="group-hover:opacity-80">Đánh giá sản phẩm</button>
                </Box>
              </Grid>
            </If>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
