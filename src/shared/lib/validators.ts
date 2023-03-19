import { ErrorMessages } from '.';

export const validators = {
  passwordValidator(fieldValue: string) {
    return (
      (this.lengthLessThenEight(fieldValue) === true &&
        this.capitalLetter(fieldValue) === true &&
        this.digital(fieldValue, false) === true) ||
      ErrorMessages.INVALID_PASSWORD
    );
  },
  loginValidator(fieldValue: string) {
    return (
      (this.digital(fieldValue, true) === true && this.latinAlphabet(fieldValue) === true) ||
      ErrorMessages.INVALID_LOGIN
    );
  },
  phoneValidator(fieldValue: string) {
    return /\+375\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}/.test(fieldValue) || ErrorMessages.INVALID_PHONE;
  },
  digital(fieldValue: string, isLogin: boolean) {
    return (
      /\d+/.test(fieldValue) ||
      (isLogin ? ErrorMessages.LOGIN_DIGITAL : ErrorMessages.PASSWORD_DIGITAL)
    );
  },
  latinAlphabet(fieldValue: string) {
    return /[a-zA-Z]+/.test(fieldValue) || ErrorMessages.LOGIN_LATIN_ALPHABET;
  },
  lengthLessThenEight(fieldValue: string) {
    return (
      /^[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]{8,}$/gu.test(fieldValue) ||
      ErrorMessages.PASSWORD_LESS_EIGHT_SYMBOLS
    );
  },
  capitalLetter(fieldValue: string) {
    return /[A-Z]+/.test(fieldValue) || ErrorMessages.PASSWORD_CAPITAL_LETTER;
  },

  emailValidator(fieldValue: string) {
    return /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,63}$/i.test(fieldValue) || ErrorMessages.INVALID_EMAIL;
  },
  retryPasswordValidation(fieldValue: string, password: string) {
    return fieldValue === password || ErrorMessages.PASSWORDS_MATCHING;
  },
};
