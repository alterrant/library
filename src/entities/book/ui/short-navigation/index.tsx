import { getShortNavigation } from '../../lib';

import styles from './short-navigation.module.css';
import {Nullable} from "../../../../shared/lib";
// TODO: в будущих спринтах изменить Breadcrumbs
type NavListProps = {
    genres: string;
    title: Nullable<string>;
}
export const ShortNavigation = ({genres, title}: NavListProps) =>  (
    <div className={styles.shortNavWrapper}>
        <span>{getShortNavigation(genres, title)}</span>
    </div>
);
