import "./App.css";
import Home from "./components/home";
import Detail from "./components/detail";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
