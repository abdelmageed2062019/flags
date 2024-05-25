import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStorage } from "./Context/GlobalContext";
import Home from "./Components/Home";
import Details from "./Components/Details/index";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/:name" element={<Details />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
