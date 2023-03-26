import React, { useState } from 'react';
import classNames from 'classnames';

import { Modals } from 'widgets/modals';
import { BookModel } from 'entities/book';
import { UserModel } from 'entities/user';
import { Button } from 'shared/ui';
import { ModalsStateType, useAppDispatch, useAppSelector } from 'shared/lib';
import { ModalContent } from '.';
import { EDIT_REVIEW, RATE_BOOK_TEXT, ModalNames } from '../../lib/configs';

import styles from './rate-book.module.css';
import buttonStyles from '../../../../shared/lib/css/button-styles.module.css';
// TODO: опустить modals до entities, решить импорты
type RateBookProps = {
  bookId: number;
  dataTestId?: string;
  customButtonText?: string;
};

export const RateBook = ({ bookId, dataTestId, customButtonText }: RateBookProps) => {
  const { user: currentUser } = useAppSelector(UserModel.userSelector);
  const [modalStatus, setModalStatus] = useState<ModalsStateType>({ isOpen: true });
  const dispatch = useAppDispatch();

  const prevUserComment = currentUser.comments?.find((comment) => comment.bookId === bookId);
  const isBookCommentedByUser = !!prevUserComment;

  const rateText = customButtonText ?? RATE_BOOK_TEXT;
  const buttonText = isBookCommentedByUser ? EDIT_REVIEW : rateText;

  const buttonClassName = classNames(
    buttonStyles.button,
    isBookCommentedByUser ? buttonStyles.changeable : buttonStyles.available
  );

  const isRateBookActiveModal = modalStatus.activeModal === ModalNames.RATE;

  const closeModal = () => setModalStatus({ isOpen: false });

  const handleClick = () => {
    setModalStatus({
      activeModal: ModalNames.RATE,
      isOpen: true,
    });
    // при открытии модалки идёт запрос за книгой - условия для теста
    if (customButtonText) dispatch(BookModel.getBook(bookId));
  };

  return (
    <>
      <Button
        dataTestId={dataTestId ? dataTestId : 'button-rate-book'}
        classButton={buttonClassName}
        buttonText={buttonText}
        classText={styles.buttonText}
        onClick={handleClick}
      />
      {isRateBookActiveModal && (
        <Modals dataTestId='modal-rate-book' modalStatus={modalStatus} closeModal={closeModal}>
          <ModalContent.RateBook prevUserComment={prevUserComment} bookId={bookId} closeModal={closeModal} />
        </Modals>
      )}
    </>
  );
};
