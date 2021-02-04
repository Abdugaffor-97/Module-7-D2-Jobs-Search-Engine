import "./App.css";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Navigation from "./components/navbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ marginTop: "80px" }}>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" exact component={Detail} />
    </div>
  );
}

export default App;
