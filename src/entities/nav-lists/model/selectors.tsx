import { GenresStateTypes } from "../lib";

export const genresSelector = (state: RootState): GenresStateTypes => state.bookGenres;
