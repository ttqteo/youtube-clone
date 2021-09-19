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

export default function ChannelCard({ channel }) {
  return (
    <div style={{ display: "flex", margin: "28px 0" }}>
      <div className="channel-card__avatar">
        <Link to="/channel">
          <img src={channel.avatar} className="channel-card__avatar-img" />
        </Link>
      </div>
      <Link to="/channel" className="channel-card__right">
        <span className="channel-card__name">{channel.name}</span>
        <span className="channel-card__info">
          {channel.subscriber} subscribers • {channel.quantityVideo} videos
        </span>
        <span className="channel-card__slogan">{channel.slogan}</span>
      </Link>
      <div
        style={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          className={`channel__sub-btn ${channel.isSubscribed && "subscribed"}`}
          onClick={handleSubscribe}
        >
          {channel.isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
        </span>
        <div>
          <NotificationsOutlinedIcon
            className={`channel__sub-noti ${
              !channel.isSubscribed && "disabled"
            } `}
          />
        </div>
      </div>
    </div>
  );
}
