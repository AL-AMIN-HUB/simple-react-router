import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFounds from "./components/NotFounds/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendID">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="*">
            <NotFounds></NotFounds>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
