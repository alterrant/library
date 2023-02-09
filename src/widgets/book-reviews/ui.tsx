import { ORIENTATION } from 'shared/lib';
import { REVIEWS_TITLE } from '../../entities/book/lib';
import { Book } from '../../entities/book';
import { Underline } from '../../shared/ui';
import styles from './bookReviews.module.css';
import {Arrow} from "../../shared/ui/arrow";
import {ToggleDropDown, ToggleDropDownModule} from "../../features/toggle-drop-down";

type BookReviewsProps = {
    reviews: {
        id: string,
        image: string,
        name: string,
        date: string,
        rating: number,
        description: string
    }[];
};

export const BookReviews = ({ reviews }: BookReviewsProps) => {
    const [isOpen, toggleStatus] = ToggleDropDownModule.useToggleState();

    return (
        <section className={styles.bookReviews}>
            <ToggleDropDown
                handleClick={() => toggleStatus(!isOpen)}
                isMenuOpened={isOpen}
                menuClass={styles.titleWrapper}
                hiddenElement={(
                    <>
                        <Underline underlineClass={styles.underline}/>
                        <div className={styles.reviewsWrapper}>
                            {reviews.map(review => <Book.Review
                                key={review.id}
                                rating={review.rating}
                                description={review.description}
                                name={review.name}
                                date={review.date}
                                image={review.image}/>)}
                        </div>
                    </>
                )}
            >
                <div data-test-id='button-hide-reviews' className={styles.title}>
                    <p>{REVIEWS_TITLE}<span>{reviews.length}</span></p>
                    <Arrow orientation={isOpen ? ORIENTATION.UP : ORIENTATION.DOWN}/>
                </div>
            </ToggleDropDown>
        </section>
    );
}
