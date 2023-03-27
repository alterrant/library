import { BookModel } from 'entities/book';
import { NavListModel } from 'entities/nav-lists';
import { UserModel } from 'entities/user';
import { BookInteractionsModel } from 'features/book-interactions';
import { useAppSelector } from '../../shared/lib';

export const useBookPage = () => {
  const { book: currentBook, isLoading: isBookLoading } = useAppSelector(BookModel.bookSelector);
  const { isLoading: isNavLoading } = useAppSelector(NavListModel.genresSelector);
  const { isLoading: isBookInteractiveLoading } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { user: currentUser } = useAppSelector(UserModel.userSelector);

  const isLoading = isNavLoading || isBookInteractiveLoading || isBookLoading;

  return {
    currentBook,
    currentUser,
    isLoading,
  };
};
