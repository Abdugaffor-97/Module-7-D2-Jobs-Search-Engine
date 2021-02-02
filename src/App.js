import "./App.css";
import Home from "./components/home";
import Detail from "./components/detail";
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={Detail} />
    </BrowserRouter>
  );
}

export default App;
