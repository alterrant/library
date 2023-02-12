import { BOOK_INFO } from '.';

export type BookInfoTypes = [keyof typeof BOOK_INFO[0]];
export type ImgSlideType = {
    id: string;
    src: string;
    alt: string;
};
