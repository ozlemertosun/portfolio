import { Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ommig" element={<About />} />
        <Route path="/projekter" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
