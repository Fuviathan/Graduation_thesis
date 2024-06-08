import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "@/state/Auth/Action";

const DeleteAddressModal = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteAddress(props.id));
    setTimeout(props.onClose, 200);
  };
  return (
    <div id="root">
      <div className="absolute w-2/6 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl">
        <div className="font-semibold tracking-wide">Xóa địa chỉ</div>

        <div className="mt-5">Bạn có muốn xóa địa chỉ này không</div>
        <div className="flex flex-row-reverse gap-5 mt-5">
          <button
            className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
            onClick={() => {
              handleDelete();
            }}
          >
            Xác nhận
          </button>
          <button
            onClick={props.onClose}
            className="p-2 px-6 text-red-500 bg-white border-2 border-red-500 hover:text-white hover:bg-red-500 rounded-2xl"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAddressModal;
