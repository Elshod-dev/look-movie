import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";
import styles from "./PageButton.module.css";
{
  /* <div className={styles.dots}>...</div> */
}
function PageButton() {
  const { addPageData, state, detectTypes } = useContext(GlobalContext);
  const [active, setActive] = useState(0);
  let pageItems = [];
  let pageItems2 = [];

  if (state.movies) {
    let totalPages = Math.ceil(state.movies.length / 12);

    for (let page = 1; page <= totalPages; page++) {
      let itemsOnPage = page < totalPages ? 12 : state.movies.length % 12;
      pageItems.push(itemsOnPage);
    }
  }
  if (state.newMovies) {
    let totalPages = Math.ceil(state.newMovies.length / 12);
    for (let page = 1; page <= totalPages; page++) {
      let itemsOnPage = page < totalPages ? 12 : state.newMovies.length % 12;
      pageItems2.push(itemsOnPage);
    }
  }
  return (
    <>
      {!state.filtered &&
        state.movies &&
        pageItems.map((page, i) => {
          return (
            <button
              className={i == active ? styles.active : ""}
              key={i}
              onClick={() => {
                setActive(i);
                addPageData(state.movies, i * 12, (i + 1) * 12);
              }}
            >
              {i + 1 <= 10 ? "0" + (i + 1) : i + 1}
            </button>
          );
        })}
      {state.filtered &&
        pageItems2.map((page, i) => {
          return (
            <button
              key={i}
              className={i == active ? styles.active : ""}
              onClick={() => {
                setActive(i);
                detectTypes(state.newMovies, i * 12, (i + 1) * 12);
              }}
            >
              {i + 1 <= 10 ? "0" + (i + 1) : i + 1}
            </button>
          );
        })}
    </>
  );
}

export default PageButton;
