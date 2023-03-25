const baseURL = '/api/bookings';

export const BOOKING_API = {
  booking: `${baseURL}`,
  changeBooking: (bookingId: number) => `${baseURL}/${bookingId}`,
};
