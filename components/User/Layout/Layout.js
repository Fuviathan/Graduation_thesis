import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/components/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout(props) {
  return (
    <Provider store={store}>
      <div id="root">
        <ToastContainer></ToastContainer>
        <div className="flex flex-col justify-between min-h-screen overflow-y-scroll bg-white h-fit">
          <div>
            <Header />
          </div>
          <div className="bg-white">{props.children}</div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
