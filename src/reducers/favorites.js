import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  NEXT_MOVIE,
  BACK_MOVIE,
} from "../actions/actions";

const initialState = {
  favorites: [],
  sira: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (!state.favorites.includes(action.payload)) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    case DELETE_FAVORITE:
      debugger;
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };
    case BACK_MOVIE:
      return { ...state, sira: state.sira - 1 };

    default:
      return state;
  }
};

export default reducers;
