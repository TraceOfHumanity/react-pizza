import React from "react";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFaund from "./pages/NotFaund";
import FullPizza from "./pages/FullPizza";

import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import MainLoyout from "./loyouts/MainLoyout";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<MainLoyout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFaund />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
