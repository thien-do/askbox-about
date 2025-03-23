import { ReactNode } from 'react';
import digitalInvert from './digital-invert.png';
import digitalStandard from './digital-standard.png';
import favicon from './favicon.png';
import paper from './paper.png';
import profile from './profile.png';
import { BrandImage } from './image';

export function BrandExport(): ReactNode {
  return (
    <>
      <BrandImage
        image={profile}
        usage="Logo, app icon, social media profile photo"
      />
      <BrandImage
        image={favicon}
        usage="Emoji, favicon"
      />
      <BrandImage
        image={digitalStandard}
        usage="Digital on white background"
      />
      <BrandImage
        image={digitalInvert}
        usage="Digital on varied backgrounds"
      />
      <BrandImage
        image={paper}
        usage="Print"
      />
    </>
  );
} 