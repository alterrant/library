import { ReactNode } from 'react';

import { RoundImage } from 'shared/ui';
import { Title } from './title';
import { Avatar } from './avatar';

import styles from './person-info.module.css';

type PersonInfoProps = {
  isGreeting?: boolean;
  uploadAvatar?: ReactNode;
};

export const PersonInfo = ({ uploadAvatar, isGreeting = true }: PersonInfoProps) => (
  <div className={styles.personInfo}>
    <Title isGreeting={isGreeting} />
    <RoundImage>
      <Avatar />
      {uploadAvatar}
    </RoundImage>
  </div>
);
