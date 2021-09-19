import React from "react";
import "./ChannelCard.css";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import { Link } from "react-router-dom";

const handleSubscribe = () => {
  const btn = document.querySelector(".channel__sub-btn");
  const icon = document.querySelector(".channel__sub-noti");
  btn.classList.toggle("subscribed");
  icon.classList.toggle("disabled");
  btn.innerHTML = `${
    btn.classList.contains("subscribed") ? "SUBSCRIBED" : "SUBSCRIBE"
  }`;
};

export default function ChannelCard({ video }) {
  return (
    <div style={{ display: "flex", margin: "28px 0 12px" }}>
      <div className="channel-card__avatar">
        <Link to="/channel">
          <img src={video.userAvatar} className="channel-card__avatar-img" />
        </Link>
      </div>
      <Link to="/channel" className="channel-card__right">
        <span className="channel-card__name">{video.channel}</span>
        <span className="channel-card__info">
          {video.subscriber} subscribers • {video.quantityVideo} videos
        </span>
        <span className="channel-card__slogan">{video.channelSlogan}</span>
      </Link>
      <div
        style={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          className={`channel__sub-btn ${video.isSubscribed && "subscribed"}`}
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
  );
}
