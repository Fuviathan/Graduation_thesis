import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteList } from "@/state/Products/Action"
import ProductCard from "../productCard/ProductCard";
import { If } from "react-haiku";
import Link from "next/link";

export default function FavoritePage() {
  const dispatch = useDispatch()
  const favoriteList = useSelector((store) => store.product?.favoriteList)
  console.log(favoriteList)
  useEffect(() => {
    dispatch(getFavoriteList())
  }, []);

  return (
    <div className="mx-auto top-0 max-w-[1320px]">
      <If isTrue={favoriteList.length !== 0}>
        <div className="min-h-[50vh] ">
          <div className="mb-2 text-xl font-semibold">Danh sách các sản phẩm ưa thích của bạn</div>
          <div className="grid grid-cols-5 gap-4">
            {favoriteList.map((item, index) => (
              <div
                key={index}
                className={"col-span-1"}
              >
                <ProductCard key={index} item={item}></ProductCard>
              </div>
            ))}

          </div>
        </div>
      </If>
      <If isTrue={favoriteList.length === 0}>
        <div className="flex flex-col items-center justify-center h-full my-4 bg-white">
          <div className="p-6 text-2xl font-medium bg-white">
            Danh sách yêu thích của bạn chưa có sản phẩm nào
          </div>
          <Link href='/product' className="flex justify-center p-3 mx-auto font-sans text-2xl font-semibold rounded-lg shadow-md bg-light-brown w-fit h-fit text-orange-gray hover:opacity-75">
            Quay lại mua sắm
          </Link>
        </div>
      </If>
    </div>
  )
}
