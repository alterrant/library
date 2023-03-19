import { facebook, instagram, vk, linkedin } from '../../shared/ui';

const SOCIAL_NETWORKS_NAMES = {
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  VK: 'vk',
  LINKEDIN: 'linkedin',
};

export const SOCIAL_NETWORKS = [
  { id: '0', src: facebook, alt: SOCIAL_NETWORKS_NAMES.FACEBOOK },
  { id: '1', src: instagram, alt: SOCIAL_NETWORKS_NAMES.INSTAGRAM },
  { id: '2', src: vk, alt: SOCIAL_NETWORKS_NAMES.VK },
  { id: '3', src: linkedin, alt: SOCIAL_NETWORKS_NAMES.LINKEDIN },
];
