import { LinkedTextWithArrowType, ORIENTATION } from 'shared/lib';

export const TITLE = 'Регистрация';

export const INITIAL_STEP = 0;

enum SubmitTextSteps {
  STEP_1 = 'Следующий шаг',
  STEP_2 = 'Последний шаг',
  STEP_3 = 'Зарегистрироваться',
}

const PATH = 'auth';
const LINK_TEXT = 'Войти';
export const REGISTRATION_INFO = 'Есть учётная запись?';

export const SUBMIT_TEXT: readonly [SubmitTextSteps, SubmitTextSteps, SubmitTextSteps] = [
  SubmitTextSteps.STEP_1,
  SubmitTextSteps.STEP_2,
  SubmitTextSteps.STEP_3,
];

export const formFooterConfig: LinkedTextWithArrowType = {
  path: PATH,
  text: LINK_TEXT,
  orientation: ORIENTATION.RIGHT,
};
