//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Test from "./pages/Test";
import BlogDetails from "./pages/blog/BlogDetails";
import CategoryManagement from "./pages/CategoryManagement";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/categories" element={<CategoryManagement />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
