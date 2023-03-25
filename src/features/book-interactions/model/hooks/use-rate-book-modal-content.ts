import { useState } from 'react';

import { UserLib, UserModel } from 'entities/user';
import { SelectRatingStateType, useAppDispatch, useAppSelector } from '../../../../shared/lib';
import { INITIAL_SELECTED_RATING, INITIAL_SELECTED_TEXT } from '../../lib/configs';

export const useRateBookModalContent = (prevUserComment?: UserLib.CommentType) => {
  const { user: currentUser } = useAppSelector(UserModel.userSelector);
  const dispatch = useAppDispatch();

  const initialCommentRating = prevUserComment?.rating ?? INITIAL_SELECTED_RATING;
  const initialCommentText = prevUserComment?.text ?? INITIAL_SELECTED_TEXT;

  const [selectRatingState, setSelectRatingState] = useState<SelectRatingStateType>({
    selectedRating: initialCommentRating,
  });
  const [commentText, setCommentText] = useState(initialCommentText);

  return {
    selectRatingState,
    setSelectRatingState,
    commentText,
    setCommentText,
    dispatch,
    currentUser,
  };
};
