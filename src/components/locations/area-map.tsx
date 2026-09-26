import Link from "next/link";
import { MapPinIcon } from "@/components/ui/icons";
import { getLocation, type LocationSlug } from "@/content/locations";
import { cn } from "@/lib/utils";

// Areas laid out roughly as they sit on the map: the North Shore across the
// top, Burrard Inlet, then Downtown and East Van, then South Van above the
// Fraser. Column spans are on a 6-column grid.
const rows: { slug: LocationSlug; span: string }[][] = [
  [
    { slug: "west-vancouver", span: "col-span-3" },
    { slug: "north-vancouver", span: "col-span-3" },
  ],
  [
    { slug: "downtown-vancouver", span: "col-span-2" },
    { slug: "east-vancouver", span: "col-span-4" },
  ],
  [{ slug: "south-vancouver", span: "col-span-5 col-start-2" }],
];

function Water({ label }: { label: string }) {
  return (
    <div className="col-span-6 flex items-center gap-3 px-2 py-1.5 text-[#7b98a8]" aria-hidden>
      <span className="h-px flex-1 bg-[#b9ccd6]" />
      <span className="font-text text-[11px] tracking-[0.18em] uppercase italic">{label}</span>
      <span className="h-px flex-1 bg-[#b9ccd6]" />
    </div>
  );
}

type AreaMapProps = {
  /** The area to highlight, on its own location page. */
  active?: LocationSlug;
  className?: string;
};

/** Schematic (not to scale) map of the five service areas, each tile a link. */
export function AreaMap({ active, className }: AreaMapProps) {
  const tiles = (row: (typeof rows)[number]) =>
    row.map(({ slug, span }) => {
      const location = getLocation(slug)!;
      const isActive = slug === active;
      return (
        <Link
          key={slug}
          href={`/locations/${slug}`}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "group flex min-h-[88px] flex-col justify-between rounded-2xl p-4 no-underline transition-all duration-300 max-sm:min-h-[76px] max-sm:p-3",
            span,
            isActive
              ? "bg-brand text-white shadow-[0_16px_30px_-12px_rgba(222,10,10,0.6)]"
              : "bg-white text-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(0,0,0,0.3)]",
          )}
        >
          <MapPinIcon
            className={cn(
              "size-5 transition-colors",
              isActive ? "text-white" : "text-brand/60 group-hover:text-brand",
            )}
          />
          <span className="font-heading text-[16px] leading-5 font-bold max-sm:text-[14px]">
            {location.short}
          </span>
        </Link>
      );
    });

  return (
    <div className={cn("rounded-3xl bg-[#e7eff3] p-3 max-sm:p-2", className)}>
      <nav aria-label="Service areas" className="grid grid-cols-6 gap-2">
        {tiles(rows[0])}
        <Water label="Burrard Inlet" />
        {tiles(rows[1])}
        {tiles(rows[2])}
        <Water label="Fraser River" />
      </nav>
      <div className="mt-1 flex items-center justify-between px-2 font-text text-[11px] text-[#7b98a8]">
        <span aria-hidden className="inline-flex items-center gap-1 font-heading font-bold">
          <span className="text-brand">▲</span>N
        </span>
        <span>Schematic map, not to scale</span>
      </div>
    </div>
  );
}
