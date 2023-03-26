export const checkIsExpired = (dateOrder?: string) => {
  if (!dateOrder ) return false;

  const today = new Date();
  const lastDay = new Date(dateOrder);

  return today > lastDay;
};
