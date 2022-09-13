import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
