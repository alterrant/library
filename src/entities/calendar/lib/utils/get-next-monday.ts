export const getNextMonday = () => {
  const day = new Date();
  const dateOfNextMonday = day.getDate() + ((1 + 7 - day.getDay()) % 7 || 7);

  day.setDate(dateOfNextMonday);

  return day;
};
