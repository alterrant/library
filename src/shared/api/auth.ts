const baseURL = '/api/auth';

export const AUTH_API = {
  auth: `${baseURL}/local`,
  register: `${baseURL}/local/register`,
  forgotPass: `${baseURL}/forgot-password`,
  resetPass: `${baseURL}/reset-password`,
};
