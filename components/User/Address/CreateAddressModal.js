import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addNewAddress } from "@/state/Auth/Action";

const CreateAddressModal = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addNewAddress(data))
    setTimeout(props.onClose, 200);
  };
  if (props.open)
    return (
      <div id="root">
        <div className="absolute w-3/5 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white min-w-fit top-1/2 left-1/2 rounded-xl">
          <h3 className="mb-4 text-xl font-semibold tracking-wide">
            Thêm địa chỉ mới
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full mt-2">
              <div className="w-1/2 mr-8">
                <label className="block">Địa chỉ</label>
                <input
                  type="text"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <div className="mt-2 text-sm italic text-red-400 text-italic">
                    *Không được để trống địa chỉ
                  </div>
                )}
              </div>
              <div className="w-1/2 ml-8">
                <label className="block">Tên người nhận</label>
                <input
                  type="text"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <div className="mt-2 text-sm italic text-red-400 text-italic">
                    *Không được để trống tên người nhận
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full mt-2">
              <div className="w-1/2 mr-8">
                <label className="block">Email</label>
                <input
                  type="Email"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <div className="mt-2 text-sm italic text-red-400 text-italic">
                    *Không được để trống Email
                  </div>
                )}
              </div>
              <div className="w-1/2 ml-8">
                <label className="block">Số điện thoại</label>
                <input
                  type="number"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  {...register("mobileNumber", { required: true })}
                />
                {errors.mobileNumber && (
                  <div className="mt-2 text-sm italic text-red-400 text-italic">
                    *Không được để trống số điện thoại
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row-reverse gap-5 mt-5">
              <button
                onClick={() => {
                  // setTimeout(props.onClose, 200);
                }}
                type="submit"
                className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
              >
                Lưu
              </button>
              <button
                type="button"
                onClick={props.onClose}
                className="p-2 px-6 text-red-500 bg-white border-2 border-red-500 hover:text-white hover:bg-red-500 rounded-2xl"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  else return <></>;
};

export default CreateAddressModal;
