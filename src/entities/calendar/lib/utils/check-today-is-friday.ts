export const checkTodayIsFriday = () => {
  const today = new Date();
  const todayNumberInWeek = today.getDay() + 1;
  const numberOfFriday = 6;

  return todayNumberInWeek === numberOfFriday;
};
