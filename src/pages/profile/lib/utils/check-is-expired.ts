export const checkIsExpired = (dateOrder?: string) => {
  if (!dateOrder ) return false;

  const today = new Date().toLocaleDateString();
  const lastDay = new Date(dateOrder).toLocaleDateString();

  return today > lastDay;
};
