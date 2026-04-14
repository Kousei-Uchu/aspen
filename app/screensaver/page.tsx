'use client';

import { useEffect, useState } from "react";
import Topography from "../components/TopographicAnimation";

export default function Page() {
  // Lazy initial state from window.innerHeight
  const [height, setHeight] = useState<number>(() => 
    typeof window !== 'undefined' ? window.innerHeight : 0
  );

  useEffect(() => {
    // Update on resize only
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!height) return null;

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Topography height={height} fs={true} />
    </div>
  );
}