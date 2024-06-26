import { API_BASE_URL } from "@/config/apiConfig";
import {
  removeProductFromCart,
  updateProductInCart,
} from "@/state/Cart/Action";
import { Delete, Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { getCart } from "@/state/Cart/Action";
import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../util/util";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState()

  const getDataDetail = async () => {

    const response = await axios.get(`${API_BASE_URL}admin/product/${data?.productSkus?.skuValues[0]?.key?.productId}`);
    setProduct(response.data)

  }
  useEffect(() => {
    getDataDetail()
  }, [])
  return (
    <div className="">
      <div className="flex w-full mb-2 border-2 border-gray-200 rounded-lg shadow">
        <div className="flex justify-center w-2/6 p-4 max-h-[9rem] min-h-fit ">
          <img
            className="object-contain"
            src={product?.images[0]?.imageUrl}
          ></img>
        </div>
        <div className="flex flex-col w-2/6">
          <div
            className="text-black text-2xl font-semibold pt-2 mb-4 text-ellipsis text-nowrap w-[20rem] overflow-hidden"
            title={product?.title}
          >
            {product?.title}
          </div>
          {data?.productSkus?.skuValues.map((item, index) => (<div className="flex gap-2 text-xl font-semibold" key={index}> <div>{item?.key?.option.name}</div>:<div>{item?.optionValues?.value}</div></div>))}
          <div className="flex flex-row gap-5 pt-2 mt-2 mb-3 text-xl font-semibold text-black">
            <div>
              {formatCurrency(data?.productSkus?.price -
                (data?.productSkus?.price / 100) * product?.discountPercent)}
            </div>
            <div className="text-gray-500 line-through">
              {formatCurrency(data?.productSkus?.price)}
            </div>
            <div className="text-green-500"> {product?.discountPercent}%</div>
          </div>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <div className="text-xl font-semibold text-black place-self-center">
            Số lượng:
          </div>

          <IconButton
            className="w-fit h-fit"
            onClick={() => {
              dispatch(
                updateProductInCart({
                  id: data.id,
                  quantity: data?.quantity - 1,
                  price: data?.productSkus.price,
                })
              ).then((ok, err) => {
                dispatch(getCart());
              })
            }}
            disabled={data?.cout < 2}
            aria-label="delete"
            size="large"
          >
            <Remove />
          </IconButton>
          <div className="font-semibold text-black place-self-center">
            {data?.quantity}
          </div>
          <IconButton
            className=" w-fit h-fit"
            onClick={() => {
              dispatch(
                updateProductInCart({
                  id: data.id,
                  quantity: data?.quantity + 1,
                  price: data?.productSkus.price,
                })
              ).then((ok, err) => {
                dispatch(getCart());
              })
            }}
            aria-label="delete"
            size="large"
          >
            <AddIcon></AddIcon>
          </IconButton>
        </div>
        <div className="p-0 w-fit h-fit ml-auto my-[auto]">
          <IconButton aria-label="delete" size="large">
            <Delete
              className="text-red-500"
              onClick={() => {
                dispatch(removeProductFromCart(data.id)).then((ok, err) => {
                  dispatch(getCart());

                })

              }}
            ></Delete>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
