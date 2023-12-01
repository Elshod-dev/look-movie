export const initialState = {};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, movies: action.payload };
    case "ADD_PAGE_ITEMS":
      return { ...state, pageMovies: action.payload };
    case "ADD_PAGE_ITEMS1":
      return { ...state, newPageMovies: action.payload };
    case "ADD_NEW_ITEM":
      return { ...state, newMovies: action.payload };
    case "ADD_ITEMS":
      return { ...state, movies2: action.payload };
    case "LOADING_DONE":
      return { ...state, loadingDone: action.payload };
    case "ADD_TRUE":
      return { ...state, isWaiting: action.payload };
    case "ADD_RANDOM_BANNER":
      return { ...state, randomBannerMath: action.payload };
    case "SEND_BANNER":
      return { ...state, bannerIndex: action.payload };
    case "ADD_COLOR":
      return { ...state, randomColor: action.payload };
    case "MOVIES_GENRE":
      return { ...state, moviesGenre: action.payload };
    case "MOVIES_YEAR":
      return { ...state, moviesYear: action.payload };
    case "FILTERED":
      return { ...state, filtered: action.payload };
    case "ERROR_QUERY":
      return { ...state, errorQuery: action.payload };
    case "ADD_LOGIN":
      return { ...state, isLogged: action.payload };
    case "ADD_LIBRARY":
      return { ...state, libraryMovies: action.payload };

    default:
      return state;
  }
};
