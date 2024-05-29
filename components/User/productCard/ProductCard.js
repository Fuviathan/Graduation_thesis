import {
  CheckBox,
  CompareArrows,
  CompareArrowsOutlined,
  Favorite,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getSingleProduct } from "@/state/Products/Action";
import { addProductToCart } from "@/state/Cart/Action";

const ProductCard = ({ grid, item }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // function handleAddToCart(product) {
  //   const data = {
  //     cart: [
  //       {
  //         _id: product?._id,
  //         count: 1,
  //         price: product?.price,
  //         title: product?.title,
  //         description: product.description,
  //       },
  //     ],
  //   };
  //   dispatch(addProductToCart(data));
  //   alert("Thêm sản phẩm thành công");
  // }
  // useEffect(() => {
  //   dispatch(getSingleProduct(item._id));
  // }, []);
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push(`product/${item.id}`);
      }}
    >
      <div
        className={`flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-[25rem] ${
          grid === 6 ? " flex-row justify-start" : " flex-col"
        } `}
      >
        <div
          className={`relative border m-4 flex h-60 overflow-hidden rounded-xl w-max-full ${
            grid === 6 ? " w-1/3 " : " "
          } `}
        >
          <div className="w-full h-full">
            <img
              className="object-fill w-full h-full "
              src={item?.images[0]?.imageUrl}
            />

            <img
              className="absolute top-0 object-fill w-full h-full hover:opacity-0"
              src={item?.images[1]?.imageUrl}
            />
          </div>
          {item?.discountPercent !== 0 && (
            <span className="absolute top-0 left-0 px-2 m-2 text-sm font-medium text-center text-white bg-black rounded-full">
              {/* {item?.discountPercent}% OFF */}
            </span>
          )}
          {/* <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 z-50 flex flex-col"
          >
            <Checkbox
              // {...label}
              sx={{
                color: pink[500],
                "&.Mui-checked": {
                  color: pink[500],
                },
              }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />

            <Checkbox
              // {...label}
              sx={{
                color: pink[500],
                "&.Mui-checked": {
                  color: pink[500],
                },
              }}
              icon={<CompareArrowsOutlined />}
              checkedIcon={<CompareArrows />}
            />
          </div> */}
        </div>
        <div
          className={`ml-auto mt-4 px-5 pb-5 w-full ${
            grid === 6 ? "w-full" : ""
          }`}
        >
          <div className="flex flex-wrap justify-between w-full">
            <div>
              <div
                title={item?.title}
                className={`tracking-tight text-slate-900 font-semibold text-nowrap text-ellipsis overflow-hidden ${
                  grid === 6 ? "w-full" : "w-[12rem]"
                }`}
              >
                {item?.title}
              </div>
            </div>
            <div className="flex flex-wrap items-center ">
              <Rating
                value={5}
                size={`${grid === 6 ? "large" : "small"}`}
              ></Rating>
              <div className="px-2 py-1 ml-2 mr-2 text-xs font-semibold bg-yellow-200 rounded">
                5.0
              </div>
            </div>
          </div>
          <div className={`flex items-center justify-between ${
            grid === 6 ? 'mt-2 mb-5' : 'mt-3'
          }`}>
            <p>
              <span className={`font-bold text-slate-900 ${
                grid === 6 ? 'text-3xl' : 'text-2xl'
              }`}>
                {/* ${(item?.variations[0].price - (item?.variations[0].price * item?.discountPercent) / 100).toFixed(2)} */}
              </span>
              {item?.discountPercent !== 0 && (
                <span className="ml-2 text-sm line-through text-slate-900">
                  {/* ${item?.variations[0].price.toFixed(2)} */}
                </span>
              )}
            </p>
          </div>
          <div className="w-full ">
            {grid === 6 && (
              <p
                className="h-min-[10rem] overflow-y-scroll mb-10"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
            )}
            {/* <Button
              variant="contained"
              className="bg-[#ede2d1] py-2 hover:bg-light-brown hover:bg-opacity-80"
              onClick={(event) => {
                event.stopPropagation(), handleAddToCart(item);
              }}
            >
              <ShoppingCart className="text-black"></ShoppingCart>
              <p className="ml-2 font-sans text-base font-medium text-black ">
                Add to cart
              </p>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
