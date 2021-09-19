import React from "react";
import { video } from "../api";
import VideoCard from "../VideoCard";

export default function WatchRecommend() {
  return (
    <div style={{ margin: "20px 0 0 20px" }}>
      <VideoCard type="recommend" video={video} />
      <VideoCard type="recommend" video={video} />
      <VideoCard type="recommend" video={video} />
      <VideoCard type="recommend" video={video} />
      <VideoCard type="recommend" video={video} />
    </div>
  );
}
