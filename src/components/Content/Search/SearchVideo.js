import React from "react";
import VideoCard from "../VideoCard";
import { video } from "../api";
import ChannelCard from "../ChannelCard";
import SettingsIcon from "@material-ui/icons/Settings";
import "./SearchVideo.css";

export default function SearchVideo() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", width: "100%" }}>
      <div style={{ width: "1098px", margin: "0 auto", paddingTop: "24px" }}>
        <div className="search-filter-wrapper">
          <SettingsIcon />
          <span>FILTERS</span>
        </div>
        <div className="line"></div>
        <VideoCard type="search" video={video} />
        <ChannelCard video={video} />
        <div className="line"></div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "16px",
            margin: "18px 0 4px",
          }}
        >
          Last from {video.channel}
        </div>
        <VideoCard type="search" video={video} />
        <VideoCard type="search" video={video} />
        <VideoCard type="search" video={video} />
      </div>
    </div>
  );
}
