import {BASE_URL, getImageSrc, Nullable} from '../../lib';

type ImgProps = {
  alt: string;
  url?: Nullable<string>;
  defaultSrc?: string;
  className?: string;
};

export const Img = ({ url, alt, defaultSrc, className }: ImgProps) => {
  const src = getImageSrc(url);

  return (
    <>
      <img src={url ? src : defaultSrc} className={className} alt={alt} />
    </>
  );
};
