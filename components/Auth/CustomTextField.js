import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
  "& .MuiInputLabel-root": {
    color: "gray",
    "&.Mui-focused": {
      color: "gray",
    },
  },
});
