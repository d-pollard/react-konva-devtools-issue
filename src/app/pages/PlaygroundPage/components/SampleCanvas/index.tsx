import React from 'react';
import { Stage } from 'react-konva';
import { SampleCanvasRect } from '../SampleCanvasRect';

export function SampleCanvas() {
  return (
    <Stage height={300} width={300}>
      <SampleCanvasRect />
    </Stage>
  );
}
