import classNames from 'classnames';

import { Button, Stars, Templates } from '../../../../shared/ui';
import { Nullable } from '../../../../shared/lib';
import { addComment, useRateBook } from '../../model';
import { ModalButtonTexts, ModalTitles, RATE_BOOK_PLACEHOLDER, SELECTED_RATING } from '../../lib';

import buttonStyles from '../../../../shared/lib/css/button-styles.module.css';
import styles from './rate-book.module.css';

type RateBookProps = {
  bookId?: Nullable<number>;
  currentUserId: number;
  closeModal: () => void;
};

export const RateBook = ({ bookId, currentUserId, closeModal }: RateBookProps) => {
  const { selectRatingState, setSelectRatingState, commentText, setCommentText, dispatch } =
    useRateBook();

  const rateBookHandler = () => {
    if (bookId && currentUserId && selectRatingState && commentText)
      dispatch(
        addComment({
          data: {
            rating: selectRatingState.selectedRating,
            text: commentText,
            book: bookId.toString(),
            user: currentUserId.toString(),
          },
        })
      );

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
        {/* после тестов вернуть isInvertStars */}
        <Stars
          rating={selectRatingState.selectedRating}
          setRatingState={setSelectRatingState}
        />
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
