'use client';

import { Image } from 'react-konva';
import useImage from 'use-image';

type MemeCanvasImageProps = {
  imageUrl: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
};

export const MemeCanvasImage = ({ imageUrl, x, y, width, height }: MemeCanvasImageProps) => {
  const [image] = useImage(imageUrl);

  return <Image image={image} x={x} y={y} width={width} height={height} />;
};
