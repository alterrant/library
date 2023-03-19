const baseURL = '/api/comments';

export const COMMENTS_API = {
  addCommentURL: `${baseURL}`,
  getChangeCommentURL: (commentId: number) => `${baseURL}/${commentId}`,
};
