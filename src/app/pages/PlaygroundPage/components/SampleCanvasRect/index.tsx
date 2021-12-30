import React from 'react';
import { Layer, Rect } from 'react-konva';

export function SampleCanvasRect() {
  return (
    <Layer>
      <Rect x={0} y={0} width={300} height={30} fill={'#444444'} />
    </Layer>
  );
}
