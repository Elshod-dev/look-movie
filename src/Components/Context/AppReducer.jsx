export const initialState = {};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, movies: action.payload };
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
    case "asd":
      return { ...state, detect: action.payload };

    default:
      return state;
  }
};