import React from "react";
import { channel } from "../api";
import "./ChannelAbout.css";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";

export default function ChannelAbout({ channelId }) {
  return (
    <div className="channel-about">
      <div className="channel-about__left">
        <div className="channel-about__card">
          <div className="channel-about__title">Description</div>
          <span className="channel-about__description">
            {channel.find((channel) => channel.channelID === channelId).slogan}
          </span>
        </div>
        <div className="line" />
        <div className="channel-about__card">
          <div className="channel-about__title">Biography</div>
          <span className="channel-about__description">Nothing.</span>
        </div>
        <div className="line" />
        <div className="channel-about__card">
          <div className="channel-about__title">Link</div>
          <span className="channel-about__description">Nothing.</span>
        </div>
        <div className="line" />
      </div>
      <div className="channel-about__right">
        <div className="channel-about__card">
          <span style={{ fontWeight: "500" }}>Stats</span>
        </div>
        <div className="line" />
        <div className="channel-about__card">
          <span>Joined Sep 13, 2021</span>
        </div>
        <div className="line" />
        <div className="channel-about__card">
          <span>1,234,567,890 views</span>
        </div>
        <div className="line" />
        <EmojiFlagsIcon />
      </div>
    </div>
  );
}
