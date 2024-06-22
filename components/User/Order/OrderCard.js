import { Adjust } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { If } from "react-haiku";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder, Start } from "@mui/icons-material";

const OrderCard = (props) => {
  const router = useRouter();
  const param = useParams();
  return (
    <div
      onClick={() => router.push(`/orderHistory/${props.data.id}`)}
      className="p-5 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:cursor-pointer"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[12rem] mr-4 h-[12rem] object-fit object-top "
              src={props?.data?.orderItems[0]?.images[0]?.imageUrl}
              alt="a"
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold"> {props.data.orderDate}</p>
              <p className="text-lg font-semibold opacity-50">
                {props.data.address.fullName}
              </p>
              <p className="text-lg font-semibold opacity-50">
                {props.data.address.mobileNumber}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2} alignItems="center">
          <p className="text-xl font-semibold">{props.data.totalDiscountedPrice}đ</p>
        </Grid>

        <Grid item xs={2}>
          {true && (
            <p>
              <Adjust
                className="mr-1 color-green-700"
                sx={{ width: "16px", height: "16px" }}
              ></Adjust>
              <span>{props.data.orderStatus} </span>
            </p>
          )}
          {/* <p>Your Item Has Been Delivered</p> */}

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
