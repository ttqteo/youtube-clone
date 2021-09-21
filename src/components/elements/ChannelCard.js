import React from "react";
import "./ChannelCard.css";
import { Link } from "react-router-dom";
import SubscribeBtn from "./SubscribeBtn";

export default function ChannelCard({ channel }) {
  return (
    <div style={{ display: "flex", margin: "28px 0" }}>
      <div className="channel-card__avatar">
        <Link to={`/channel/${channel.channelID}`}>
          <img src={channel.avatar} className="channel-card__avatar-img" />
        </Link>
      </div>
      <Link
        to={`/channel/${channel.channelID}`}
        className="channel-card__right"
      >
        <span className="channel-card__name">{channel.name}</span>
        <span className="channel-card__info">
          {channel.subscriber} subscribers • {channel.quantityVideo} videos
        </span>
        <span className="channel-card__slogan">{channel.slogan}</span>
      </Link>
      <SubscribeBtn channelVideo={channel} />
    </div>
  );
}
