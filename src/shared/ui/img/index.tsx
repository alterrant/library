import { Nullable } from '../../lib';

type ImgProps = {
  alt: string;
  url?: Nullable<string>;
  defaultSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export const Img = ({url, alt, defaultSrc, className, loading = 'eager'}: ImgProps) => (
  <>
    <img src={url ?? defaultSrc} loading={loading}
         className={className} alt={alt}/>
  </>
);
