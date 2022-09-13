import Main from "./layouts/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
