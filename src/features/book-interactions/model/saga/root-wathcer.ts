import { takeLatest } from 'redux-saga/effects';

import { addCommentWorker } from './add-comment-worker';
import { bookingWorker } from './booking-worker';
import { cancelBookingWorker } from './cancel-booking-worker';
import { changeBookingDateWorker } from './change-booking-date-worker';
import { changeCommentWorker } from './change-comment-worker';
import { addComment, booking, cancelBooking, changeBookingDate, changeComment } from '../slice';

export function* modalsWatcher() {
  yield takeLatest(booking.type, bookingWorker);
  yield takeLatest(changeBookingDate.type, changeBookingDateWorker);
  yield takeLatest(cancelBooking.type, cancelBookingWorker);
  yield takeLatest(addComment.type, addCommentWorker);
  yield takeLatest(changeComment.type, changeCommentWorker);
}
