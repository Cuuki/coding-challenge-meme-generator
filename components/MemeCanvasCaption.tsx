'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { Text } from 'react-konva';

type MemeCanvasCaptionProps = {
  x: number;
  y: number;
  children: string;
  fontSize?: number;
  textColor?: string;
  strokeColor?: string;
} & ComponentPropsWithoutRef<typeof Text>;

export const MemeCanvasCaption = ({
  children,
  x,
  y,
  fontSize = 20,
  textColor = 'white',
  strokeColor = 'black',
  ...rest
}: MemeCanvasCaptionProps) => {
  return (
    <Text
      text={children.toUpperCase()}
      fontSize={fontSize}
      x={x}
      y={y}
      fill={textColor}
      stroke={strokeColor}
      strokeWidth={1}
      {...rest}
    />
  );
};
