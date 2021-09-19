import React from "react";
import { videos } from "../api";
import VideoCard from "../VideoCard";

export default function WatchRecommend() {
  return (
    <div style={{ margin: "20px 0 0 20px" }}>
      {videos.map((video) => (
        <VideoCard type="recommend" video={video} />
      ))}
    </div>
  );
}
