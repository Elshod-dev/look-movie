import { createContext, useEffect, useReducer, useState } from "react";
import { storeReducer, initialState } from "./AppReducer.jsx";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const randomBannerMath = 0;
    dispatch({
      type: "ADD_NEW_ITEM",
      payload: newMovies,
    });
    dispatch({
      type: "ADD_RANDOM_BANNER",
      payload: randomBannerMath,
    });
  }, [newMovies]);

  const addRandomBanner = (movies) => {
    const randomBannerMath = Math.ceil(Math.random() * movies.length);
    dispatch({
      type: "ADD_RANDOM_BANNER",
      payload: randomBannerMath - 1,
    });
    const randomColor = Math.ceil(Math.random() * 360);
    dispatch({
      type: "ADD_COLOR",
      payload: randomColor,
    });
  };

  const sendBanner = (movie) => {
    dispatch({
      type: "ADD_RANDOM_BANNER",
      payload: movie,
    });
    dispatch({
      type: "SEND_BANNER",
      payload: movie,
    });
    const randomColor = Math.ceil(Math.random() * 360);
    dispatch({
      type: "ADD_COLOR",
      payload: randomColor,
    });
  };

  const isLoading = (el) => {
    dispatch({
      type: "LOADING_DONE",
      payload: el,
    });
  };
  const sort = (movies) => {
    let allTypes = [];
    movies.forEach((movie) => {
      allTypes = allTypes.concat(
        movie.movieTypes.map((typeObj) => typeObj.type.toLowerCase())
      );
    });
    let uniqueTypes = Array.from(new Set(allTypes));
    let moviesGenre = uniqueTypes.sort();
    dispatch({
      type: "MOVIES_GENRE",
      payload: moviesGenre,
    });

    let moviesYear = [];
    movies.map((movie) => {
      if (!moviesYear.includes(movie.releasedDate)) {
        moviesYear.push(movie.releasedDate);

        moviesYear.sort(function (a, b) {
          return a - b;
        });
      }
    });
    dispatch({
      type: "MOVIES_YEAR",
      payload: moviesYear,
    });
  };
  const detectTypes = (movies) => {
    dispatch({
      type: "SEND_BANNER",
      payload: 0,
    });
    setNewMovies(movies);
  };
  const addData = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  const filtered = (bool) => {
    dispatch({
      type: "FILTERED",
      payload: bool,
    });
  };
  const errorQuery = (query) => {
    dispatch({
      type: "ERROR_QUERY",
      payload: query,
    });
  };
  const loading = (bool) => {
    dispatch({
      type: "ADD_TRUE",
      payload: bool,
    });
  };

  useEffect(() => {
    loading(true);
    axios
      .get(`https://6560acc483aba11d99d151a5.mockapi.io/api/movies`)
      .then((res) => {
        addData(res.data);
        loading(false);
        addRandomBanner(res.data);
        sort(res.data);
      });
  }, []);

  const value = {
    detectTypes,
    state,
    sendBanner,
    isLoading,
    filtered,
    errorQuery,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
