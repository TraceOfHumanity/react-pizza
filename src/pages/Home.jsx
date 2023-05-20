import React from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCategoryId, setCurentPage } from "../redux/slices/filterSlice";

import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Pagination from "../components/pagination/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, curentPage } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };

  const skeletons = [...new Array(7)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangePage = (number) => {
    dispatch(setCurentPage(number))
  }

  let pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  React.useEffect(() => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://64579cb40c15cb14820ca98f.mockapi.io/items?page=${curentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, curentPage]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination curentPage={curentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
