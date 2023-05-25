import React from "react";

import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  setCategoryId,
  setcurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { setItems } from "../redux/slices/pizzaSlice";
import { useNavigate } from "react-router-dom";

import Categories from "../components/categories/Categories";
import Sort, { list } from "../components/sort/Sort";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Pagination from "../components/pagination/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const  items  = useSelector((state) => state.pizza.items);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = React.useContext(SearchContext);
  // const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };

  const skeletons = [...new Array(7)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onChangePage = (number) => {
    dispatch(setcurrentPage(number));
  };

  const fetchPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    try {
      const { data } = await axios.get(
        `https://64579cb40c15cb14820ca98f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      dispatch(setItems(data));
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  let pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
