import "./App.css";
import Content from "./components/Content/index";
import Header from "./components/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Watch from "./components/Content/Watch";
import Channel from "./components/Content/Channel";
import Search from "./components/Content/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ marginTop: "52px" }}>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route
              path="/channel/:channelId"
              render={(props) => <Channel {...props} />}
            ></Route>
            <Route
              path="/watch/:videoLink"
              render={(props) => <Watch {...props} />}
            ></Route>
            <Route path="/">
              <Content />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
