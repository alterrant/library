export enum ErrorMessages {
  FETCHING_GENRES_ERROR = 'Ошибка запроса жанров',
  FETCHING_BOOKS_ERROR = 'Ошибка запроса всех книг',
  FETCHING_BOOK_ERROR = 'Ошибка запроса книги',
  FETCHING_REGISTRATION_ERROR = 'Ошибка запроса регистрации',
  FETCHING_ME_ERROR = 'Ошибка запроса текущего пользователя',
  FETCHING_UPLOAD_ERROR = 'Что-то пошло не так, фото не сохранилось. Попробуйте позже!',
  FETCHING_FORGOT_PASS_ERROR = 'Ошибка запроса на восстановление пароля',
  FETCHING_RESET_PASS_ERROR = 'Ошибка восстановления паролей',
  FETCHING_BOOKING_ERROR = 'Что-то пошло не так, книга не забронирована. Попробуйте позже!',
  FETCHING_COMMENT_ERROR = 'Оценка не была отправлена. Попробуйте позже!',
  CHANGES_NOT_SAVED = 'Изменения не были сохранены. Попробуйте позже!',
  CANT_CANCEL_BOOKING = 'Не удалось снять бронирование книги. Попробуйте позже!',
  RELOAD_PAGE = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  REQUIRE = 'Поле не может быть пустым',
  INVALID_EMAIL = 'Введите корректный e-mail',
  INVALID_PHONE = 'В формате +375 (xx) xxx-xx-xx',
  INVALID_AUTHORISATION = 'Неверный логин или пароль!',
  INVALID_LOGIN = 'Используйте для логина латинский алфавит и цифры',
  LOGIN_DIGITAL = 'цифры',
  LOGIN_LATIN_ALPHABET = 'латинский алфавит',
  INVALID_PASSWORD = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  PASSWORD_LESS_EIGHT_SYMBOLS = 'не менее 8 символов',
  PASSWORD_CAPITAL_LETTER = 'с заглавной буквой',
  PASSWORD_DIGITAL = 'цифрой',
  PASSWORDS_MATCHING = 'Пароли не совпадают',
  USER_EXIST = 'Логин или пароль уже существуют',
  HIDDEN_ERROR = 'скрытая ошибка',
}
