import React from "react";
import Sidebar from "./Siderbar/Sidebar";
import RecommendVideo from "./Home/index";

export default function Content() {
  return (
    <div className="content" style={{ display: "flex" }}>
      <Sidebar />
      <RecommendVideo />
    </div>
  );
}
