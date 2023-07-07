import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  NEXT_MOVIE,
  BACK_MOVIE,
} from "../actions/actions";
import { movies } from "../movies";

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
      if (state.sira < movies.length - 1) {
        return { ...state, sira: state.sira + 1 };
      } else {
        return state;
      }

    case BACK_MOVIE:
      if (state.sira !== 0) {
        return { ...state, sira: state.sira - 1 };
      }

    default:
      return state;
  }
};

export default reducers;
