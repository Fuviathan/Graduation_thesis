import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

export default function Header() {
  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem("userInformation")) || null;
  }
  return (
    <div>
      <FirstRow user={value}/>
      <SecondRow />
    </div>
  );
}
