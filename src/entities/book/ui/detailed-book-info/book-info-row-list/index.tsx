import { BookInfoRow } from './book-info-row';
import { BookDetails } from '../../../config';

type BookInfoRowsProps = {
  minPropertiesOfBookDetails: number;
  maxPropertiesOfBookDetails: number;
  bookDetails: BookDetails;
};

export const BookInfoRowList = ({
  minPropertiesOfBookDetails,
  maxPropertiesOfBookDetails,
  bookDetails,
}: BookInfoRowsProps) => {
  const arrayOfBookDetails = Object.entries(bookDetails);

  return (
    <>
      {arrayOfBookDetails.map((item, index) => {
        if (index >= minPropertiesOfBookDetails && index <= maxPropertiesOfBookDetails) {
          const detailsKey = item[0];
          const detailsValue = item[1];

          return <BookInfoRow key={detailsKey} prop={detailsKey} value={detailsValue}/>;
        }
      })}
    </>
  );
};
