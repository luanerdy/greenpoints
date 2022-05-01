import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CompanyProfile } from "../../pages/company profile";
import { Home } from "../../pages/home/index";
import { SignUp } from "../../pages/signUp";
import { Store_points } from "../../pages/store-pointsExchange";
import { Store_productsExchange } from "../../pages/store-productsExchange";

export const Main = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home title="Toto" description="Marquinhos é legal" />}
        />
        <Route path="/Company_profile" element={<CompanyProfile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/StorePoints" element={<Store_points />} />
        <Route path="/Storeproducts" element={<Store_productsExchange />} />
      </Routes>
    </Router>
  );
};
