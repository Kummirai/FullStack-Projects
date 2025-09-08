import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Reading from "./pages/Reading";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/reading"} element={<Reading />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/saved"} element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
