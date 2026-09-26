import type { ReactNode } from "react";
import type { LocationSlug } from "@/content/locations";
import { cn } from "@/lib/utils";

// Line-art skylines, one per area, drawn on a 1200 × 220 canvas with the
// ground at y = 200. Strokes use currentColor, so the parent sets the colour.

const GROUND = 200;

/** A gabled house with a door and two windows. */
function House({ x, w, h, roof = 26 }: { x: number; w: number; h: number; roof?: number }) {
  const top = GROUND - h;
  const door = Math.min(16, w / 4);
  return (
    <g>
      <path d={`M${x} ${GROUND}V${top}h${w}V${GROUND}`} />
      <path d={`M${x - 6} ${top}L${x + w / 2} ${top - roof}L${x + w + 6} ${top}`} />
      <rect x={x + w / 2 - door / 2} y={GROUND - 26} width={door} height={26} />
      <rect x={x + 8} y={top + 12} width={12} height={12} />
      <rect x={x + w - 20} y={top + 12} width={12} height={12} />
    </g>
  );
}

/** A tower with evenly spaced window rows. */
function Tower({
  x,
  w,
  h,
  antenna = false,
}: {
  x: number;
  w: number;
  h: number;
  antenna?: boolean;
}) {
  const top = GROUND - h;
  const rows = [];
  for (let y = top + 16; y < GROUND - 14; y += 18) rows.push(y);
  return (
    <g>
      <rect x={x} y={top} width={w} height={h} />
      <g opacity={0.45}>
        {rows.map((y) => (
          <path key={y} d={`M${x + 8} ${y}h${w - 16}`} />
        ))}
      </g>
      {antenna && <path d={`M${x + w / 2} ${top}v-22`} />}
    </g>
  );
}

function Pine({ x, h = 50 }: { x: number; h?: number }) {
  return (
    <path
      d={`M${x} ${GROUND}v-10M${x - h * 0.3} ${GROUND - 10}L${x} ${GROUND - h}L${x + h * 0.3} ${GROUND - 10}Z`}
    />
  );
}

function Tree({ x, r = 18 }: { x: number; r?: number }) {
  return (
    <g>
      <path d={`M${x} ${GROUND}v-${r + 6}`} />
      <circle cx={x} cy={GROUND - r * 2 - 4} r={r} />
    </g>
  );
}

/** A row of gentle wave arcs from x to x + width. */
function Waves({ x, y, width, size = 30 }: { x: number; y: number; width: number; size?: number }) {
  const count = Math.floor(width / size);
  const arcs = Array.from(
    { length: count },
    () => `q${size / 4} -6 ${size / 2} 0t${size / 2} 0`,
  ).join("");
  return <path d={`M${x} ${y}${arcs}`} />;
}

function Downtown() {
  const towers: [number, number, number, boolean?][] = [
    [370, 50, 118],
    [430, 40, 158],
    [480, 70, 108],
    [560, 46, 176, true],
    [616, 60, 138],
    [686, 40, 186, true],
    [736, 64, 124],
    [810, 50, 164],
    [870, 70, 104],
    [950, 46, 148],
    [1006, 60, 128],
    [1076, 40, 168, true],
    [1126, 56, 112],
  ];
  return (
    <>
      {/* The North Shore mountains behind the skyline. */}
      <path
        opacity={0.3}
        d="M0 140 90 92l80 34 90-58 100 52 90-36 110 50 120-78 80 44 100-30 120 50 100-44 120 38"
      />
      {/* Canada Place and its sails on the waterfront. */}
      <path d="M86 176h250v12H86z" />
      <path d="M108 176l30-52 30 52M150 176l34-62 34 62M196 176l34-56 34 56M242 176l32-46 32 46" />
      <Waves x={0} y={206} width={360} />
      {towers.map(([x, w, h, antenna]) => (
        <Tower key={x} x={x} w={w} h={h} antenna={antenna} />
      ))}
    </>
  );
}

function North() {
  return (
    <>
      <path
        opacity={0.35}
        d="M0 150 120 80l80 40 100-65 80 45 90-35 90 50 90-45 90 40 120-70 70 50 80-30 90 45 100-30"
      />
      {/* The Lions: twin peaks above the front range. */}
      <path d="M0 200 150 118l80 32 100-80 30 25 30-33 40 48 130 90" />
      <path d="M520 200q180-90 380-50t300-10" />
      {/* Gondola climbing the mountain. */}
      <path d="M600 196 858 44" />
      <path d="M742 115v7" />
      <rect x={731} y={122} width={22} height={17} rx={4} />
      {[40, 76, 1090, 1128, 1166].map((x, i) => (
        <Pine key={x} x={x} h={[54, 40, 46, 62, 42][i]} />
      ))}
    </>
  );
}

