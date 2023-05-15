import React from "react";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categiryId, setCategiryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    fetch("https://64579cb40c15cb14820ca98f.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0,0)
  }, []);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categiryId} onClickCategory={(id) => setCategiryId(id)} />
          <Sort />
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
