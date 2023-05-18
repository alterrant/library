import { LayoutModel } from 'widgets/layouts';
import { UserModel } from 'entities/user';
import { useAppSelector } from 'shared/lib';

export const useProfilePage = () => {
  const { user: currentUser } = useAppSelector(UserModel.userSelector);
  const isLoading = useAppSelector(LayoutModel.loadingsSelector);
  const isError = useAppSelector(LayoutModel.errorsSelector);

  return {
    currentUser,
    isLoading,
    isError
  };
};
