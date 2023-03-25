import { DispatchAnyType, Nullable } from 'shared/lib';
import { cancelBooking } from '../../model';

type CancelBookingHandlerProps = {
  bookId?: Nullable<number>;
  bookingId?: Nullable<number>;
  dispatch: DispatchAnyType;
  closeModal?: () => void;
};

export const cancelBookingHandler = ({ bookId, bookingId, dispatch, closeModal }: CancelBookingHandlerProps) => {
  if (bookId && bookingId) dispatch(cancelBooking({ bookingId, bookId }));

  if (closeModal) closeModal();
};
