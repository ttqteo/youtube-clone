import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__full">
        <SidebarRow Icon={HomeIcon} Name="Home" selected type="full" />
        <SidebarRow Icon={ExploreOutlinedIcon} Name="Explore" type="full" />
        <SidebarRow
          Icon={SubscriptionsOutlinedIcon}
          Name="Subscriptions"
          type="full"
        />
        <div className="line" />
        <SidebarRow
          Icon={VideoLibraryOutlinedIcon}
          Name="Library"
          type="full"
        />
        <SidebarRow Icon={HistoryOutlinedIcon} Name="History" type="full" />
        <SidebarRow
          Icon={PlayCircleOutlineOutlinedIcon}
          Name="Your Video"
          type="full"
        />
        <SidebarRow
          Icon={QueryBuilderOutlinedIcon}
          Name="Watch Later"
          type="full"
        />
        <div className="line" />
        <span className="copyright">© 2021 Google LLC</span>
      </div>
      <div className="sidebar__min disabled" style={{ width: "72px" }}>
        <SidebarRow Icon={HomeIcon} Name="Home" selected type="min" />
        <SidebarRow Icon={ExploreOutlinedIcon} Name="Explore" type="min" />
        <SidebarRow
          Icon={SubscriptionsOutlinedIcon}
          Name="Subscriptions"
          type="min"
        />
        <SidebarRow Icon={VideoLibraryOutlinedIcon} Name="Library" type="min" />
      </div>
    </div>
  );
}
