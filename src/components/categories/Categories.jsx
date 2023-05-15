import React from "react";

const Categories = ({value, onClickCategory}) => {
  console.log(value)
  // const [activeCategory, setActiveCatefory] = React.useState(0);

  const categories = [
    "Всі",
    "М'ясні",
    "Вегетеріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  // const onClickCategory = (index) => {
  //   setActiveCatefory(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
