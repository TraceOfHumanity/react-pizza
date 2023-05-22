import React from "react";
import styles from "./Search.module.scss";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { SearchContext } from "../../App";

import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="пошук піц...."
      />
      <AiOutlineSearch className={styles.icon} />
      {value && (
        <IoMdClose onClick={onClickClear} className={styles.clearIcon} />
      )}
    </div>
  );
};

export default Search;
