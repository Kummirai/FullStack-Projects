import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path={"/"} element={<Home />} />
      <Route path={"/reading"} element={<Reading />} />
      <Route path={"/search"} element={<Search />} />
      <Route path={"/saved"} element={<Saved />} />
    </Router>
  );
}

export default App;
