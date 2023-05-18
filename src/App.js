import React from "react";

import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFaund from "./pages/NotFaund";
import Sort from "./components/sort/Sort";
import PizzaBlock from "./components/pizzaBlock/PizzaBlock";
import Skeleton from "./components/pizzaBlock/Skeleton";

import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

function App() {
const [searchValue, setSearchValue] = React.useState('')
console.log('app', searchValue)

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFaund />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
