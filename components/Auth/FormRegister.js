import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { CustomTextField } from "./CustomTextField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/state/Auth/Action";

const FormRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
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

    if (formData.email.trim() === "") {
      newErrors.email = "Email không được để trống";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email không đúng định dạng";
      }
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất là 8 ký tự";
    }

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "Tên không được để trống";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    }

    if (formData.username.trim() === "") {
      newErrors.username = "Tên đăng nhập không được để trống";
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

    dispatch(register(formData));
  };

  return (
    <div className="py-[5rem]">
      <div className="w-2/5 py-4 m-auto bg-white">
        <p className="mb-5 text-2xl font-bold text-center text-orange-gray">
          Đăng ký
        </p>
        <form className="px-4">
          <CustomTextField
            className="mb-4"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.email)}
            helperText={error.email}
          />

          <CustomTextField
            className="mb-4"
            label="Tên"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.firstName)}
            helperText={error.firstName}
          />

          <CustomTextField
            className="mb-4"
            label="Họ và tên đệm"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.lastName)}
            helperText={error.lastName}
          />

          <CustomTextField
            className=""
            label="Tên đăng nhập"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            fullWidth
            error={Boolean(error.username)}
            helperText={error.username}
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

          <div className="flex justify-center gap-5 mt-4 ">
            <Button
              className="text-base font-semibold bg-light-brown text-orange-gray rounded-2xl hover:bg-light-brown hover:bg-opacity-80"
              type="submit"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                router.push("/login");
              }}
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
              onClick={handleSubmit}
            >
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
