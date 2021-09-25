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

const handleFeature = () => {
  document.querySelector(".feature").classList.toggle("disabled");
};

const handleWatch = (e) => {
  if (e.target.closest(".App").querySelector(".watch")) {
    document.querySelector(".sidebar").classList.toggle("hide");
  }
};

export default function Sidebar() {
  return (
    <div className="sidebar" onClick={(e) => handleWatch(e)}>
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
        <div className="line" />
        <div
          style={{
            fontWeight: "500",
            margin: "8px 24px 4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={handleFeature}
        >
          ► Tính năng{" "}
        </div>
        <ul className="feature disabled">
          <li>• DarkMode</li>
          <li>• Tắt/mở Sidebar</li>
          <li>• Search (chỉ Apple)</li>
          <li>• Vào Channel riêng</li>
          <li>• Xem Video</li>
          <li>• Hover từng Video</li>
          <li>• Sub/unsub</li>
          <li>• Modal option Video</li>
          <li>• Từng tab Channel</li>
          <li>• Responsive Tablet, Mobile</li>
          <li style={{ fontWeight: "500" }}>Sắp phát triển</li>
          <li>• Đang cập nhật...</li>
        </ul>
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
