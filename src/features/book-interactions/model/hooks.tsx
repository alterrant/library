import { useState } from 'react';

import { CalendarModel } from 'entities/calendar';
import { SelectRatingStateType, useAppDispatch } from 'shared/lib';
import { INITIAL_SELECTED_RATING } from '../lib';

export const useBooking = () => {
  const [selectedDate, setSelectedDay] = CalendarModel.useCalendarState();
  const dispatch = useAppDispatch();

  return {
    selectedDate,
    setSelectedDay,
    dispatch,
  };
};

export const useChangeBookingDate = (dateOrder: string) => {
  const [selectedDate, setSelectedDay] = CalendarModel.useCalendarState(new Date(dateOrder));
  const dispatch = useAppDispatch();

  return {
    selectedDate,
    setSelectedDay,
    dispatch,
  };
};

export const useRateBook = () => {
  const [selectRatingState, setSelectRatingState] = useState<SelectRatingStateType>({
    selectedRating: INITIAL_SELECTED_RATING,
  });
  const [commentText, setCommentText] = useState<string>();
  const dispatch = useAppDispatch();

  return {
    selectRatingState,
    setSelectRatingState,
    commentText,
    setCommentText,
    dispatch,
  };
};
