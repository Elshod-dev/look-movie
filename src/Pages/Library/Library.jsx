import styles from "./Library.module.css";
import backgroundLibrary from "../../Assets/backgroundLibrary.png";
import FilterItem from "../../Components/Filter Items/FilterItem.jsx";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/GlobalState.jsx";
import MovieItem from "../../Components/MovieItem/MovieItem.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
export function Library() {
  const { state } = useContext(GlobalContext);
  const background = {
    background: `linear-gradient(81deg, #111 31.92%, rgba(17, 17, 17, 0.00) 72.35%), url(${backgroundLibrary}), lightgray 295.604px -4.18px / 92.376% 104.171% no-repeat`,
  };
  return (
    <section className={styles.library_container}>
      {!state.libraryMovies && (
        <div className={styles.library}>
          <div style={background} className={styles.background}></div>
          <div className={`${styles.libraryTexts} container`}>
            <h1>Create Your Dream Cinema</h1>
            <p>
              Is a guide to designing a personalized movie theater experience
              with the right equipment, customized decor, and favorite films.
              This guide helps you bring the cinema experience into your own
              home with cozy seating, dim lighting, and movie theater snacks.{" "}
            </p>
          </div>
        </div>
      )}
      {state.libraryMovies && <Banner />}
      <div className={styles.library_movies}>
        {state.libraryMovies && (
          <div className={styles.movies}>
            {state.libraryMovies.map((movie) => (
              <MovieItem key={movie} movie={movie} />
            ))}
          </div>
        )}

        {!state.libraryMovies && (
          <div className={styles.library_ops}>
            <div>OOPS...</div>
            <div>We are very sorry!</div>
            <div>You don’t have any movies at your library.</div>
          </div>
        )}
      </div>
    </section>
  );
}
