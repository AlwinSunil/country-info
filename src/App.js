import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
