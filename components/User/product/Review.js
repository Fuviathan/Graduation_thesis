import { Button, Rating, TextareaAutosize } from "@mui/material";
import { red } from "@mui/material/colors";

export const Review = () => {
  return (
    <div className="mt-4">
      <div className="bg-white ">
        {/* <div className="text-3xl font-bold ">Review</div> */}
        <div className="mt-4">
          <div className="text-2xl font-bold ">Đánh giá của khách hàng</div>
          <div className="flex gap-2 mt-2">
            <Rating value={4.5}></Rating>
            <div className="text-xl font-semibold text-gray-400">
              Dựa trên 0 đánh giá
            </div>
          </div>

          <div>
            <div className="mt-8 text-2xl font-bold">
              Đánh giá sản phẩm
            </div>
            <div className="my-2 text-xl font-semibold text-gray-400 ">
              Đánh giá
            </div>
            <Rating name="size-medium" defaultValue={3} />
            <div className="my-4 text-xl font-semibold text-gray-400">
              Viết đánh giá của bạn
            </div>
            <TextareaAutosize
              minRows={5}
              placeholder="Comments"
              className="w-full p-4 border-2 focus:outline-gray-500 "
            ></TextareaAutosize>

            <Button
              className="outline-black bg-black text-white rounded-2xl hover:bg-[#febd69] hover:border-[#febd69] hover:shadow-lg mt-2"
              variant="outlined"
            >
              <p className="font-bold text-md">Gửi đánh giá</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
