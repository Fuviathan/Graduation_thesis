import { Button, IconButton, Rating, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import Color from "./Color";
import { useEffect, useState } from "react";
import {
  AddShoppingCart,
  ExpandLess,
  ExpandMore,
  FavoriteBorder,
  LocalShippingOutlined,
  Remove,
  Share,
} from "@mui/icons-material";
import { Description } from "./Description";
import { Review } from "./Review";
import SwiperProduct from "./SwiperProduct";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { If } from "react-haiku";
import {
  getFavoriteList,
  addProductToFavoriteList,
  deleteProductFromFavoriteList,
} from "@/state/Products/Action";
import { addProductToCart, getCart } from "@/state/Cart/Action";
import { toast } from "react-toastify";
// import { Rating } from "@mui/material";

export default function ProductDetail({ product, reviewsList }) {
  const router = useRouter();
  console.log(product);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const [selectedValues, setSelectedValues] = useState({});
  const [choosenData, setChoosenData] = useState({});

  // handleOnChange function to update the state when a toggle button is selected
  const handleOnChange = (option, event, atribute) => {
    const optionChoosen = {
      ...selectedValues,
      [option.name]: atribute,
    };
    setSelectedValues(optionChoosen);
    handleChoosenData(optionChoosen);
  };

  const handleChoosenData = (optionChoosen) => {
    for (let productSku of product.productSkus) {
      let allConditionsMet = true;

      for (let skuValue of productSku.skuValues) {
        console.log(skuValue.optionValues.id);
        console.log(optionChoosen[skuValue.option.name]);

        if (skuValue.optionValues.id !== optionChoosen[skuValue.option.name]) {
          allConditionsMet = false;
          console.log("false");
          break;
        }
      }

      if (allConditionsMet) {
        setChoosenData(productSku);
        console.log(productSku);
        return; 
      }
    }

    setChoosenData(null);
  };

  console.log(selectedValues);
  

  const favoriteList = useSelector((store) => store.product?.favoriteList);
  let userInformation;
  if (typeof window !== "undefined") {
    userInformation = localStorage.getItem("userInformation") || "";
    if (userInformation) {
      userInformation = JSON.parse(userInformation);
    }
  }
  console.log(userInformation);
  // ======= OPTION MENU==============
  const handleOption = (e) => {
    e.target.parentElement.querySelector(".down")?.classList.toggle("hidden");
    e.target.parentElement.querySelector(".up")?.classList.toggle("hidden");

    e.target.parentElement.parentElement
      .querySelector(".product-data")
      ?.classList.toggle("hidden");
  };

  function handleAddToCart(product) {
    const data = {
      productSkuId: choosenData?.id,
      quantity: quantity,
    };
    dispatch(addProductToCart(data));
    setTimeout(() => dispatch(getCart()), 1000);
  }

  useEffect(() => {
    dispatch(getFavoriteList());
  }, []);

  let arr = [];
  favoriteList.map((list) => {
    arr.push(list.id);
  });
  const bool = arr.includes(product.id);
  console.log(choosenData);
  console.log(selectedValues);
  return (
    <div className="mx-auto mt-8 max-w-[1320px]">
      <div className="grid gap-2 p-6 bg-white border rounded-lg shadow-lg sm:grid-cols-1 lg:grid-cols-2">
        {/* =========================ProductImage================ */}
        <div className="w-full h-full ">
          <div className="pb-20 mr-8 h-3/5">
            <SwiperProduct images={product?.images}></SwiperProduct>
          </div>
        </div>
        {/* ========================Product detail===================== */}
        <div className="grid w-full h-full grid-flow-row grid-cols-3 px-2 auto-rows-max">
          <div className="col-span-3">
            <h1 className="mb-2 font-sans text-2xl font-semibold ">
              {product?.title}
            </h1>
            <div className="flex pt-2 mb-2 text-xl font-semibold">
              {/* <span className="mr-2 text-2xl">{(product?.productSkus[0].price - (product?.productSkus[0].price * product?.discountPercent) / 100).toFixed(2)}$</span> */}
              {/* <span className="text-lg font-semibold line-through">{product?.productSkus[0].price.toFixed(2)}$</span> */}
            </div>
            <div className="flex items-center gap-5">
              <Rating
                value={reviewsList?.averageRating}
                readOnly
                precision={0.1}
                size="large"
              ></Rating>
              <div className="font-semibold text-gray-400 ">
                Dựa trên {reviewsList?.totalReviews} đánh giá
              </div>
            </div>
          </div>
          {/* ==============Category================ */}
          <div className="flex flex-col col-span-2 mt-5 gap-y-2">
            <div className="flex gap-4">
              <div className="font-semibold">Nhãn hàng:</div>
              <div className="font-semibolđ opacity-90 text-yellow-600 font-mono">
                {product?.brand.name}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-semibold">Danh mục:</div>
              <div className="font-semibolđ opacity-90 text-yellow-600 font-mono">
                {product?.category.name}
              </div>
            </div>

            {/* <div className="flex gap-4">
              <div className="font-semibold">Tag:</div>
              <div className="font-semibolđ opacity-90 text-yellow-600  font-mono">
                {product?.tags}
              </div>
            </div> */}

            <div className="flex gap-4 mb-3">
              <div className="font-semibold">Số lượng tồn kho :</div>
              <div className="font-semibolđ opacity-90 text-yellow-600  font-mono">
                {product?.totalQuantity}
              </div>
            </div>

            {/* <div className="flex gap-4">
              <div className="font-semibold">Color :</div>
              <Color color={color} setColor={setColor} data={dataColor} />
            </div> */}
          </div>
          {/* =============Quantity===================== */}
          {/* <div className="grid col-span-3 lg:grid-cols-3 sm:grid-cols-1">
            <div className="flex ">
              <div className="font-semibold place-self-center">Số lượng:</div>

              <IconButton
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity < 1}
                aria-label="delete"
                size="large"
              >
                <Remove />
              </IconButton>
              <div className="place-self-center">{quantity}</div>
              <IconButton
                onClick={() => setQuantity(quantity + 1)}
                aria-label="delete"
                size="large"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div> */}
          <div className="col-span-3 ">
            <If isTrue={product?.options}>
              {product?.options.map((option) => (
                <div
                  key={option.id}
                  className="grid grid-flow-col col-span-2 gap-4 auto-cols-max"
                >
                  <ToggleButtonGroup
                    key={option.id}
                    exclusive
                    value={selectedValues[option.name] || null}
                    onChange={(event, atribute) =>
                      handleOnChange(option, event, atribute)
                    }
                    className="flex items-center justify-center mb-4"
                    aria-label="Platform"
                  >
                    <div className="w-8 mr-8 font-semibold text-center text-md ">
                      {option.name}
                    </div>
                    {option.optionValues.map((optionValue) => {
                      // Check if optionValue.id is available in any productSku
                      const isAvailable = product.productSkus.some((sku) =>
                        sku.skuValues.some(
                          (skuValue) =>
                            skuValue.optionValues.id === optionValue.id
                        )
                      );
                      return (
                        <ToggleButton
                          className={`w-20 h-10 mr-4 rounded-lg border ${
                            isAvailable
                              ? "border-gray-300"
                              : "border-gray-200 text-gray-400 line-through"
                          }`}
                          key={optionValue.id}
                          value={optionValue.id}
                          disabled={!isAvailable} // Disable button if not available
                          style={{
                            textDecoration: !isAvailable
                              ? "line-through"
                              : "none",
                          }} // Add strike-through if not available
                        >
                          {optionValue.value}
                        </ToggleButton>
                      );
                    })}
                  </ToggleButtonGroup>
                </div>
              ))}
            </If>

            <div className="grid grid-flow-col col-span-2 gap-4 mt-4 auto-cols-max">
              <If isTrue={userInformation}>
                <Button
                  className="shadow-lg bg-brown-green hover:bg-brown-green hover:bg-opacity-80"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  <AddShoppingCart />
                  <div className="font-semibold">Thêm vào giỏ hàng</div>
                </Button>
              </If>
              <If isTrue={!userInformation}>
                  <Button
                    className="shadow-lg bg-brown-green hover:bg-brown-green hover:bg-opacity-80"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    <AddShoppingCart />
                    <div className="font-semibold">Thêm vào giỏ hàng</div>
                  </Button>
                  <div >
                    {choosenData?.quantity ? `${choosenData?.quantity} sản phẩm còn lại`:""} 
                  </div>
              </If>
              {/* <Button
                className="shadow-lg bg-light-brown hover:cursor-pointer text-orange-gray hover:bg-opacity-80 hover:bg-light-brown"
                variant="contained"
                size="large"
                onClick={() => {
                  handleAddToCart(product), router.push("/cart");
                }}
              >
                <div className="font-semibold">Mua ngay</div>
              </Button> */}
            </div>
          </div>
          {/* <div className="grid grid-flow-col col-span-3 mt-2 auto-cols-max gap-x-20 bt-2">
            <IconButton
              variant="contained"
              className="text-base font-medium text-gray-700 "
              sx={{
                "&:hover": {
                  color: "red",
                  bgcolor: "white",
                },
              }}
            >
              <CompareArrowsOutlined></CompareArrowsOutlined>
              <div className="">Add to compare </div>
            </IconButton>
            <IconButton
              className="text-base font-medium text-gray-700"
              variant="contained"
              sx={{
                "&:hover": {
                  color: "red",
                  bgcolor: "white",
                },
              }}
            >
              <Favorite></Favorite>
              <div className="font-medium">Add to wishlist</div>
            </IconButton>
          </div> */}

          <div className="col-span-3 mt-8">
            <div className="flex flex-col ">
              <div
                className="flex items-center cursor-pointer hover:opacity-70"
                onClick={handleOption}
              >
                <LocalShippingOutlined className="me-2" />
                <p className="text-medium font-semibold font-sans mr-[auto]">
                  Chính sách vận chuyển và trả hàng
                </p>
                <ExpandLess className="hidden down" />
                <ExpandMore className="block up" />
              </div>
              <p className="hidden mt-2 product-data">
                Phí vận chuyển và trả hàng hoàn toàn miễn phí <br />
                Chúng tôi sẽ vận chuyển hàng hóa trong vòng
                <b> 5-10 ngày!</b>
              </p>
            </div>
          </div>
          <If isTrue={!bool}>
            <div className="col-span-3 mt-4">
              <div className="flex flex-col ">
                <div
                  className="flex items-center cursor-pointer group"
                  onClick={() => {
                    dispatch(addProductToFavoriteList(product.id));
                    setTimeout(() => dispatch(getFavoriteList()), 1000);
                  }}
                >
                  <FavoriteBorder className="me-2 group-hover:text-red-400" />
                  <p className="text-medium group-hover:text-red-400 font-semibold font-sans mr-[auto]">
                    Thêm vào danh sách ưa thích
                  </p>
                </div>
              </div>
            </div>
          </If>
          <If isTrue={bool}>
            <div className="col-span-3 mt-4">
              <div className="flex flex-col ">
                <div
                  className="flex items-center cursor-pointer group"
                  onClick={() => {
                    dispatch(deleteProductFromFavoriteList(product.id));
                    setTimeout(() => dispatch(getFavoriteList()), 1000);
                  }}
                >
                  <FavoriteBorder className="text-red-400 me-2 group-hover:opacity-70" />
                  <p className="text-medium text-red-400 group-hover:opacity-70 font-semibold font-sans mr-[auto]">
                    Xóa khỏi danh sách ưa thích
                  </p>
                </div>
              </div>
            </div>
          </If>
          {/* <div className="col-span-3 mt-4">
            <div className="flex flex-col ">
              <div
                className="flex items-center border-b-2 cursor-pointer"
                onClick={handleOption}
              >
                <StraightenOutlined className="fs-5 me-2 " />
                <p className="text-medium font-semibold font-sans mr-[auto]">
                  Dimension
                </p>
                <ExpandLess className="hidden down" />
                <ExpandMore className="block up" />
              </div>
              <p className="hidden product-data">
                Free shipping and returns available on all orders! <br />
                We ship all US domestic orders within
                <b> 5-10 business days!</b>
              </p>
            </div>
          </div> */}

          <div className="col-span-3 mt-4 hover:cursor-pointer">
            <div
              className="flex cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success("Đã sao chép địa chỉ của sản phẩm");
              }}
            >
              <Share className="me-2" />
              <p className="text-medium font-semibold font-sans mr-[auto]">
                Chia sẻ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================PRoduct description========================= */}
      <div className="p-6 mt-8 border border-gray-200 rounded-lg shadow-lg">
        <Description description={product?.description}></Description>
      </div>

      {/* =====================Product Review=========================== */}
      <div className="p-6 mt-8 border border-gray-200 rounded-lg shadow-lg">
        <Review reviewsList={reviewsList} />
      </div>
    </div>
  );
}
