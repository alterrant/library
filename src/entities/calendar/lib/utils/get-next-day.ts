export const getNextDay = (date: Date) => {
  const currentDate = new Date(date);

  return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
};
