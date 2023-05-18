import { Contact } from './contact';
import { SOCIAL_NETWORKS } from '../config';

import styles from './contacts.module.css';

export const Contacts = () => (
  <div className={styles.contactsContainer}>
    {SOCIAL_NETWORKS.map((network) =>
      <Contact key={network.id} link={network.link} SVGComponent={network.SVGComponent} />)}
  </div>
);
