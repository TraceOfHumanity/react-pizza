import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({onChangePage}) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
