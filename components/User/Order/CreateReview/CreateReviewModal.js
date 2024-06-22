import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { CreateReview } from "@/state/Order/Action";

const CreateReviewModal = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.productId = props.id
        data.rating = value
        dispatch(CreateReview(data)).then((ok, err) => {
            props.onClose()
        })
    };
    return (
        <div id="root">
            <div className="absolute w-2/6 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl">
                <div className="mt-2 mb-4 text-xl font-semibold tracking-wide uppercase">Đánh giá sản phẩm</div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label className="mb-2 text-lg">Đánh giá chất lượng</label>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="block">Đánh giá của bạn về sản phẩm</label>
                        <textarea
                            type="text"
                            rows={4}
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                            {...register("review", { required: false })}
                        />
                    </div>
                    <div className="flex flex-row-reverse gap-5 mt-6">
                        <button
                            className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
                            type='submit'
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
                </form>
            </div>
        </div>
    );
};

export default CreateReviewModal;
