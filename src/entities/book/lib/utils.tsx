import { SwiperSlide } from 'swiper/react';

import { unsetBook } from '../../../shared/ui';
import { ImgSlideType } from '.';

export const translateInfoKeys = (key:string) => {
    switch (key) {
        case ('publishing'): {
            return 'Издательство';
        }
        case 'publishingYear': {
            return 'Год издания';
        }
        case 'pages': {
            return 'Страниц';
        }
        case 'cover': {
            return 'Переплёт';
        }
        case 'formFactor': {
            return 'Формат';
        }
        case 'genre': {
            return 'Жанр';
        }
        case 'weight': {
            return 'Вес';
        }
        case 'isbn': {
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

const getImgSlide = ({ id , src, alt }: ImgSlideType, dataTestId?: string) => (
    <SwiperSlide key={id}>
        <img data-test-id={dataTestId} loading="lazy" src={src ? src : unsetBook} alt={alt} />
        <div className="swiper-lazy-preloader" />
    </SwiperSlide>
);
// map должен возвращать именно SwiperSlide, а не другую компоненту
export const getSwiperSlides = (images: ImgSlideType[], dataTestId?: string) => {
    if (images.length) {
        return images.map(image =>
            getImgSlide(
                {
                    id: image.id,
                    src: image.src,
                    alt: image.alt,
                }, dataTestId)
        );
    }

    return getImgSlide({
        id: 'unsetBook',
        src: unsetBook,
        alt: 'unsetBook'
    }, dataTestId);
};
