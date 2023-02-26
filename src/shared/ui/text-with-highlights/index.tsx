import {Fragment} from "react";

import {getMatches} from "../../lib";

import styles from './text-with-highlights.module.css';

type TextWithHighlightsProps = {
    title: string;
    filterString: string;
};

export const TextWithHighlights = ({title, filterString}: TextWithHighlightsProps) => {
    const withJsx = (text: string, key?: number) => <Fragment key={key}>{text}</Fragment>;

    if (!filterString) return withJsx(title);

    const matches = getMatches(title,filterString);

    if (matches) {
        const filterRegEpx = new RegExp(filterString, 'ig');

        return (
            <>
                {title.split(filterRegEpx).map((text, index, array) => {
                    const key = matches.length;

                    if (index < array.length - 1) {
                        const match = matches.reverse().pop();

                        return (
                            <Fragment key={key}>
                                {text}
                                <span
                                    data-test-id='highlight-matches'
                                    className={styles.highlight}
                                >
                                    {match}
                                </span>
                            </Fragment>
                        );
                    }

                    return withJsx(text, key);
                })}
            </>
        );
    }

    return withJsx(title);
};
