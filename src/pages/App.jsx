import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CitiesProvider } from "../contexts/CitiesContexts";
import { AuthProvider } from "../contexts/FakeAuthContext";
import ProtectedRoute from "./ProtectedRoute";
import "../index.css";

import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import SpinnerFullPage from "../components/SpinnerFullPage";

// import Homepage from "./Homepage";
// import Product from "./Product";
// import Pricing from "./Pricing";
// import PageNotFound from "./PageNotFound";
// import Login from "./Login";
// import AppLayout from "./AppLayout";

const Homepage = lazy(() => import("./Homepage"));
const Product = lazy(() => import("./Product"));
const Pricing = lazy(() => import("./Pricing"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const Login = lazy(() => import("./Login"));
const AppLayout = lazy(() => import("./AppLayout"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />

                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route index path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
