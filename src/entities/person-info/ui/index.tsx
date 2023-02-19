import { Title } from './title';
import { Avatar } from './avatar';

import styles from './person-info.module.css';

type PersonInfoProps = {
    name: string;
    img?: string;
};
// Брать name и img из стора, а не пропсами
export const PersonInfo = ({ name, img }: PersonInfoProps) => (
    <div className={styles.personInfo}>
        <Title name={name}/>
        <Avatar src={img} />
    </div>
);
