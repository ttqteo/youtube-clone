import React from "react";
import { video } from "../api";
import { Avatar } from "antd";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./ContentChannel.css";
import ChannelPlaylistRow from "./ChannelPlaylistRow";

const handleSubscribe = () => {
  const btn = document.querySelector(".channel__sub-btn");
  const icon = document.querySelector(".channel__sub-noti");
  btn.classList.toggle("subscribed");
  icon.classList.toggle("disabled");
  btn.innerHTML = `${
    btn.classList.contains("subscribed") ? "SUBSCRIBED" : "SUBSCRIBE"
  }`;
};

function handleChannelTab(e) {
  if (e.target.closest(".channel__tab-search")) {
    document
      .querySelector(".channel__tab-search-input")
      .classList.remove("disabled");
    document.querySelector(".channel__tab-search-input").focus();
  } else {
    document
      .querySelector(".channel__tab-item.active")
      .classList.remove("active");
    e.target.classList.add("active");
    const line = document.querySelector(".channel__tab-line");
    line.style.left = e.target.offsetLeft + "px";
    line.style.width = e.target.offsetWidth + "px";
  }
}

export default function ContentChannel() {
  return (
    <div style={{ backgroundColor: "#F1F1F1", width: "100%" }}>
      <div
        className="channel-cover"
        style={{
          height: "270px",
          backgroundImage: `url(${video.coverChannel})`,
        }}
      ></div>
      <div style={{ backgroundColor: "#FFF" }}>
        <div style={{ margin: "0 auto", width: "1284px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 0 12px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar src={video.userAvatar} size={80}>
                {" "}
                {video.userAvatar ? "" : video.channel.charAt(0).toUpperCase()}
              </Avatar>
              <div style={{ margin: "auto 0 auto 16px" }}>
                <span className="channel__name">{video.channel}</span>
                <br />
                <span className="channel__sub">
                  {video.subscriber} subscribers
                </span>
              </div>
            </div>
            <div
              style={{
                margin: "auto 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                className={`channel__sub-btn ${
                  video.isSubscribed && "subscribed"
                }`}
                onClick={handleSubscribe}
              >
                {video.isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
              </span>
              <div>
                <NotificationsOutlinedIcon
                  className={`channel__sub-noti ${
                    !video.isSubscribed && "disabled"
                  } `}
                />
              </div>
            </div>
          </div>

          <div className="channel__tab" onClick={(e) => handleChannelTab(e)}>
            <div className="channel__tab-item active">HOME</div>
            <div className="channel__tab-item">VIDEOS</div>
            <div className="channel__tab-item">PLAYLISTS</div>
            <div className="channel__tab-item">COMMUNITY</div>
            <div className="channel__tab-item">CHANNELS</div>
            <div className="channel__tab-item">ABOUT</div>
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
      <div style={{ margin: "0 auto", width: "1284px", minHeight: "100vh" }}>
        <ChannelPlaylistRow
          name="iPhone 13"
          dsc="Learn about the new iPhone 13 and iPhone 13 Pro"
        />
        <hr />
        <ChannelPlaylistRow
          name="iPhone 13"
          dsc="Learn about the new iPhone 13 and iPhone 13 Pro"
        />
      </div>
    </div>
  );
}
