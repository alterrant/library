import { LayoutModel } from 'widgets/layouts';
import { BookModel } from 'entities/book';
import { UserModel } from 'entities/user';
import { useAppSelector } from '../../shared/lib';

export const useBookPage = () => {
  const { book: currentBook } = useAppSelector(BookModel.bookSelector);
  const { user: currentUser } = useAppSelector(UserModel.userSelector);

  const isLoading = useAppSelector(LayoutModel.loadingsSelector);
  const isError = useAppSelector(LayoutModel.errorsSelector);

  return {
    currentBook,
    currentUser,
    isLoading,
    isError
  };
};
