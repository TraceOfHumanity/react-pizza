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

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './redux/slices/filterSlice'

export const SearchContext = React.createContext();
// console.log('search', SearchContext)

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  console.log("app", searchValue);

  return (
    <div className="wrapper">
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFaund />} />
          </Routes>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
