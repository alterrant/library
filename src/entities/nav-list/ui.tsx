import classNames from "classnames";
import { Fragment } from 'react';

import { genres, sections } from './lib';
import { List, Underline } from '../../shared/ui';
import { FONT_WEIGHT } from '../../shared/config';

import styles from './nav-list.module.css';

type NavListProps = {
    categoryName: string;
};

export const NavList = ({ categoryName }:NavListProps) => {
    // TODO: вынести genresLists и navSections из компоненты
    const genresLists = genres.map(genre => (
        <List
            key={genre.id} {...genre}
            textClass={classNames(styles[FONT_WEIGHT.NORMAL], styles.linkText)}
            activeLinkClass={styles.activeLink}
        >
            {genre.count && (
                <span className={styles.counter}>{` ${genre.count}`}</span>
            )}
        </List>
        )
    );
    const navSections = sections.map(section => (
        <Fragment key={section.id}>
            <List {...section}
                  textClass={classNames(styles[FONT_WEIGHT.BOLD], styles.linkText)}
                  activeLinkClass={styles.activeLink}
            />
            {
                // TODO: underline дать position:absolute, передать в list и отключить pointer-effects
                // TODO: сравнивать pathname с link в соответствии с json(проверить наличие '/' у section.link)
                categoryName === section.link && <Underline underlineClass={styles.underline}/>
            }
            {section.id === '0' && (
                <>
                    <ul>
                        {genresLists}
                    </ul>
                </>
            )}
        </Fragment>
    ));

    return (
        <ul>
            {navSections}
        </ul>
    );
};
