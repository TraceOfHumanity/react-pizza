import React from "react";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярності",
    sortProperty: "rating",
  });

  console.log(categoryId, sortType);

  React.useEffect(() => {
    fetch(`https://64579cb40c15cb14820ca98f.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType.sortProperty.replace('-', '')}&order=${sortType.sortProperty.includes('-') ? 'asc' : 'desc'}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={(item) => setCategoryId(item)}
          />
          <Sort value={sortType} onChangeSort={(item) => setSortType(item)} />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(7)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
