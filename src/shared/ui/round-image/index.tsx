import styles from './round-image.module.css';

type RoundImageTypes = {
    src: string;
    alt: string;
};

export const RoundImage = ({ src, alt }: RoundImageTypes) =>
    <img className={styles.roundImg}
         src={src}
         alt={alt}
    />;
