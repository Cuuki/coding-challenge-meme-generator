'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

type MemeCanvasImageProps = {
  imageUrl: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
} & ComponentPropsWithoutRef<typeof KonvaImage>;

export const MemeCanvasImage = ({
  imageUrl,
  x,
  y,
  width,
  height,
  ...rest
}: MemeCanvasImageProps) => {
  const [image] = useImage(imageUrl);

  return <KonvaImage image={image} x={x} y={y} width={width} height={height} {...rest} />;
};
