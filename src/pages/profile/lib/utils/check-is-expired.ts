import { getNextDay } from '../../../../entities/calendar/lib/utils/get-next-day';

export const checkIsExpired = (dateOrder?: string) => {
  if (!dateOrder) return false;

  const today = new Date();
  const lastOrderDay = new Date(dateOrder);

  const dayLastOrder = getNextDay(lastOrderDay);

  return today > dayLastOrder;
};
