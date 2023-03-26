import {BASE_URL, getImageSrc, Nullable} from '../../lib';

type ImgProps = {
  alt: string;
  url?: Nullable<string>;
  defaultSrc?: string;
  className?: string;
  dataTestId?: string;
  loading?: 'lazy' | 'eager';
};

export const Img = ({ url, alt, defaultSrc, className, dataTestId, loading = 'eager' }: ImgProps) => {
  const src = getImageSrc(url);

  return (
    <>
      <img data-test-id={dataTestId} src={url ? src : defaultSrc} loading={loading} className={className} alt={alt} />
    </>
  );
};
