'use client';

import Topography from "../components/TopographicAnimation";

export default function Page() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Topography height={window.innerHeight} fs={true} />
    </div>
  );
}