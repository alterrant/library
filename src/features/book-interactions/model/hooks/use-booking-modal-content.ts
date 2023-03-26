import { CalendarModel } from 'entities/calendar';
import { useAppDispatch } from 'shared/lib';

export const useBookingModalContent = () => {
  const [selectedDate, setSelectedDay] = CalendarModel.useCalendarState();
  const dispatch = useAppDispatch();

  return {
    selectedDate,
    setSelectedDay,
    dispatch,
  };
};
