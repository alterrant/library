const baseURL = '/api/users';

export const USERS_API = {
  me: `${baseURL}/me`,
  changeUserInfo: (userId: number) => `${baseURL}/${userId}`,
};


