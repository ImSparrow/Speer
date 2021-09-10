import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Hero from "./pages/Hero";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Hero></Hero>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
