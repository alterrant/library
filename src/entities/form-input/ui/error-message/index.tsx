type ErrorMessageType = {
  errorMessage: string;
};
// TODO: изменить классы ошибок
export const ErrorMessage = ({ errorMessage }: ErrorMessageType) => (
  <div className='error-text-wrapper'>
    <div className='error-text-message'>{errorMessage}</div>
  </div>
);
