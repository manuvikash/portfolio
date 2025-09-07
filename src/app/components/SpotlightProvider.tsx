'use client';

import CursorSpotlight from './CursorSpotlight';
import { SPOTLIGHT_CONFIG } from '../lib/constants';

export default function SpotlightProvider() {
  return <CursorSpotlight {...SPOTLIGHT_CONFIG} />;
}
