import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../../state/Products/Action";

const CategoryWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const data = useSelector((state) => state?.product?.category?.content);
  console.log(data);
  // const number = useSelector((state) => state.product?.categoryProductTotal);
  return (
    <div>
      <div className="text-2xl text-gray-500 font-medium">Danh mục sản phẩm</div>
      <div className="flex flex-wrap justify-between mb-16 shadow-md">
        {data?.map((item, index) => {
          return (
            <CategoryCard
              key={item && item["_id"]}
              src={
                typeof item?.image === "string"
                  ? item?.imageUrl
                  : item?.imageUrl
              }
              title={item?.name}
              quantity={item?.totalProducts}
              alt={item?.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryWrapper;
