import { BookInteractionsModel } from 'features/book-interactions';
import { ProfileModel } from 'features/profile';
import { BooksModel } from 'entities/books';
import { NavListModel } from 'entities/nav-lists';
import { UserModel } from 'entities/user';
import { useAppSelector } from '../../shared/lib';

export const useProfilePage = () => {
  const { isLoading: isUserLoading, user: currentUser } = useAppSelector(UserModel.userSelector);
  const { isLoading: isNavLoading } = useAppSelector(NavListModel.genresSelector);
  const { isLoading: isBookInteractiveLoading } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { isLoading: isBooksLoading } = useAppSelector(BooksModel.booksSelector);
  const { isLoading: isProfileLoading } = useAppSelector(ProfileModel.profileSelector);
  const isLoading = isNavLoading || isBookInteractiveLoading || isBooksLoading || isProfileLoading || isUserLoading;

  return {
    currentUser,
    isLoading,
  };
};
