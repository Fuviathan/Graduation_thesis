import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

export default function Header() {
  let value;
  if (typeof window !== "undefined") {
    value = JSON.parse(localStorage.getItem("user")) || null;
  }
  return (
    <div>
      <FirstRow />
      <SecondRow />
    </div>
  );
}
