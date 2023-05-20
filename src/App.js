import React from "react";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFaund from "./pages/NotFaund";

import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

export const SearchContext = React.createContext();
// console.log('search', SearchContext)

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFaund />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
