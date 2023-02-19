import { all } from "redux-saga/effects";

import { NavListModel } from "../../entities/nav-lists";
import { BooksModel } from "../../entities/books";
import { BookModel } from "../../entities/book";

export function* rootWatcher(): Generator {
    yield all([
        NavListModel.genresWatcher(),
        BooksModel.booksWatcher(),
        BookModel.bookWatcher()
    ]);
}
