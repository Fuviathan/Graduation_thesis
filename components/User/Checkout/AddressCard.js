import { getAllAddress } from "@/state/Auth/Action";
import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddressCard = ({ address }) => {
  return (
    <div className="">
      <div className="mb-5 text-xl font-semibold uppercase">Thông tin nhận hàng</div>
      <div className="flex">
        <div className="w-2/6 mb-4 mr-10">
          <p className="font-semibold">Tên người nhận</p>
          <p>{address?.fullName}</p>
        </div>
        <div>
          <p className="font-semibold ">Địa chỉ nhận hàng</p>
          <p>{address?.address}</p>
        </div>
      </div>
      <div className="flex ">
        <div className="w-2/6 mr-10">
          <p className="font-semibold ">Số điện thoại</p>
          <p>{address?.mobileNumber}</p>
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p>{address?.email}</p>
        </div>

      </div>

    </div>
  );
};

export default AddressCard;
