import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/home";
import Html from "./Pages/html";
import Css from "./Pages/css";
import Javascript from "./Pages/javascript";


function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
  return <div>App.js file</div>;
}

export default App;