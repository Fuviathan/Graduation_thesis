import { Button, IconButton, Rating } from "@mui/material";
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
import { addProductToCart, clearCart } from "@/state/Cart/Action";
import { getFavoriteList, addProductToFavoriteList, deleteProductFromFavoriteList } from "@/state/Products/Action";
// import { Rating } from "@mui/material";

export default function ProductDetail({ product }) {
  const router = useRouter()
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const favoriteList = useSelector((store) => store.product?.favoriteList)
  let userInformation
  if (typeof window !== 'undefined') {
    userInformation = localStorage.getItem('user') || ""
    if (userInformation) {
      userInformation = JSON.parse(userInformation)
    }
  }
  // ======= OPTION MENU==============
  const handleOption = (e) => {
    e.target.parentElement.querySelector(".down")?.classList.toggle("hidden");
    e.target.parentElement.querySelector(".up")?.classList.toggle("hidden");

    e.target.parentElement.parentElement
      .querySelector(".product-data")
      ?.classList.toggle("hidden");
  };

  // function handleAddToCart(product) {
  //   const data = {
  //     cart: [
  //       {
  //         id: userInformation?.id,
  //         productId: product?.id,
  //         quantity: quantity,
  //         price: product?.variations[0].price - (product?.variations[0].price * product?.discountPercent) / 100,
  //         attributeVariationLv1: product?.variations[0]?.attributeVariationLv1
  //       },
  //     ],
  //   };
  //   dispatch(addProductToCart(data));
  //   setTimeout(() => dispatch(clearCart()), 1000)
  // }

  // useEffect(() => {
  //   dispatch(getSingleProduct(productId));
  // }, [router]);

  useEffect(() => {
    dispatch(getFavoriteList());
  }, [favoriteList])
  let arr = [];
  favoriteList.map((list) => {
    arr.push(list.id)
  })
  const bool = arr.includes(product.id)

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
            <div className="flex gap-5">
              <Rating value={5} readOnly></Rating>
              <div className="font-semibold">Dựa trên 0 đánh giá</div>
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
            <div className="grid grid-flow-col col-span-2 gap-4 auto-cols-max">
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
                    router.push('/login');
                  }}
                >
                  <AddShoppingCart />
                  <div className="font-semibold">Thêm vào giỏ hàng</div>
                </Button>
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
                  onClick={() => dispatch(addProductToFavoriteList(product.id))}
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
                  onClick={() => dispatch(deleteProductFromFavoriteList(product.id))}
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
        <Review></Review>
      </div>
    </div>
  );
}
