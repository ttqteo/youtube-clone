import React from "react";
import Sidebar from "../Siderbar/Sidebar";
import SearchVideo from "./SearchVideo";

export default function Search() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <SearchVideo />
    </div>
  );
}
