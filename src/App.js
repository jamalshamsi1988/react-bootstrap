import React, { lazy } from "react";

import ProductsContexProvider from "./context/productContextProvider";


// import 'bootstrap/dist/css/bootstrap.min.css';
const Store = lazy(()=> import ("./components/Store"))
const App = () => {
  return (
    <ProductsContexProvider>
      <Store />
    </ProductsContexProvider>
  );
};

export default App;
