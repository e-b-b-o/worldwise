import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "../index.css";
import Homepage from "./Homepage";
import Product from "./Product";
import Pricing from "./Pricing";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import AppLayout from "./AppLayout";
import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import { CitiesProvider } from "../contexts/CitiesContexts";



function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />

            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route index path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
