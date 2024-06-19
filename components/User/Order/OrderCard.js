import { Adjust } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const OrderCard = (props) => {
  const router = useRouter();
  const param = useParams();
  return (
    <div
      onClick={() => router.push(`/orderHistory/${props.data.id}`)}
      className="p-5 shadow-md hover:shadow-2xl "
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className=" flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top "
              src={props?.data?.orderItems[0]?.images[0]?.imageUrl}
              alt="a"
            />
            <div className="ml-5 space-y-2">
              <p> {props.data.orderDate}</p>
              <p className="opacity-50 text-xs font-semibold">
                {props.data.address.fullName}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                {props.data.address.mobileNumber}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>{props.data.totalDiscountedPrice}$</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p>
              <Adjust
                className="color-green-700"
                sx={{ width: "15px", height: "15px" }}
              ></Adjust>
              <span>{props.data.orderStatus} </span>
            </p>
          )}
          <p>Your Item Has Been Delivered</p>

          {false && (
            <p>
              <span>Expected Delivery on Thursday</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
