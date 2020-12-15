import logo from "./logo.svg";
import "./App.css";
import Home from "./component/home";
import Header from "../src/component/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Moviedetails from "./component/Moviedetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:No" exact component={Moviedetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
