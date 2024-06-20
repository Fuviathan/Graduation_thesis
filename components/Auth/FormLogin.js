import React, { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login, loginWithGoogle } from "@/state/Auth/Action";
import "react-toastify/dist/ReactToastify.css";
import BasicModal from "../Modal/BasicModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import GoogleIcon from '@mui/icons-material/Google'; // Import Google Icon
import { redirect } from "next/dist/server/api-utils";
import { API_BASE_URL } from "@/config/apiConfig";
// import { signIn } from "next-auth/react"; // Uncomment this if you are using next-auth

const FormLogin = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [error, setError] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.usernameOrEmail.trim() === "") {
      newErrors.usernameOrEmail = "Email không được để trống";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password không được để trống";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError({});
    dispatch(login(formData));
  };

  const baseURL = API_BASE_URL;
  let currentURL ;
  if(window){
    currentURL= window.location.origin;
  }


  return (
    <div className="w-full py-[5rem]">
      <div className="w-2/5 p-4 m-auto bg-white rounded-2xl">
        <p className="mb-5 text-2xl font-bold text-center text-orange-gray text">
          Login
        </p>
        <form className="px-4">
          <CustomTextField
            className="mb-4"
            label="Tên đăng nhập hoặc Email"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.usernameOrEmail)}
            helperText={error.usernameOrEmail}
          />
          <CustomTextField
            className="mb-4"
            label="Mật khẩu"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={Boolean(error.password)}
            helperText={error.password}
          />
          <div onClick={() => setOpen(true)} className="text-base hover:cursor-pointer text-orange-gray hover:opacity-80">
            Quên mật khẩu?
          </div>
          <div className="flex justify-center gap-5 mt-4">
            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              size="large"
            >
              Đăng nhập
            </Button>
            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={(e) => {
                e.preventDefault();
                router.push("/signup");
              }}
            >
              Đăng ký
            </Button>
          </div>
          <div className="flex justify-center mt-4">
          <Button
              className="text-base font-semibold bg-white text-orange-gray border-2 rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              variant="contained"
              size="large"
              startIcon={<GoogleIcon />}
            
            >
              <a href={`${baseURL}oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect`}>
              Đăng nhập với Google
              </a>
            </Button>
          </div>
        </form>
      </div>
      <BasicModal open={open} onClose={() => setOpen(false)}>
        <ForgotPasswordModal open={open} onClose={() => setOpen(false)} />
      </BasicModal>
    </div>
  );
};

export default FormLogin;
