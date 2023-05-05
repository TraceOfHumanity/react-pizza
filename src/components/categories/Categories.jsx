import React from "react";

const Categories = () => {
  const [activeCategory, setActiveCatefory] = React.useState(0);

  const categories = [
    "Всі",
    "М'ясні",
    "Вегетеріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  const onClickCategory = (index) => {
    setActiveCatefory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={activeCategory === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
