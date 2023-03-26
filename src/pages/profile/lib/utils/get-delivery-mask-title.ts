import { DeliveryInfo } from '../../config';

export const getDeliveryMaskTitle = (isDeliveryExpired: boolean) =>
  isDeliveryExpired ? DeliveryInfo.WARNING_MASK_TITLE : DeliveryInfo.MASK_TITLE;
