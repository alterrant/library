export const getTomorrow = () => {
  const today = new Date();

  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
};
