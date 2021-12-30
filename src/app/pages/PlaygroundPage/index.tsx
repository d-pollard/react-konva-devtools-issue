import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { SampleCanvas } from './components/SampleCanvas';

export function PlaygroundPage() {
  return (
    <>
      <Helmet>
        <title>Playground Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>
        <SampleCanvas />
      </span>
    </>
  );
}
