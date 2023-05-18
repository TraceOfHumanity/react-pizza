import React from "react";
import styles from "./Search.module.scss";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="пошук піц...."
      />
      <AiOutlineSearch className={styles.icon} />
      {searchValue && <IoMdClose onClick={() => setSearchValue('')} className={styles.clearIcon} />}
    </div>
  );
};

export default Search;
