import MovieType from "../MovieType/MovieType.jsx";
import styles from "./MovieItem.module.css";
import ContentLoader from "react-content-loader";
import { useContext, useState } from "react";

import { motion } from "framer-motion";
import { GlobalContext } from "../Context/GlobalState.jsx";
function MovieItem({ movie }) {
  const context = useContext(GlobalContext);
  const [isLoad, setIsLoad] = useState(false);
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={styles.movie}
    >
      <div
        className={styles.movieImg}
        onClick={() => {
          context.isLoading(false);
          if (context.state.newMovies.length !== 0) {
            context.state.newMovies.map((movies, i) => {
              if (movies === movie) {
                context.sendBanner(i);
                if (context.state.bannerIndex === i) {
                  context.isLoading(true);
                }
              }
            });
          } else {
            context.state.movies.map((movies, i) => {
              if (movies === movie) {
                context.sendBanner(i);
                if (context.state.bannerIndex === i) {
                  context.isLoading(true);
                }
              }
            });
          }
        }}
      >
        <div>
          {!isLoad && (
            <ContentLoader
              speed={3}
              width={0}
              height={0}
              backgroundColor="#000"
              foregroundColor="#0E0D16"
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
            </ContentLoader>
          )}
          {
            <img
              onLoad={() => {
                setIsLoad(true);
              }}
              loading="lazy"
              src={movie.movieSmallImg}
            />
          }
        </div>
      </div>
      <h2>{movie.movieName}</h2>
      <div className={styles.movieInfo}>
        <li>{movie.rated}</li>
        <MovieType types={movie.movieTypes} />
        <li>{movie.releasedDate}</li>
      </div>
    </motion.div>
  );
}

export default MovieItem;
