import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Car-services/Home/Home";
import About from "./Car-services/About/About";
import Services from "./Car-services/Services/Services";
import Header from "./Car-services/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
