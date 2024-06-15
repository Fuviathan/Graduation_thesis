import { getAllAddress } from "@/state/Auth/Action";
import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddressCard = ({address}) => {
  console.log(address)
  return (
    <div className="">
      <div className="space-y-3 ">
        <p className="font-semibold">
          {address?.fullName}
        </p>
        <p>
          {address?.streetAddress}
        </p>
        <div className="flex justify-between">
          <div>
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobilePhone}</p>
          </div>
          <div>
          <p className="font-semibold">Email</p>
          <p>{address?.email}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
