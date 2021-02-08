import "./App.css";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Navigation from "./components/navbar";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Compare from "./pages/compare";

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" exact component={Detail} />
        <Route path="/compare" exact component={Compare} />
      </Grid>
    </div>
  );
}

export default App;
