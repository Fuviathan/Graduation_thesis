import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createrOrder } from "../../../State/Order/Action";
import AddressCard from "./AddressCard";
import { CustomTextField } from "@/components/Auth/CustomTextField";
import { green } from "@mui/material/colors";
import LocationSelector from "./LocationSelector";
import { set } from "react-hook-form";

const DeliveryAddressForm = ({ address, setSelected, setActiveStep }) => {
  const dispatch = useDispatch();
  const [selectedTinh, setSelectedTinh] = useState("");
  const [selectedQuan, setSelectedQuan] = useState("");
  const [selectedPhuong, setSelectedPhuong] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const data = new FormData(e.currentTarget);

    const address = {
      fullName: data.get("firstName"),
      email: data.get("email"),
      address: ` ${selectedTinh}, ${selectedQuan}, ${selectedPhuong}/ ${data.get(
        "address"
      )}`,
      mobileNumber: data.get("phoneNumber"),
    };
    const orderData = { address };
    console.log(orderData);
    setSelected(address);
    setActiveStep(1);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          {address?.map((item) => (
            <div key={item.id} className="p-5 border-b cursor-pointer py-7">
              <AddressCard address={item}></AddressCard>
              <Button
                sx={{
                  mt: 2,
                  bgcolor: "#917a67",
                  "&:hover": {
                    bgcolor: "#baaf9d",
                  },
                }}
                size="large"
                variant="contained"
                onClick={() => {
                  setSelected(item);
                  setActiveStep(1);
                }}
              >
                Chọn địa chỉ này
              </Button>
            </div>
          ))}
        </Grid>

        <Grid className="border" item xs={12} lg={7}>
          <div className="text-xl font-semibold uppercase">Địa chỉ nhận hàng mới</div>
          <Box className="p-5 shadow-md bordder rounded-s-sm">

            <form onSubmit={handleSubmit}>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} rowSpacing={5}>
                  <CustomTextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  ></CustomTextField>
                </Grid>

                <Grid item xs={12} sm={6} rowSpacing={5}>
                  <CustomTextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="given-name"
                  ></CustomTextField>
                </Grid>

                <Grid item xs={12} sm={6} rowSpacing={5}>
                  <CustomTextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  ></CustomTextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <LocationSelector
                    setSelectedTinhValue={setSelectedTinh}
                    setSelectedQuanValue={setSelectedQuan}
                    setSelectedPhuongValue={setSelectedPhuong}
                  />
                </Grid>
                <Grid item xs={12} rowSpacing={5}>
                  <CustomTextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="address"
                    multiline
                    rows={5}
                  ></CustomTextField>
                </Grid>

                <Grid item xs={12} sm={6} rowSpacing={5}>
                  <Button
                    sx={{
                      py: 1.5,
                      mt: 2,
                      bgcolor: "#917a67",
                      "&:hover": {
                        bgcolor: "#baaf9d",
                      },
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Chọn địa chỉ này
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
