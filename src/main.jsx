import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
);
