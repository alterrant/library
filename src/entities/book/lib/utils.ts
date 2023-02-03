// import {BookInfoTypes} from "./types";

export const translateInfoKeys = (key:string) => {
    switch (key) {
        case ('publishing'): {
            return 'Издательство';
        }
        case 'publishingYear': {
            return 'Год издания';
        }
        case 'pages': {
            return 'Страниц';
        }
        case 'cover': {
            return 'Переплёт';
        }
        case 'formFactor': {
            return 'Формат';
        }
        case 'genre': {
            return 'Жанр';
        }
        case 'weight': {
            return 'Вес';
        }
        case 'isbn': {
            return 'ISBN';
        }
        case 'producer': {
            return 'Изготовитель';
        }
        default: {
            return ''
        }
    }
};
