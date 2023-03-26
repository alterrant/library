import { CalendarModel } from 'entities/calendar';
import { useAppDispatch } from 'shared/lib';

export const useChangeBookingDateModalContent = (dateOrder: string) => {
  const [selectedDate, setSelectedDay] = CalendarModel.useCalendarState(new Date(dateOrder));
  const dispatch = useAppDispatch();

  return {
    selectedDate,
    setSelectedDay,
    dispatch,
  };
};
