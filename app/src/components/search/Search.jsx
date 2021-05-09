import React from "react";
import styles from "../search/search.module.css";

function Search(value = "...") {
  return (
    <>
      <div className={styles.search_text}>
        <input
          type="search"
          name="searchuser"
          className={styles.search_text_input}
          placeholder="Search user..."
          // value={value}
          // onClick={onClickInput}
          //   onChange={onChange}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="false"
        />
      </div>
    </>
  );
}

export default Search;
