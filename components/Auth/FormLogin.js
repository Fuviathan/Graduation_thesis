import React, { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";
// import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { login } from "@/state/Auth/Action";
import "react-toastify/dist/ReactToastify.css";

const FormLogin = () => {
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newErrors = validateForm();

  //   if (Object.keys(newErrors).length > 0) {
  //     setError(newErrors);
  //     return;
  //   }
  //   setError({});
  //   console.log(formData)
  //   const result = await signIn('credentials', {
  //     redirect: false,
  //     usernameOrEmail: formData.usernameOrEmail,
  //     password: formData.password,
  //   })
  //   if (result.error) {
  //     setError({ form: result.error })
  //   } else {
  //     router.push('/product')
  //   }
  // };

  // const handleGoogleLogin = () => {
  //   signIn('google')
  // }

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
          <Link href={"#"}>
            <p className="text-base text-orange-gray hover:opacity-80">
              Quên mật khẩu?
            </p>
          </Link>
          <div className="flex justify-center gap-5 mt-4 ">
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
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
