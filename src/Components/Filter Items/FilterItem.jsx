import React, { useContext, useRef, useState } from "react";
import styles from "./FilterItem.module.css";
import { Icon } from "../AppStyles";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalState.jsx";
function FilterItem({ movies }) {
  const { state, detectTypes, filtered, errorQuery, addPageData } =
    useContext(GlobalContext);
  const [isTrue, setIsTrue] = useState(false);
  const inputValue = useRef();
  const inputYear = useRef();
  const inputGenre = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let value = inputValue.current.value;
    let year = inputYear.current.value;
    let genre = inputGenre.current.value;
    let newMovies = [];
    movies.map((movie) => {
      if (value == "" && year == "" && genre == "") {
        filtered(false);
      } else {
        if (movie.movieName.toLowerCase().includes(value.toLowerCase())) {
          if (movie.releasedDate.includes(year)) {
            if (genre === "") {
              newMovies.push(movie);
            } else {
              movie.movieTypes.map((type) => {
                if (type.type.includes(genre)) {
                  newMovies.push(movie);
                } else {
                  filtered(true);
                }
              });
            }
          } else {
            filtered(true);
          }
        } else {
          filtered(true);
        }
      }
    });
    setIsTrue(false);
    detectTypes(newMovies, 0, 12);
    errorQuery({ value: inputValue.current.value, year: year, genre: genre });
    inputValue.current.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.select1}>
        <input
          onChange={() => {
            if (inputValue.current.value) {
              setIsTrue(true);
            } else {
              setIsTrue(false);
            }
          }}
          type="text"
          placeholder="Movie"
          ref={inputValue}
        />
        {isTrue && (
          <div
            onClick={() => {
              inputValue.current.value = "";
              setIsTrue(false);
            }}
          >
            <Icon.Close className={styles.close} />
          </div>
        )}
      </div>

      <div className={styles.select1}>
        <select ref={inputYear} name="year" className="select-input">
          <option value="">Year</option>
          {state.moviesYear.map((year) => (
            <option key={uuidv4()} value={year}>
              {year}
            </option>
          ))}
        </select>
        <Icon.ChevronDown />
      </div>
      <div className={styles.select1}>
        <select ref={inputGenre} name="type">
          <option value="">Genre</option>
          {state.moviesGenre.map((genre) => (
            <option key={uuidv4()} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <Icon.ChevronDown />
      </div>
      <button>
        <Icon.Search />
      </button>
    </form>
  );
}

export default FilterItem;
