export const checkIsWeekend = (numberInWeek: number) => {
  const numberOfSunday = 1;
  const numberOfSaturday = 7;

  return numberInWeek === numberOfSunday || numberInWeek === numberOfSaturday;
};
