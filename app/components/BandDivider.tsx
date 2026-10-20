type Band = 'walnut' | 'forest' | 'moss';

// Ridge outlines (viewBox 0 0 1440 100). "front" is the colour spilling down from the band above,
// "back" is a lower, fainter layer so the edge reads as hazy layered hills rather than a hard cut.
const RIDGES = [
  {
    front: 'M0 0 V52 C120 70 240 76 380 58 C520 40 600 30 760 48 C900 64 1010 74 1150 56 C1260 42 1350 44 1440 58 V0 Z',
    back: 'M0 0 V68 C140 84 260 90 400 74 C540 58 640 52 780 68 C920 84 1040 92 1180 76 C1290 64 1370 64 1440 76 V0 Z',
  },
  {
    front: 'M0 0 V60 C160 40 300 34 460 50 C600 64 700 78 860 66 C1000 55 1110 36 1250 42 C1340 46 1400 56 1440 52 V0 Z',
    back: 'M0 0 V74 C170 56 320 50 480 66 C620 80 720 92 880 82 C1020 72 1130 54 1270 60 C1350 63 1410 72 1440 68 V0 Z',
  },
  {
    front: 'M0 0 V44 C100 56 190 70 320 64 C470 57 520 34 680 38 C820 42 900 70 1050 72 C1200 74 1320 52 1440 46 V0 Z',
    back: 'M0 0 V60 C110 72 210 86 340 80 C490 73 540 52 700 56 C840 60 920 86 1070 88 C1220 90 1330 70 1440 64 V0 Z',
  },
];

const mask = (d: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'><path d='${d}' fill='black'/></svg>`,
  )}")`;

const maskStyle = (d: string): React.CSSProperties => ({
  maskImage: mask(d),
  WebkitMaskImage: mask(d),
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
});

export default function BandDivider({
  from,
  to,
  variant = 0,
}: {
  from: Band;
  to: Band;
  variant?: number;
}) {
  const ridge = RIDGES[variant % RIDGES.length];
  return (
    <div className={`band-divider band band-${to}`} aria-hidden="true">
      {/* warm dawn haze, sits just below the ridge */}
      <div className="band-divider__layer" style={{ background: 'rgba(197, 138, 74, 0.22)', ...maskStyle(ridge.back) }} />
      {/* the band above, carried down into the next one (same colour + grain, so no seam) */}
      <div className={`band-divider__layer band band-${from}`} style={maskStyle(ridge.front)} />
      {/* thin golden-hour rim light along the ridge */}
      <svg className="band-divider__layer" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d={ridge.front.replace(/ ?V0 Z$/, '')}
          fill="none"
          stroke="#E8C98A"
          strokeOpacity="0.35"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
