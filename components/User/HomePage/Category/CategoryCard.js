import { getProductByFilter } from "@/state/Products/Action";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from '../../features/products/productSlice';
const CategoryCard = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    // navigate(`/product?category=${props.title}`);
    router.push(`/product?category=${props.title}`);
    dispatch(getProductByFilter({ category: props.title }));
  };
  return (
    <div className="flex w-1/5 p-4 px-4 border rounded-2xl" onClick={handleClick}>
      <div className="flex flex-col w-4/6 my-auto">
        <h6 className="text-xl font-medium">{props?.title}</h6>
        {/* <div className="text-sm">{props?.quantity} sản phẩm</div> */}
      </div>
      <img className="w-28 h-28 object-fit" src={props.src} alt={props.alt} />
    </div>
  );
};

export default CategoryCard;
