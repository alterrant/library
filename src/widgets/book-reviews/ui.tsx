import { REVIEWS_TITLE, timeFormatOptions } from './config';
import { ToggleDropDown, ToggleDropDownModule } from '../../features/toggle-drop-down';
import { Book, BookComments } from '../../entities/book';
import { getDate, getFullName, ORIENTATION } from '../../shared/lib';
import { Arrow, Underline} from '../../shared/ui';

import styles from './bookReviews.module.css';

export const BookReviews = ({ comments }: BookComments) => {
    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();

    return (
        <section className={styles.bookReviews}>
            <ToggleDropDown
                handleClick={() => toggleStatus(!isOpen)}
                isMenuOpened={isOpen}
                menuClass={styles.titleWrapper}
                hiddenElement={(
                    <>
                        {comments?.length && <Underline underlineClass={styles.underline} />}
                        <div className={styles.reviewsWrapper}>
                            {comments?.map(review => <Book.Review
                                key={review.id}
                                rating={review.rating}
                                description={review.text}
                                name={getFullName(review.user?.firstName, review.user?.lastName)}
                                date={getDate(review.createdAt, timeFormatOptions)}
                                avatarUrl={review.user?.avatarUrl}
                            />)}
                        </div>
                    </>
                )}
            >
                <div data-test-id='button-hide-reviews' className={styles.title}>
                    <p>{REVIEWS_TITLE}<span>{comments?.length}</span></p>
                    <Arrow orientation={isOpen ? ORIENTATION.UP : ORIENTATION.DOWN}/>
                </div>
            </ToggleDropDown>
        </section>
    );
}
