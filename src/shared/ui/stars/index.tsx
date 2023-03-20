import { Dispatch, ReactNode } from 'react';

import { MAX_RATING, ORANGE, SelectRatingStateType } from '../../lib';

import styles from './stars.module.css';
import { StarList } from './star';

type StarsProps = {
  isInvertStars?: boolean;
  rating: number;
  setRatingState?: Dispatch<SelectRatingStateType>;
};
// можем закрашивать только после "hover" .li:hover li~, поэтому инвертируем блок .ul {reverse:left}
export const Stars = ({ rating, setRatingState, isInvertStars = false }: StarsProps) => {
  const clickHandler = (index: number) => {
    if (isInvertStars) {
      if (setRatingState) setRatingState({ selectedRating: MAX_RATING - index });
    } else if (setRatingState) {
      setRatingState({ selectedRating: index + 1 });
    }
  };

  const stars: ReactNode[] = Array.from(Array(MAX_RATING).keys()).map((star, index) => {
    const key = star + index;

    if (isInvertStars) {
      if (MAX_RATING - index > rating)
        return <StarList key={key} clickHandler={() => clickHandler(index)} />;

      return <StarList color={ORANGE} clickHandler={() => clickHandler(index)} key={key} />;
    }

    if (rating !== null && index + 1 <= rating)
      return <StarList color={ORANGE} clickHandler={() => clickHandler(index)} key={key} />;

    return <StarList key={key} clickHandler={() => clickHandler(index)} />;
  });

  return (
    <ul data-test-id='rating' className={styles.starsWrapper}>
      {stars}
    </ul>
  );
};
