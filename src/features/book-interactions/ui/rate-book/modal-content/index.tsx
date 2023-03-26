import classNames from 'classnames';

import { UserLib } from 'entities/user';
import { Button, Stars, Templates } from 'shared/ui';
import { Nullable } from 'shared/lib';
import { addComment, changeComment, hooks } from '../../../model';
import { ModalButtonTexts, ModalTitles, RATE_BOOK_PLACEHOLDER, SELECTED_RATING } from '../../../lib/configs';

import buttonStyles from '../../../../../shared/lib/css/button-styles.module.css';
import styles from './rate-book.module.css';

type RateBookProps = {
  bookId?: Nullable<number>;
  closeModal: () => void;
  prevUserComment?: UserLib.CommentType;
};

export const RateBook = ({ bookId, closeModal, prevUserComment }: RateBookProps) => {
  const { selectRatingState, setSelectRatingState, commentText, setCommentText, dispatch, currentUser } =
    hooks.useRateBookModalContent(prevUserComment);

  const rateBookHandler = () => {
    if (bookId && currentUser.id && selectRatingState && commentText) {
      const comment = {
        rating: selectRatingState.selectedRating,
        text: commentText,
        book: bookId.toString(),
        user: currentUser.id.toString(),
      };

      const commentPayload = { data: comment };

      if (prevUserComment) dispatch(changeComment({ commentId: prevUserComment.id, commentPayload }));
      else dispatch(addComment(commentPayload));
    }

    closeModal();
  };

  return (
    <Templates.Booking
      title={ModalTitles.RATE_BOOK}
      buttons={
        <Button
          dataTestId='button-comment'
          classButton={classNames(buttonStyles.button, buttonStyles.available)}
          buttonText={ModalButtonTexts.RATE_BOOK}
          classText={buttonStyles.buttonText}
          onClick={rateBookHandler}
        />
      }
    >
      <div className={styles.rating}>
        <p className={styles.title}>{SELECTED_RATING}</p>
        <Stars rating={selectRatingState.selectedRating} setRatingState={setSelectRatingState} />
      </div>

      <textarea
        data-test-id='comment'
        className={styles.textarea}
        placeholder={RATE_BOOK_PLACEHOLDER}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
    </Templates.Booking>
  );
};
