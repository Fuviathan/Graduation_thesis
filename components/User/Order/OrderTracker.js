import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = [
  "Đang xử lý",
  "Đơn hàng đã tạo",
  "Đơn hàng đã được xác nhận",
  "Đã giao cho đơn vị vận chuyển",
  "Đang giao hàng",
  "Đã giao hàng",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((lable, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "20px",
                  color: "gray",
                  "&.Mui-active": {
                    color: "#917a67",
                  },
                  "&.Mui-completed": {
                    color: "green",
                  },
                },
                "& .MuiStepIcon-root": {
                  color: "#33333",
                  "&.Mui-active": {
                    color: "#917a67 !important",
                  },
                  "&.Mui-completed": {
                    color: "green",
                  },
                },
              }}
            >
              {lable}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
