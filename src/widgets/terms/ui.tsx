import { TermsLists } from '../../entities/terms-lists';
import { RULES_DATA } from '../../entities/terms-lists/config';

import styles from './terms.module.css';

type TermsProps = {
    title: string;
}
// частный случай, что termsData совпадают для всех обоих страниц
// TODO: при необходимости сделать bll для Terms, запрос договора и хранить состояние
// TODO: шрифты
export const Terms = ({title}:TermsProps) => (
    <section className={styles.termsWrapper}>
        <h2>{title}</h2>
        <TermsLists termsData={RULES_DATA}/>
    </section>
);
