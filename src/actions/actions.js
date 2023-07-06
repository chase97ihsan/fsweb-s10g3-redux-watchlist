export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const BACK_MOVIE = "BACK_MOVIE";

export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const deleteFavorite = (id) => ({
  type: DELETE_FAVORITE,
  payload: id,
});

export const backMovie = {
  type: BACK_MOVIE,
};

export const nextMovie = {
  type: NEXT_MOVIE,
};
