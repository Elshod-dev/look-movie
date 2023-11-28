import { useContext } from "react";

import { GlobalContext } from "../../Components/Context/GlobalState.jsx";
import Loading from "../../Components/Loading/Loading.jsx";
import MovieItem from "../../Components/MovieItem/MovieItem.jsx";
// Styles
import styles from "./Catalog.module.css";
import Banner from "../../Components/Banner/Banner.jsx";
import { motion } from "framer-motion";
import FilterItem from "../../Components/Filter Items/FilterItem.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
export function Catalog() {
  const { state } = useContext(GlobalContext);
  const { movies, newMovies, errorQuery } = state;
  let isReady = false;
  if (newMovies) {
    if (newMovies.length !== 0) {
      isReady = true;
    }
  }
  return (
    <section className={styles.catalog}>
      {state.isWaiting && <Loading />}
      {movies && <Banner />}
      {movies && <FilterItem movies={movies} />}
      {!state.isWaiting && state.movies && (
        <>
          {state.filtered && !isReady && (
            <div className={styles.filtered}>
              <div>OOPS...</div>
              <div>We are very sorry!</div>
              <div>
                No results were found for your search query "{errorQuery}".
              </div>
            </div>
          )}
          {!isReady && !state.filtered && (
            <motion.div layout className={styles.movies}>
              {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </motion.div>
          )}
          {isReady && (
            <motion.div layout className={styles.movies}>
              {newMovies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </motion.div>
          )}
        </>
      )}
      <Pagination />
    </section>
  );
}
