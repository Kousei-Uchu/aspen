'use client';
import dynamic from 'next/dynamic';

const Topography = dynamic(() => import('./TopographicAnimation'), { ssr: false });

export default function TopographyLazy() {
  return <Topography />;
}