function East() {
  const houses: [number, number, number, number?][] = [
    [40, 78, 72],
    [160, 54, 48, 18],
    [250, 84, 86],
    [372, 74, 70],
    [490, 90, 96, 30],
    [620, 72, 74],
    [734, 80, 82],
    [860, 70, 66],
    [974, 86, 90],
    [1104, 66, 70],
  ];
  return (
    <>
      {/* Power poles and sagging lines, an East Van staple. */}
      <path d="M140 200V64M126 72h28M596 200V64M582 72h28M1080 200V64M1066 72h28" />
      <path
        opacity={0.5}
        d="M126 72q235 34 456 0M154 72q235 30 456 0M582 72q242 34 484 0M610 72q228 30 470 0"
      />
      {houses.map(([x, w, h, roof]) => (
        <House key={x} x={x} w={w} h={h} roof={roof} />
      ))}
      <Tree x={224} r={14} />
      <Tree x={464} r={16} />
      <Tree x={836} r={14} />
    </>
  );
}

function West() {
  return (
    <>
      <circle cx={960} cy={62} r={26} opacity={0.45} />
      {/* A modern view home on the hillside. */}
      <path d="M0 176q150-70 330-26 90 22 150 50" />
      <path d="M116 98h148M128 98v37h124V98M160 98v37M190 98v37M220 98v37" />
      {[46, 300, 336].map((x, i) => (
        <Pine key={x} x={x} h={[44, 38, 30][i]} />
      ))}
      {/* Sailboat on the water. */}
      <path d="M612 180h92l-12 12h-68z" />
      <path d="M656 180v-72M656 114l44 60h-44M650 124l-34 50h34" />
      <Waves x={470} y={196} width={500} />
      <Waves x={500} y={210} width={460} />
      {/* Lighthouse on the rocks. */}
      <path d="M980 200q20-32 60-26 40-16 70 6 40-6 60 20" />
      <path d="M1045 172l8-76h24l8 76zM1049 138h32M1052 112h26" />
      <path d="M1050 96V80h30v16M1046 80l19-14 19 14z" />
      <path opacity={0.4} strokeDasharray="4 8" d="M1048 88 972 70M1048 90l-76 18" />
    </>
  );
}

function South() {
  const houses: [number, number, number][] = [
    [30, 74, 62],
    [134, 64, 56],
    [228, 80, 70],
  ];
  const truss = Array.from(
    { length: 16 },
    (_, i) => `L${580 + i * 40 + 20} 140L${580 + (i + 1) * 40} 166`,
  ).join("");
  return (
    <>
      {/* A plane on approach, with its trail. */}
      <path opacity={0.4} strokeDasharray="6 10" d="M880 66 690 92" />
      <path d="M905 62l95-12q15-2 15 4-2 4-15 6zM955 56l-20 24h13l27-23M912 61l-10-16h8l15 15" />
      {houses.map(([x, w, h]) => (
        <House key={x} x={x} w={w} h={h} />
      ))}
      <Tree x={338} r={16} />
      {/* New towers rising at Oakridge and Marine Gateway. */}
      <Tower x={380} w={44} h={150} />
      <Tower x={432} w={52} h={176} antenna />
      <Tower x={492} w={40} h={132} />
      {/* A truss bridge over the Fraser River. */}
      <path d={`M580 166${truss}`} />
      <path d="M600 140h620M580 166h640M660 166v34M820 166v34M980 166v34M1140 166v34" />
      <Waves x={560} y={192} width={640} />
      <Waves x={590} y={208} width={600} />
    </>
  );
}

const scenes: Record<LocationSlug, () => ReactNode> = {
  "downtown-vancouver": Downtown,
  "north-vancouver": North,
  "east-vancouver": East,
  "west-vancouver": West,
  "south-vancouver": South,
};

/** The line-art skyline that gives each area page its own signature. */
export function AreaIllustration({ slug, className }: { slug: LocationSlug; className?: string }) {
  const Scene = scenes[slug];
  return (
    <svg
      viewBox="0 0 1200 220"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
      className={cn("block w-full [&_*]:[vector-effect:non-scaling-stroke]", className)}
    >
      <Scene />
      <path d="M0 200h1200" opacity={0.6} />
    </svg>
  );
}
