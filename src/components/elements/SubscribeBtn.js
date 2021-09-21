import React from "react";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import "./SubscribeBtn.css";

const handleSubscribe = () => {
  const btn = document.querySelector(".subscribe-btn");
  const icon = document.querySelector(".subscribe-btn-noti");
  btn.classList.toggle("subscribed");
  icon.classList.toggle("disabled");
  btn.innerHTML = `${
    btn.classList.contains("subscribed") ? "SUBSCRIBED" : "SUBSCRIBE"
  }`;
};

export default function SubscribeBtn({ channelVideo }) {
  return (
    <div
      style={{
        margin: "auto 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        className={`subscribe-btn ${channelVideo.isSubscribed && "subscribed"}`}
        onClick={handleSubscribe}
      >
        {channelVideo.isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
      </span>
      <div>
        <NotificationsOutlinedIcon
          className={`subscribe-btn-noti ${
            !channelVideo.isSubscribed && "disabled"
          } `}
        />
      </div>
    </div>
  );
}
