import { DeliveryInfo } from '../../config';

export const getDeliveryMaskSubtitle = (isDeliveryExpired: boolean) =>
  isDeliveryExpired ? DeliveryInfo.WARNING_MASK_SUBTITLE : null;
