import React from "react";
import { videos } from "../api";
import VideoCard from "../elements/VideoCard";

export default function WatchRecommend() {
  return (
    <div style={{ margin: "20px 0 0 20px" }}>
      {videos.map((video, index) => (
        <VideoCard type="recommend" video={video} key={index} />
      ))}
    </div>
  );
}