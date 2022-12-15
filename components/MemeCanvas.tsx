'use client';

import type { ReactElement } from 'react';
import { Layer, Stage } from 'react-konva';
import { MemeCanvasImage } from './MemeCanvasImage';
import { MemeCanvasCaption } from './MemeCanvasCaption';

type MemeCanvasProps = {
  image: ReactElement<typeof MemeCanvasImage>;
  captions?: {
    top?: ReactElement<typeof MemeCanvasCaption>;
    bottom?: ReactElement<typeof MemeCanvasCaption>;
  };
  width?: number;
  height?: number;
};

export const MemeCanvas = ({ image, captions, width = 500, height = 500 }: MemeCanvasProps) => {
  return (
    <Stage width={width} height={height}>
      <Layer>
        {image}
        {!!captions?.top && captions.top}
        {!!captions?.bottom && captions.bottom}
      </Layer>
    </Stage>
  );
};
