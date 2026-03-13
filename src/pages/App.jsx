import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";

import Homepage from "./Homepage";
import Product from "./Product";
import Pricing from "./Pricing";
import PageNotFound from "./PageNotFound";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
