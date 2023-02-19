export const getAuthors = (authors: string[]) => authors.join(', ');

export const getBookGenre = (genres: string[], currentGenre: string | undefined) => {
    if (currentGenre !== 'all') return currentGenre;
    return genres[0];
};
