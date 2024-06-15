import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "@/state/Auth/Action";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import DeliveryAddressForm from "./DeliveryAddressForm";
// import OrderSummary from "./OrderSummary";

const steps = ["Add Delivery Address", "Order Summary", "Paytment"  ];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const dispatch = useDispatch();
  const address = useSelector((state) => state?.auth?.address);

  const [addressSelected, setAddressSelected] = React.useState({});
  console.log(addressSelected);

  const cart = useSelector((store) => store?.cart?.cart);
  console.log(cart)


  useEffect(() => {
    dispatch(getAllAddress());
  }, []);

  // const location = useLocation();
  // const querySearch = new URLSearchParams(location.search);

  // const step = querySearch.get("step");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20 mt-10">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step  key={label} {...stepProps}>
                <StepLabel
              {...labelProps}
              StepIconProps={{
                sx: {
                  "&.Mui-active": {
                    color: "#917a67",
                  },
                  "&.Mui-completed": {
                    color: "#ede2d1",
                  },
                  color: "brown-green", // Default color for inactive steps
                },
              }}
            >
              {label}
            </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
            

             */}
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            

            <Button color="inherit" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
            
          </React.Fragment>
        )}
      </Box>
      <div className="h-full mt-10">
             {activeStep == 0 && <DeliveryAddressForm address={address} setSelected={setAddressSelected} setActiveStep={setActiveStep}></DeliveryAddressForm>}
            {activeStep == 1 && <OrderSummary address={addressSelected} cart={cart} ></OrderSummary>}
      </div>
    </div>
  );
}
