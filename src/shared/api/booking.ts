const baseURL = '/api/bookings';

export const BOOKING_API = {
  bookingURL: `${baseURL}`,
  getChangeBookingDateURL: (bookingId: number) => `${baseURL}/${bookingId}`,
  getCancelBookingURL: (bookingId: number) => `${baseURL}/${bookingId}`,
};
