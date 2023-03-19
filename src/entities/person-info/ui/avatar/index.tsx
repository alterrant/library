import { RoundImage, defaultAvatar } from '../../../../shared/ui';

type AvatarProps = {
  src?: string;
};

export const Avatar = ({ src }: AvatarProps) => (
  <RoundImage src={src ? src : defaultAvatar} alt='avatar' />
);
