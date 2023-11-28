import { useContext } from "react";

import { GlobalContext } from "../../Components/Context/GlobalState.jsx";
import Loading from "../../Components/Loading/Loading.jsx";
import MovieItem from "../../Components/MovieItem/MovieItem.jsx";
// Styles
import styles from "./Catalog.module.css";
import Banner from "../../Components/Banner/Banner.jsx";
import { motion } from "framer-motion";
export function Catalog() {
  const { state } = useContext(GlobalContext);
  const { movies, newMovies } = state;
  let isReady = false;
  if (newMovies) {
    if (newMovies.length !== 0) {
      isReady = true;
    }
  }
  return (
    <section className={styles.catalog}>
      {movies && <Banner />}
      {state.isWaiting && <Loading />}
      {!state.isWaiting && state.movies && (
        <>
          {!isReady && (
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
    </section>
  );
}
