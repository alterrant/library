import { TextWithHighlights } from 'shared/ui';
import { validators } from 'shared/lib';

import styles from './help-text.module.css';

type HelpTextType = {
  inputValue: string | undefined;
  text: string;
  filter?: string;
};
// helpers - массив подстрок, по которым сравнивается текст, чтобы его подсвечивать.
// Находит подстроку в тексте - подсвечивает. Массив заполняется только по мере не пройденных
// валидаторов
export const HelpText = ({ text, filter, inputValue }: HelpTextType) => {
  const helpers: string[] = [];

  if (inputValue) {
    const digitalLogin = validators.digital(inputValue, true);
    const digitalPass = validators.digital(inputValue, false);
    const capital = validators.capitalLetter(inputValue);
    const lengthLessThenEight = validators.lengthLessThenEight(inputValue);
    const latinAlphabet = validators.latinAlphabet(inputValue);
    const phone = validators.phoneValidator(inputValue);

    if (digitalLogin !== true) helpers.push(digitalLogin);
    if (digitalPass !== true) helpers.push(digitalPass);
    if (capital !== true) helpers.push(capital);
    if (lengthLessThenEight !== true) helpers.push(lengthLessThenEight);
    if (latinAlphabet !== true) helpers.push(latinAlphabet);
    if (phone !== true) helpers.push(phone);
  }

  return (
    <div className={styles.wrapper}>
      <TextWithHighlights title={text} filter={filter ? filter : helpers} />
    </div>
  );
};
