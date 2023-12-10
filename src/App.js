import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import ProductsContexProvider from "./context/productContextProvider";

import Mens from "./components/category/Mens";
import Jewelery from "./components/category/Jewelery";
import Women from "./components/category/Women";

import Electronic from "./components/category/Electronic";

const Store = lazy(() => import("./components/Store"));

const App = () => {
  return (
    <ProductsContexProvider>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/*" element={<Navigate to="/Store" />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Women />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronic" element={<Electronic />} />
      </Routes>
    </ProductsContexProvider>
  );
};

export default App;
