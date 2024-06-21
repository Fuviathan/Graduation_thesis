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
      className="p-5 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[8rem] h-[8rem] object-fit object-top "
              src={props?.data?.orderItems[0]?.images[0]?.imageUrl}
              alt="a"
            />
            <div className="ml-5 space-y-2">
              <p> {props.data.orderDate}</p>
              <p className="text-xs font-semibold opacity-50">
                {props.data.address.fullName}
              </p>
              <p className="text-xs font-semibold opacity-50">
                {props.data.address.mobileNumber}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="text-xl font-semibold">{props.data.totalDiscountedPrice}$</p>
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
