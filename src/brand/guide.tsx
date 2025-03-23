"use client"

import { ReactNode, useState } from 'react';

export function BrandGuide(): ReactNode {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-[80vw] h-[80vh]">
      {isLoading && <div>Loading</div>}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FjDnSm4gmZm3ao57aNynQ83%2FAskBox%3Fnode-id%3D0-1%26t%3DyDJoMP794OgoFQli-1"
        allowFullScreen
        onLoad={() => void setIsLoading(false)}
      />
    </div>
  );
} 