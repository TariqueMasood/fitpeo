import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Product from "./pages/product";
import Customers from "./pages/customers";
import NoPage from "./pages/noPage";
import Income from "./pages/income";
import Promote from "./pages/promote";
import Help from "./pages/help";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="customers" element={<Customers />} />
        <Route path="income" element={<Income />} />
        <Route path="promote" element={<Promote />} />
        <Route path="help" element={<Help />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
