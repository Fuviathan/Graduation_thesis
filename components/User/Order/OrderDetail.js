import React, { useEffect, useState } from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder, Start } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "@/state/Order/Action";
import { If } from 'react-haiku'
import { TrashIcon } from "@heroicons/react/24/outline";
import BasicModal from "@/components/Modal/BasicModal";
import DeleteOrderModal from "./DeleteOrderModal";
import CreateReviewModal from "./CreateReview/CreateReviewModal";

const OrderDetails = ({ orderId }) => {
  const [openDelete, setOpenDelete] = useState(false)
  const [openReview, setOpenReview] = useState(false)
  const [prodId, setProdId] = useState()
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order.orderData);
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
      case "CANCELLED":
        return 6;
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
                  className="min-w-[15rem] max-w-[15rem] h-[10rem] object-fir mr-8 object-top"
                  src={item?.images[0]?.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <div className="text-xl font-semibold">{item?.title}</div>
                  <div className="space-x-5 text-base font-semibold opacity-50">
                    <div className="mt-2">
                      {item?.productSkus?.skuValues.map((item, index) => (
                        <span className="flex gap-2" key={index}>
                          <div>{item?.key?.option.name}</div>:
                          <div>{item?.optionValues?.value}</div>
                        </span>
                      ))}
                    </div>
                    <span className="">Số lượng: {item.quantity}</span>
                  </div>
                  <p className="space-x-5">
                    <If isTrue={item.discountedPrice !== item.price}>

                      <span className="text-lg font-semibold text-green-500">
                        {item.discountedPrice}đ
                      </span>
                      <span className="text-lg font-semibold line-through text-black-500">
                        {item.price}đ
                      </span>
                    </If>
                    <If isTrue={item.discountedPrice === item.price}>
                      <span className="text-lg font-semibold text-green-500">
                        {item.discountedPrice}đ
                      </span>
                    </If>
                  </p>
                </div>
              </div>
            </Grid>
            <If isTrue={order.orderStatus === 'DELIVERED'}>
              <Grid item className="group">
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorder
                    className="px-2 text-5xl group-hover:opacity-80"
                    sx={{ fontSize: "2rem" }}
                  ></StarBorder>
                  <button onClick={() => { setOpenReview(true); setProdId(item.productId) }} className="group-hover:opacity-80">Đánh giá sản phẩm</button>
                </Box>
              </Grid>
            </If>
            <If isTrue={order.orderStatus === 'PENDING' || order.orderStatus === "PLACED"}>
              <Grid item className="group">
                <button onClick={() => setOpenDelete(true)} className="flex items-center text-red-500 group">
                  <TrashIcon className="w-8 h-8 mr-2 group-hover:opacity-70" />
                  <p className="group-hover:opacity-70">Huỷ đơn hàng</p>
                </button>
              </Grid>
            </If>
          </Grid>
        ))}
      </Grid>
      <BasicModal open={openDelete} onClose={() => setOpenDelete(false)}>
        <DeleteOrderModal open={openDelete} onClose={() => setOpenDelete(false)} id={orderId} />
      </BasicModal>
      <BasicModal open={openReview} onClose={() => setOpenReview(false)}>
        <CreateReviewModal open={openReview} onClose={() => setOpenReview(false)} id={prodId} />
      </BasicModal>
    </div>
  );
};

export default OrderDetails;
