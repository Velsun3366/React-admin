import App from "../App";
import About from "../views/About";
import Home from "../views/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;
