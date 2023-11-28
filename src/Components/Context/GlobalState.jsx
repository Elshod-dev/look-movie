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
  };

  const isLoading = (el) => {
    dispatch({
      type: "LOADING_DONE",
      payload: el,
    });
  };

  const detectTypes = (type) => {
    dispatch({
      type: "SEND_BANNER",
      payload: 0,
    });
    const movies = [];
    state.movies.map((movie) => {
      movie.movieTypes.map((movieType) => {
        if (type.toLowerCase() === movieType.type.toLowerCase()) {
          movies.push(movie);
        }
      });
    });
    setNewMovies(movies);
  };
  useEffect(() => {
    dispatch({
      type: "ADD_NEW_ITEM",
      payload: newMovies,
    });
  }, [newMovies]);
  const addData = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
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
      });
  }, []);

  const value = {
    detectTypes,
    state,
    sendBanner,
    isLoading,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
