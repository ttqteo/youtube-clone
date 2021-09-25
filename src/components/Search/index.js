import React from "react";
import VideoCard from "../elements/VideoCard";
import { channel, videos } from "../api";
import ChannelCard from "../elements/ChannelCard";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Search.css";

export default function Search() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          maxWidth: "1098px",
          margin: "24px auto",
          padding: "0 16px",
        }}
      >
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
            index > 0 && <VideoCard type="search" video={video} key={index} />
        )}
      </div>
    </div>
  );
}
