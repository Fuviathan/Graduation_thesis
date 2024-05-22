import React, { useEffect, useState } from "react";
import OrderItemDetail from "./OrderItemDetail";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderOfUser } from "@/state/Cart/Action";
import BasicModal from "@/components/Admin/Modal/BasicModal";
import { getTokenFromLocalStorage } from "@/config/apiConfig";

const OrderDetail = (props) => {
    const [item, setOrder] = useState()
    const [price, setPrice] = useState()
    let value = getTokenFromLocalStorage()
    if (value) (
        value = JSON.parse(value)
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrderOfUser(value.id))
    }, []);
    const orders = useSelector((store) => store?.cart?.orders)
    console.log(orders)
    return (
        <div className="grid grid-cols-5 font-sans font-semibold border-2 ">
            <div className="py-2 text-lg font-bold text-center border border-gray-200">
                Số thứ tự
            </div>
            <div className="py-2 text-lg font-bold text-center border border-gray-200">
                Người nhận hàng
            </div>
            <div className="py-2 text-lg font-bold text-center border border-gray-200">
                Tổng số tiền
            </div>
            <div className="py-2 text-lg font-bold text-center border border-gray-200">
                Trạng thái
            </div>
            <div className="py-2 text-center border border-gray-200">

            </div>
            {orders?.map((item, index) => (
                <>
                    <div className="py-2 text-center border border-gray-200">
                        {index + 1}
                    </div>
                    <div className="py-2 text-center border border-gray-200">
                        {item?.user.lastName} {item?.user.firstName}
                    </div>
                    <div className="py-2 text-center border border-gray-200">
                        {item.totalDiscountedPrice.toFixed(2)}$
                    </div>
                    <div className="py-2 text-center border border-gray-200">
                        {item.orderStatus}
                    </div>
                    <div
                        className="py-2 text-center border border-gray-200 hover:cursor-pointer hover:underline"
                        onClick={() => { props.handleOpen(); setOrder(item.orderItems); setPrice(item.totalDiscountedPrice.toFixed(2)) }}
                    >
                        Xem chi tiết đơn hàng
                    </div>
                </>
            ))}
            <BasicModal open={props.open} handleClose={props.handleClose}>
                <OrderItemDetail open={props.open} handleClose={props.handleClose} item={item} totalMoney={price} />
            </BasicModal>
        </div>
    );
}
export default OrderDetail;