import React, { useEffect } from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder, Start } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "@/state/Order/Action";

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
      case "SHIPPED":
        return 4;
      case "DELIVERED":
        return 5;
      case "DELIVERY":
        return 6;
      case "CANCELLED":
        return 7;
      case "RETURNED":
        return 8;
      default:
        return 1;
    }
  };
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-10">Delivery Address</h1>
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
            className="shadow-xl rounded-md p-5 border "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.images[0]?.imageUrl}
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">{item?.title}</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    {/* <span>Color: {item.product.color}</span> */}
                    {/* <span>Memory: {item.memory}</span> */}
                    <div>
                      {item?.productSkus?.skuValues.map((item) => (
                        <span className="flex gap-2" key={item.id}>
                          <div>{item?.key?.option.name}</div>:
                          <div>{item?.optionValues?.value}</div>
                        </span>
                      ))}
                    </div>
                    <span>Quantity: {item.quantity}</span>
                  </p>
                  {/* <p>Seller: {item.product.brand}</p> */}
                  <p className="space-x-5">
                    <span className="text-green-500">
                      {item.discountedPrice}$
                    </span>
                    <span className="text-red-500 line-through">
                      {item.price}$
                    </span>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorder
                  className="px-2 text-5xl"
                  sx={{ fontSize: "2rem" }}
                ></StarBorder>
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
