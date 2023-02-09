import {getTermsLists} from "./utils";

import styles from './terms-lists.module.css';

type TermsListsProps = {
    termsData: any;
};

export const TermsLists = ({ termsData }: TermsListsProps) => (
    <section className={styles.termsListWrapper}>
        {getTermsLists(termsData)}
    </section>
);
