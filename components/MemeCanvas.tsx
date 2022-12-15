'use client';

import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import { Layer, Stage } from 'react-konva';
import { MemeCanvasImage } from './MemeCanvasImage';
import { MemeCanvasCaption } from './MemeCanvasCaption';

type MemeCanvasProps = {
  image: ReactElement<typeof MemeCanvasImage>;
  captions?:
    | ReactElement<typeof MemeCanvasCaption>
    | [ReactElement<typeof MemeCanvasCaption>, ReactElement<typeof MemeCanvasCaption>];
  width?: number;
  height?: number;
  // Type error from library with LegacyRef, should be HTMLCanvasElement / Stage
  stageRef?: any;
} & ComponentPropsWithoutRef<typeof Stage>;

export const MemeCanvas = ({
  image,
  captions,
  width = 500,
  height = 500,
  stageRef,
  ...rest
}: MemeCanvasProps) => {
  return (
    <Stage ref={stageRef} width={width} height={height} {...rest}>
      <Layer>
        {image}
        {captions}
      </Layer>
    </Stage>
  );
};
