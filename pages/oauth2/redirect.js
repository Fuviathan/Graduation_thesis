import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Authenticate from "@/components/Auth/Authenticate";
import { store } from "@/app/store";
import { ToastContainer } from "react-toastify";
const Redirect = () => {
  return (
    <Provider store={store}>
      <Authenticate></Authenticate>
    </Provider>
  );
};

export default Redirect;
