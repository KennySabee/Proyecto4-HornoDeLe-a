import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Components/Container";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
