import { takeLatest } from 'redux-saga/effects';

import { authorisationWorker } from './authorisation-worker';
import { forgotPasswordWorker } from './forgot-password-worker';
import { registrationWorker } from './registration-worker';
import { resetPasswordWorker } from './reset-password-worker';
import { authorisation, forgotPassAttempt, registration, resetPassAttempt } from '../slice';

export function* authWatcher() {
  yield takeLatest(authorisation.type, authorisationWorker);
  yield takeLatest(registration.type, registrationWorker);
  yield takeLatest(forgotPassAttempt.type, forgotPasswordWorker);
  yield takeLatest(resetPassAttempt.type, resetPasswordWorker);
}
