import { SOCIAL_NETWORKS } from '../config';

import styles from './contacts.module.css';

export const Contacts = () => (
    <div className={styles.contactsContainer}>
        {SOCIAL_NETWORKS.map(network => (
            <img key={network.id} src={network.src} alt={network.alt}/>
        ))}
    </div>
);
