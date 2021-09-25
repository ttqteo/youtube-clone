import React, { useEffect, useState } from "react";
import { channel, playlists, videos } from "../api";
import { Avatar } from "antd";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./ContentChannel.css";
import ChannelPlaylistRow from "./ChannelPlaylistRow";
import SubscribeBtn from "../elements/SubscribeBtn";
import ChannelVideos from "./ChannelVideos";
import ChannelPlaylistFull from "./ChannelPlaylistFull";
import ChannelAbout from "./ChannelAbout";

function handleChannelTab(e) {
  if (e.target.closest(".channel__tab-search")) {
    document
      .querySelector(".channel__tab-search-input")
      .classList.remove("disabled");
    document.querySelector(".channel__tab-search-input").focus();
  }
  if (e.target.closest(".channel__tab-item")) {
    document
      .querySelector(".channel__tab-item.active")
      .classList.remove("active");
    document
      .querySelector(".channel__tab-content.active")
      .classList.remove("active");
    e.target.classList.add("active");
    const index = e.target.getAttribute("data-index");
    document
      .querySelectorAll(".channel__tab-content")
      [index].classList.add("active");
    const line = document.querySelector(".channel__tab-line");
    line.style.left = e.target.offsetLeft + "px";
    line.style.width = e.target.offsetWidth + "px";
  }
}

export default function Channel(props) {
  const [scrollTop, setScrollTop] = useState(0);
  const { channelId } = props.match.params;
  const channelVideo = channel.find((value) => value.channelID === channelId);
  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document
      .querySelector(".channel__tab-wrapper")
      .classList.toggle("fixed", scrollTop > 380);
    document
      .querySelector(".channel__tab")
      .classList.toggle("fixed", scrollTop > 380);
  }, [scrollTop]);

  return (
    <div
      style={{ width: "100%", background: "var(--channel-background-color)" }}
    >
      <div
        className="channel-cover"
        style={{
          backgroundImage: `url(${channelVideo.cover})`,
        }}
      />
      <div className="channel__info">
        <div
          style={{ margin: "0 auto", maxWidth: "1284px", padding: "0 16px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 0 12px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar src={channelVideo.avatar} size={80}>
                {" "}
                {channelVideo.avatar
                  ? ""
                  : channelVideo.avatar.charAt(0).toUpperCase()}
              </Avatar>
              <div style={{ margin: "auto 0 auto 16px" }}>
                <span className="channel__name">{channelVideo.name}</span>
                <br />
                <span className="channel__sub">
                  {channelVideo.subscriber} subscribers
                </span>
              </div>
            </div>
            <SubscribeBtn channelVideo={channelVideo} />
          </div>
          <div className="channel__tab" onClick={(e) => handleChannelTab(e)}>
            <div className="channel__tab-item active" data-index="0">
              HOME
            </div>
            <div className="channel__tab-item" data-index="1">
              VIDEOS
            </div>
            <div className="channel__tab-item" data-index="2">
              PLAYLISTS
            </div>
            <div className="channel__tab-item" data-index="3">
              COMMUNITY
            </div>
            <div className="channel__tab-item" data-index="4">
              CHANNELS
            </div>
            <div className="channel__tab-item" data-index="5">
              ABOUT
            </div>
            <div className="channel__tab-search">
              <SearchOutlinedIcon className="channel__tab-search-icon" />
              <input
                placeholder="Search"
                className="channel__tab-search-input disabled"
              />
            </div>
            <div className="channel__tab-line"></div>
          </div>
        </div>
      </div>
      <div className="channel__tab-wrapper"></div>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1284px",
          padding: "0 16px",
          minHeight: "100vh",
        }}
      >
        <div className="channel__tab-content active">
          {playlists.map((playlist, index) => (
            <div key={index}>
              <ChannelPlaylistRow
                name={playlist.name}
                dsc={playlist.dsc}
                index={index}
                playlist={playlist}
              />
              {index < playlists.length - 1 && <div className="line" />}
            </div>
          ))}
        </div>
        <div className="channel__tab-content">
          <ChannelVideos videos={videos} />
        </div>
        <div className="channel__tab-content">
          <ChannelPlaylistFull channelId={channelId} />
        </div>
        <div className="channel__tab-content">
          <span>Community Coming soon.</span>
        </div>
        <div className="channel__tab-content">
          <span>Channels Coming soon.</span>
        </div>
        <div className="channel__tab-content">
          <ChannelAbout channelId={channelId} />
        </div>
      </div>
    </div>
  );
}
