import { Fragment } from 'react';
import { SwiperSlide } from 'swiper/react';

import { BookDetails, ImgSlideType } from '.';
import { unsetBook } from '../../../shared/ui';
import { getImageSrc, Nullable } from '../../../shared/lib';

import styles from "../ui/detailed-book-info/detailed-book-info.module.css";

export const translateInfoKeys = (key:string) => {
    switch (key) {
        case 'publish': {
            return 'Издательство';
        }
        case 'issueYear': {
            return 'Год издания';
        }
        case 'pages': {
            return 'Страниц';
        }
        case 'cover': {
            return 'Переплёт';
        }
        case 'format': {
            return 'Формат';
        }
        case 'categories': {
            return 'Жанр';
        }
        case 'weight': {
            return 'Вес';
        }
        case 'ISBN': {
            return 'ISBN';
        }
        case 'producer': {
            return 'Изготовитель';
        }
        default: {
            return ''
        }
    }
};
// swiper slides
const getImgSlide = ({ id, url }: ImgSlideType & { id: number }, dataTestId?: string) => (
    <SwiperSlide key={id}>
        <img
            data-test-id={dataTestId}
            loading="lazy"
            src={url ? getImageSrc(url) : unsetBook}
            alt='swiper book'
        />
        <div className="swiper-lazy-preloader" />
    </SwiperSlide>
);
// map должен возвращать именно SwiperSlide, а не другую компоненту
export const getSwiperSlides = (images: Nullable<ImgSlideType[]>, dataTestId?: string) => {
    if (images?.length) {
        return images.map((image, index) =>
            getImgSlide(
                {
                    id: index,
                    url: image.url,
                }, dataTestId)
        );
    }

    return getImgSlide({
        id: 0,
        url: unsetBook,
    }, dataTestId);
};
// book info
const getRowsList = (key:string, value:string | string[] | null) => (
    <Fragment key={key}>
        <p className={styles.infoKey}>{translateInfoKeys(key)}</p>
        <p>{Array.isArray(value) ? value.join(', ') : value}</p>
    </Fragment>
);
export const getBookInfoRows = (min:number, max:number, bookDetails: BookDetails) =>
    Object.entries(bookDetails).map((item, index) => {
        if (index >= min && index <= max ) return getRowsList(item[0], item[1]);
    });
