import React from "react";
import { useForm } from "react-hook-form";

const OrderItemDetail = (props) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     firstname: props?.item?.shippingInfor.firstname,
  //     lastname: props?.item?.shippingInfor.lastname,
  //     address: props?.item?.shippingInfor.address,
  //     email: props?.item?.shippingInfor.email,
  //     methodPayment: props?.item?.shippingInfor.methodPayment,
  //   },
  // });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    // <div className='relative z-30 flex items-center justify-center w-screen h-screen bg-black bg-opacity-30'>
    <div id="root">
      <div className="absolute w-3/5 px-10 py-5 mt-4 overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white h-fit h-3/4 min-w-fit top-1/2 left-1/2 rounded-xl">
        {/*  <h3 className="mb-4 text-xl font-semibold tracking-wide">
          Chi tiết đơn đặt hàng
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 border border-gray-200 rounded-lg"
        >
          <div className="flex items-center">
            <div className="w-1/2 mr-8">
              <label className="block mt-2">Họ và tên đệm</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("lastname", { required: true })}
              />
            </div>
            <div className="w-1/2 ml-8">
              <label className="block mt-2">Tên</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("firstname", { required: true })}
              />
            </div>
          </div>
          <label className="block mt-2">Địa chỉ</label>
          <input
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            disabled
            {...register("address", { required: true })}
          />
          <div className="flex justify-between mt-2">
            <div className="flex flex-col w-1/2 mr-8">
              <label className="block ">Email</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-8">
              <label className="block">Phương thức thanh toán</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                disabled
                {...register("methodPayment", { required: true })}
              ></input>
            </div>
  </div> */}
        <div className="block mt-4 text-lg font-semibold">
          Chi tiết đơn hàng:
        </div>
        <div className="w-full px-2 py-2 mt-4 border border-gray-200 rounded-lg min-h-fit">
          <div className="flex border-b-2 border-gray-200">
            <div className="w-2/6 mb-1 text-lg font-medium">Tên sản phẩm</div>
            <div className="w-1/6 mb-1 text-lg font-medium">Số lượng</div>
            <div className="w-1/6 mb-1 text-lg font-medium">Giá tiền</div>
            <div className="w-1/6 mb-1 text-lg font-medium">Giảm giá</div>
            <div className="w-1/6 mb-1 text-lg font-medium">Thanh toán</div>
          </div>
          {props?.item.map((item, index) => {
            return (
              <div key={index} className="flex my-2 ">
                <div className="flex w-2/6">
                  <img
                    src={item?.product?.images[0]?.imageUrl}
                    className="max-w-[50px] max-h-[50px] mr-4"
                  />
                  <div className="font-medium text-black ">
                    {item.product.title}
                  </div>
                </div>
                <div className="w-1/6 ml-2 font-medium text-black">
                  {item.quantity}
                </div>

                <div className="w-1/6 font-medium text-black">
                  ${item.price}
                </div>
                <div className="w-1/6 ml-2 font-medium text-black">
                  {item.discount}%
                </div>
                <div className="w-1/6 ml-2 font-medium text-black">
                  ${item.discountedPrice.toFixed(2)}
                </div>
              </div>
            );
          })}
          <div className="flex items-center pt-2 border-t-2 border-gray-200">
            <div className="w-5/6 text-lg font-medium text-black ">
              Tổng số tiền
            </div>
            <div className="text-lg font-medium text-black">
              ${props?.totalMoney}
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-5 mt-5">
          <button
            onClick={props.handleClose}
            type="button"
            className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
          >
            Đóng
          </button>
        </div>
        {/* </form>
      </div> */}
      </div>
    </div>
  );
};

export default OrderItemDetail;