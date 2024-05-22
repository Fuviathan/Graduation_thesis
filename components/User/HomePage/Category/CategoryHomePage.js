import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCount } from "@/state/Products/Action";

const CategoryWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryCount());
  }, []);
  const data = useSelector((state) => state?.product?.categoryCount);
  console.log(data);
  // const number = useSelector((state) => state.product?.categoryProductTotal);
  return (
    <div className="flex flex-wrap justify-between mb-16 shadow-md">
      {data?.map((item, index) => { 
        return (
          <CategoryCard
            key={item && item["_id"]}
            src={
              typeof item?.image === 'string' ? item?.image : item?.image.url
            }
            title={item?.title}
            quantity={item?.totalProducts}
            alt={item?.title}
          />
        );
      })}
    </div>
  );
};

export default CategoryWrapper;
