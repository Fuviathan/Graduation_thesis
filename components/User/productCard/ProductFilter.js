import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  IconButton,
  Input,
  Pagination,
  TableRow,
  TextField,
} from "@mui/material";
import { TableRows, ViewModule } from "@mui/icons-material";

import { createTheme } from "@mui/material/styles";
import { purple, lime, red } from "@mui/material/colors";
// import Color from "../product/Color";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrand,
  getAllCategory,
  getProductByColor,
  getProductByFilter,
  getProducts,
} from "@/state/Products/Action";
import { useRouter } from "next/router";
import { CustomTextField } from "../../Auth/CustomTextField";

const ProductFilter = () => {
  const router = useRouter();

  const [sort, setSort] = useState("title");
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [grid, setGrid] = useState(12);

  //============SET LAYOUT
  function handleChangeLayout(e) {
    e.target.parentElement.parentElement.parentElement
      .querySelector(".line-layout")
      ?.classList.toggle("bg-gray-300");

    e.target.parentElement.parentElement.parentElement
      .querySelector(".row-layout")
      ?.classList.toggle("bg-gray-300");
  }

  const dispatch = useDispatch();
  const products = useSelector((store) => store?.product?.products?.content);

  // const colors = useSelector((store) => store?.product?.color);
  const brands = useSelector((store) => store?.product?.brand?.content);
  const categories = useSelector((store) => store?.product?.category?.content);
  useEffect(() => {
    
    dispatch(getAllBrand());
    dispatch(getAllCategory());
  }, []);

  // ================SET PERPAGE
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageCount = Math.ceil(products?.length / productsPerPage);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  // =============== GET DATA FOR CATEGORY===========
  // ================ GET DATA FILTER ============
  useEffect(() => {
    if (!router.query.category) {
      // dispatch(getProducts());
    } else {
      // dispatch(getProductByFilter({ category: router.query.category }));
      setCategory(router.query.category);
      const query = new URLSearchParams(router.query);
      query.delete('category');
      router.replace(`/product?${query.toString()}`);   
    }
    
      dispatch(
        getProductByFilter({
          brand,
          category,
          minPrice,
          maxPrice,
        })
      );
  }, [brand, category, minPrice, maxPrice]);
  if (currentProducts) {
    return (
      <div className="mt-8">
        <div className="grid gap-8 bg-white lg:grid-cols-4 ">
          {/* ==============Product Filter========================= */}
          <div className="col-span-1">
            {/* =============Filter by category====================== */}
            <div className="flex flex-col justify-center px-6 py-4 border-2 rounded-lg ">
              <div className="mr-4 text-2xl font-bold ">
                Tìm kiếm bằng danh mục
              </div>
              <div className="flex flex-row py-4">
                <div>
                  <ul className="flex flex-wrap gap-2">
                    {categories &&
                      [...new Set(categories)].map((item, index) => {
                        return (
                          <button
                            key={item && item["id"] && index}
                            className={`px-2 p-1 text-base mb-1 font-semibold bg-[#ede2d1] rounded-md cursor-pointer ${item.name === category
                                ? "opacity-100 bg-yellow-700 bg-opacity-40 border-yellow-700 border-opacity-40"
                                : ""
                              } `}
                            onClick={() =>
                              setCategory(
                                category === item.name ? "" : item.name
                              )
                            }
                          >
                            {item.name}
                          </button>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>

            {/* =============Filter by Color and price====================== */}

            <div className="flex flex-col justify-center px-6 py-4 mt-4 border-2 rounded-xl">
              <div className="mr-4 text-2xl font-bold ">Lọc</div>
              <div className="mt-2">
                <div className="mb-4 text-xl font-semibold text-gray-500">
                  {" "}
                  Giá cả:
                </div>
                <div className="flex items-center">
                  <span className="pr-2 text-xl font-semibold">$</span>
                  <CustomTextField
                    onChange={(e) => setMinPrice(e.target.value)}
                    label={"Từ"}
                    id="margin-none"
                  />
                  <span className="px-2 ml-8 text-xl font-semibold">$</span>
                  <CustomTextField
                    onChange={(e) => setMaxPrice(e.target.value)}
                    label={"Đến"}
                    id="margin-none"
                  />
                </div>
              </div>
              {/* <div>
              <div className="mt-4 text-xl font-semibold text-gray-500">
                Colors
              </div>
              <Color data={colors} color={color} setColor={setColor}></Color>
            </div> */}
            </div>

            {/* =====================Filter by Brand======================= */}
            <div className="flex flex-col justify-center px-6 py-4 mt-4 border-2 rounded-lg">
              <div className="mr-4 text-2xl font-bold ">Nhãn hàng</div>
              <div className="flex flex-row py-4">
                <div>
                  <ul className="flex flex-wrap gap-2 mb-0 ps-0">
                    {brands &&
                      [...new Set(brands)].map((item, index) => {
                        return (
                          <button
                            key={item && item["id"]}
                            className={`px-2 text-base mb-1 p-1 font-semibold bg-[#ede2d1] rounded-md cursor-pointer ${brand === item.name
                                ? "opacity-100 bg-yellow-700 bg-opacity-40 border-yellow-700 border-opacity-40"
                                : ""
                              }`}
                            onClick={() =>
                              {setBrand(brand === item.name ? "" : item.name);
                              console.log(brand);
                              console.log(item.name)
                            }
                            }
                          >
                            {item.name}
                          </button>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ===================Product List ============================== */}
          <div className="col-span-3">
            <div className="col-span-3 mb-4">
              <div className="flex items-center ">
                {/* <p className="mr-2 text-base font-semibold">Sắp xếp:</p>
                <div>
                  <select
                    className="px-4 py-1 text-lg font-medium border-2 rounded-xl"
                    onChange={(e) => {
                      setSort(e.target.value);
                    }}
                  >
                    <option value="title">Từ A-Z</option>
                    <option value="-title">Từ Z-A</option>
                    <option value="price">Giá cả, thấp đến cao</option>
                    <option value="-price">Giá cả, cao xuống thấp</option>
                    <option value="createdAt">Ngày, cũ đến mới</option>
                    <option value="-createdAt">Ngày, mới đến cũ</option>
                  </select>
                </div> */}

                <div className="ml-auto">
                  <IconButton
                    className="line-layout w-[3rem] h-[3rem] rounded-md hover:bg-gray-300 bg-gray-300"
                    onClick={(e) => {
                      handleChangeLayout(e);
                      setGrid(12);
                      setProductsPerPage(12);
                    }}
                  >
                    <ViewModule></ViewModule>
                  </IconButton>
                  <IconButton
                    className="row-layout w-[3rem] h-[3rem] rounded-md hover:bg-gray-300"
                    onClick={(e) => {
                      handleChangeLayout(e);
                      setGrid(6);
                      setProductsPerPage(6);
                    }}
                  >
                    <TableRows></TableRows>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {currentProducts.map((item, index) => (
                <div
                  key={index}
                  className={`${grid === 6 ? "col-span-5" : "col-span-1"}  `}
                >
                  <ProductCard key={index} grid={grid} item={item}></ProductCard>
                </div>
              ))}
            </div>
            {/* =================Pagination======================= */}
            <div className="col-span-3">
              <div className="flex justify-center w-full py-8 m-auto ">
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={handleChangePage}
                  variant="outlined"
                  shape="rounded"
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "black",
                      "&.Mui-selected": {
                        backgroundColor: "#ede2d1",
                        color: "black",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else return <></>
};

export default ProductFilter;
