import React from "react";
import styles from "./Search.module.scss";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className={styles.root}>
      <input className={styles.input} type="text" placeholder="пошук піц...." />
      <AiOutlineSearch className={styles.icon} />
    </div>
  );
};

export default Search;
