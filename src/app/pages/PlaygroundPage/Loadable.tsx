/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const PlaygroundPage = lazyLoad(
  () => import('./index'),
  module => module.PlaygroundPage,
);
