import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { getAllOrderOfUser } from "@/state/Order/Action";

const orderStatus = [
  { label: "Chờ xử lý", value: "PENDING" },
  { label: "Đã đăt hàng", value: "PLACED" },
  { label: "Đã xác nhận", value: "CONFIRMED" },
  { label: "Đang vận chuyển", value: "SHIPPED" },
  { label: "Đã giao hàng", value: "DELIVERED" },
  { label: "Hủy", value: "CANCELLED" },
  { label: "Trả hàng", value: "RETURNED" },
];

const Order = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState([]);
  const order = useSelector((store) => store?.order?.orders);

  const handleFilterChange = (value) => {
    setFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );
  };
  console.log(filters);

  useEffect(() => {
    dispatch(getAllOrderOfUser(filters));
  }, [filters]);

  return (
    <div className="px-5 lg:p-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filters</h1>

            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Trạng thái đơn hàng</h1>
              {orderStatus.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    value={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={() => handleFilterChange(option.value)}
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid className="space-y-5" item xs={9}>
          {order?.map((item) => (
            <OrderCard key={item.id} data={item} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
