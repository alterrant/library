const baseURL = '/api/comments';

export const COMMENTS_API = {
  addComment: `${baseURL}`,
  changeComment: (commentId: number) => `${baseURL}/${commentId}`,
};
