import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "@/state/Auth/Action";
import AddressItem from "./AddressItem";
import { If } from "react-haiku";
import Link from "next/link";

export default function Address(props) {
  const dispatch = useDispatch()
  const addressList = useSelector((store) => store.auth?.address)
  useEffect(() => {
    dispatch(getAllAddress())
  }, [addressList]);
  
  return (
    <div className="mx-auto top-0 max-w-[1320px]">
      <div className="min-h-[50vh] ">
        <div className="flex items-center gap-x-4">
          <div className="mb-2 text-xl font-semibold">Danh sách các địa chỉ của bạn</div>
          <button onClick={() => props.setOpen(true)} className="px-4 py-2 font-semibold rounded-lg hover:opacity-70 hover:cursor-pointer bg-light-brown">Tạo địa chỉ mới</button>
        </div>

        <div className="mt-5">
          {addressList.map((item, index) => (
            <div key={index}>
              <AddressItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
