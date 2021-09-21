import "./App.css";
import Content from "./components/Home/index";
import Header from "./components/Header/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Watch from "./components/Watch";
import Channel from "./components/Channel";
import Search from "./components/Search";
import Sidebar from "./components/Siderbar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <div style={{ display: "flex" }}>
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route
            path="/watch/:videoLink"
            render={(props) => <Watch {...props} />}
          />
          <Route
            path="/channel/:channelId"
            render={(props) => (
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Channel {...props} />
              </div>
            )}
          />
          <Route path="/">
            <div style={{ display: "flex" }}>
              <Sidebar />
              <Content />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
