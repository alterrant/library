import { Img } from 'shared/ui';
import { useAppSelector } from 'shared/lib';
import defaultAvatar from 'shared/ui/assets/default-avatar.svg';
import { userSelector } from '../../../model';

export const Avatar = () => {
  const { user } = useAppSelector(userSelector);

  return <Img alt='avatar' url={user.avatar} defaultSrc={defaultAvatar} />;
};
