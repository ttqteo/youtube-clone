import React from "react";
import WatchVideoCard from "./WatchVideoCard";
import WatchVideoComment from "./WatchVideoComment";

export default function WatchVideo({ videoLink }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <WatchVideoCard videoLink={videoLink} />
      <WatchVideoComment />
    </div>
  );
}
