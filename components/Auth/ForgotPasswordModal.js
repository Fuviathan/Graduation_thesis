import { CustomTextField } from "@/components/Auth/CustomTextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "@/state/Auth/Action";

const ForgotPasswordModal = (props) => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setBrand(event.target.value);
    setError(""); // Clear previous error when user starts typing
  };

  const handleSave = () => {
    if (!brand.trim()) {
      setError("Vui lòng nhập email của bạn.");
      return;
    } else {
      dispatch(forgotPassword( brand ));
    }
    // Call your save function here with the brand name
    // Example: props.onSave(brand);
  };
  if (props.open)
    return (
      <div id="root">
        <div className="absolute w-2/6 px-10 py-5 mt-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-xl">
          <div className="font-semibold tracking-wide">Quên mật khẩu</div>

          <div className="mt-5">
            <CustomTextField
              className="mb-4"
              label="Nhập email của bạn"
              name="brand"
              value={brand}
              onChange={handleInputChange}
              fullWidth
              error={Boolean(error)}
              helperText={error}
            />
          </div>
          <div className="flex flex-row-reverse gap-5 mt-5">
            <button
              className="p-2 px-6 bg-white border-2 text-dark-purple hover:bg-dark-purple hover:text-white border-dark-purple rounded-2xl"
              onClick={() => {
                handleSave();
                setTimeout(props.onClose, 200);
              }}
            >
              Gửi
            </button>
            <button
              onClick={props.onClose}
              className="p-2 px-6 text-red-500 bg-white border-2 border-red-500 hover:text-white hover:bg-red-500 rounded-2xl"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  else return <></>;
};

export default ForgotPasswordModal;
