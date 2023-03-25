export const timeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
} as const;

export enum ButtonText {
  BOOKED = 'забронирована',
  DELIVERED = 'занята до ',
  BOOKING = 'забронировать',
}

enum Styles {
  AVAILABLE = 'available',
  RESERVED = 'reserved',
  CHANGEABLE = 'changeable',
}

export enum BookStatus {
  AVAILABLE = 'available',
  BOOKED_BY_CURRENT_USER = 'bookedByCurrentUser',
  BOOKED_BY_USER = 'bookedByUser',
  DELIVERED = 'delivered',
}
export const bookStyles = {
  [BookStatus.BOOKED_BY_CURRENT_USER]: Styles.CHANGEABLE,
  [BookStatus.BOOKED_BY_USER]: Styles.RESERVED,
  [BookStatus.DELIVERED]: Styles.RESERVED,
  [BookStatus.AVAILABLE]: Styles.AVAILABLE,
};
