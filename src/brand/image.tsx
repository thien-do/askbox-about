import { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

export function BrandImage(props: {
  image: StaticImageData;
  usage: string;
}): ReactNode {
  const { image, usage } = props;

  const text = `Best for: ${usage}`

  return (
    <>
      <img src={image.src} className="h-16 mb-3" alt={text} />
      <p className="mt-3">{text}</p>
    </>
  );
} 