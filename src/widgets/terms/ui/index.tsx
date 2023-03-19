import { RULES_DATA } from '../config';
import { TermsLists } from '../../../entities/terms-lists';

import styles from './terms.module.css';

type TermsProps = {
  title: string;
};
export const Terms = ({ title }: TermsProps) => (
  <section className={styles.termsWrapper}>
    <h2>{title}</h2>
    <TermsLists termsData={RULES_DATA} />
  </section>
);
