import React from "react";
import VideoCard from "../VideoCard";
import { channel, videos } from "../api";
import ChannelCard from "../ChannelCard";
import SettingsIcon from "@material-ui/icons/Settings";
import "./SearchVideo.css";

export default function SearchVideo() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", width: "100%" }}>
      <div style={{ width: "1098px", margin: "24px auto" }}>
        <div className="search-filter-wrapper">
          <SettingsIcon />
          <span>FILTERS</span>
        </div>
        <div className="line"></div>
        <VideoCard type="search" video={videos[0]} />
        <ChannelCard channel={channel[0]} />
        <div className="line"></div>
        <div
          style={{
            fontWeight: "500",
            fontSize: "16px",
            margin: "18px 0 4px",
          }}
        >
          Last from {channel.name}
        </div>
        {videos.map(
          (video, index) =>
            index > 0 && <VideoCard type="search" video={video} />
        )}
      </div>
    </div>
  );
}
