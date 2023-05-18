import { ReactComponent as GitHub } from './ui/assets/github.svg';
import { ReactComponent as Telegram } from './ui/assets/telegram.svg';

const LINKS = {
  GITHUB: 'https://github.com/alterrant',
  TELEGRAM: 'https://t.me/alter_ant'
};

export const SOCIAL_NETWORKS = [
  { id: 0, SVGComponent: GitHub, link: LINKS.GITHUB },
  { id: 1, SVGComponent: Telegram, link: LINKS.TELEGRAM },
];
