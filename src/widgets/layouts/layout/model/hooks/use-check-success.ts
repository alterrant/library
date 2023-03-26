import { ProfileModel } from 'features/profile';
import { BookInteractionsModel } from 'features/book-interactions';
import { useAppSelector } from 'shared/lib';
import { CheckSuccessesType, SuccessSelectorNames } from '../../lib';

export const useCheckSuccesses = (): CheckSuccessesType => {
  const { successMessage: bookInteractionsSuccess } = useAppSelector(BookInteractionsModel.bookInteractionsSelector);
  const { success: profileSuccess } = useAppSelector(ProfileModel.profileSelector);

  return {
    isSuccess: !!(bookInteractionsSuccess || profileSuccess),
    successSelector:
      (bookInteractionsSuccess && SuccessSelectorNames.bookInteractionsSuccess) ||
      (profileSuccess && SuccessSelectorNames.profileSuccess) ||
      '',
    successMessage: bookInteractionsSuccess || profileSuccess || '',
  };
};
