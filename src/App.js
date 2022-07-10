import Index from "./pages/Index";
import Service from "./pages/Service/index";
import Portfolio from "./pages/Portfolio/index";
import Team from "./pages/Team/index";
import Contact from "./pages/Contact/index";
import { Routes, Route } from "react-router-dom";

import "./styles/style.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
