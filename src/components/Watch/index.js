import React from "react";
import WatchRecommend from "./WatchRecommend";
import WatchVideo from "./WatchVideo";
import "./Watch.css";

export default function Watch(props) {
  const { videoLink } = props.match.params;
  return (
    <div className="watch" style={{ maxWidth: "1700px", margin: "auto" }}>
      <WatchVideo videoLink={videoLink} />
      <WatchRecommend />
    </div>
  );
}
