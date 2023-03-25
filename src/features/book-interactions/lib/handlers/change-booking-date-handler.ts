import { DispatchAnyType, Nullable, toISOStringWithTimezone } from 'shared/lib';
import { changeBookingDate } from '../../model';

type ChangeBookingDateHandlerProps = {
  bookId?: Nullable<number>;
  bookingId?: Nullable<number>;
  dispatch: DispatchAnyType;
  closeModal?: () => void;
  currentUserId?: number;
  selectedDate: Nullable<Date>;
};

export const changeBookingDateHandler = ({
  currentUserId,
  bookId,
  bookingId,
  selectedDate,
  dispatch,
  closeModal,
}: ChangeBookingDateHandlerProps) => {
  if (currentUserId && bookId && bookingId && selectedDate) {
    const bookingData = {
      order: true,
      dateOrder: toISOStringWithTimezone(selectedDate),
      book: bookId.toString(),
      customer: currentUserId.toString(),
    };

    const bookingPayload = { data: bookingData };

    dispatch(changeBookingDate({ bookingId, bookingPayload }));
  }

  if (closeModal) closeModal();
};
