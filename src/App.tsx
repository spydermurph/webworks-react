//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
