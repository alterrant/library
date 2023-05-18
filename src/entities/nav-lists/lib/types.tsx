import { sections } from '.';

export type SectionListProps = {
  section: (typeof sections)[number];
  categoryName: string;
  arrowClassName?: string;
  closeErrorsHandler?: () => void;
};

export type GenreType = {
  id: string;
  name: string;
  path: string;
};
export type CountedGenreType = {
  count: number | null;
} & GenreType;

export type GenresStateTypes = {
  isLoading: boolean;
  error: string;
  genres: GenreType[];
};
