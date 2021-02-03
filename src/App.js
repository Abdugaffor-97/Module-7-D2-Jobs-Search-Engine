import "./App.css";
import Home from "./pages/home";
import Detail from "./pages/detail";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={Detail} />
    </div>
  );
}

export default App;
