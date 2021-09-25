import "./App.css";
import Content from "./components/Home/index";
import Header from "./components/Header/Header";
import { Route, Switch, useLocation } from "react-router-dom";
import Watch from "./components/Watch";
import Channel from "./components/Channel";
import Search from "./components/Search";
import Sidebar from "./components/Siderbar/Sidebar";
import React from "react";

const handleClickApp = (e) => {
  document.querySelectorAll(".home-modal").forEach((value) => {
    if (
      !value.classList.contains("disabled") &&
      !e.target.closest(".video-option-icon")
    ) {
      value.classList.toggle("disabled");
      document.body.classList.toggle("modal-open", false);
    }
  });
};

function App() {
  let location = useLocation();
  React.useEffect(() => {
    if (location.pathname.includes("watch")) {
      document.querySelector(".sidebar").classList.add("toggle");
      document.querySelector(".sidebar").classList.remove("min");
      document.querySelector(".sidebar__full").classList.remove("disabled");
      document.querySelector(".sidebar__min").classList.add("disabled");
    } else {
      document.querySelector(".sidebar").classList.remove("toggle");
      document.querySelector(".sidebar").classList.remove("hide");
    }
    if (location.pathname.includes("channel")) {
      const width = document.querySelector(
        ".channel__tab-item.active"
      ).offsetWidth;
      document.querySelector(".channel__tab-line").style.width = width + "px";
    }
  }, [location]);
  return (
    <div className="App" onClick={(e) => handleClickApp(e)}>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route
            path="/watch/:videoLink"
            render={(props) => <Watch {...props} />}
          />
          <Route
            path="/channel/:channelId"
            render={(props) => <Channel {...props} />}
          />
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
