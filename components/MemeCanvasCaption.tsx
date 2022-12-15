'use client';

import { Text } from 'react-konva';

type MemeCanvasCaptionProps = {
  children: string;
  x: number;
  y: number;
  fontSize?: number;
  color?: string;
};

export const MemeCanvasCaption = ({
  children,
  x,
  y,
  fontSize = 15,
  color = 'black',
}: MemeCanvasCaptionProps) => {
  return <Text text={children} fontSize={fontSize} x={x} y={y} fill={color} />;
};
