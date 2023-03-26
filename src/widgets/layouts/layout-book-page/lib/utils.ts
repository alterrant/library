import { GenreType } from 'entities/nav-lists';

export const findCurrentGenre = (allGenres: GenreType[], pathname: { genres: string; id: string }) =>
  allGenres.find((genre) => genre.path === pathname.genres);
