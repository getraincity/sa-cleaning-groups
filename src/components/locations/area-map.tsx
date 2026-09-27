import Link from "next/link";
import { MapPinIcon } from "@/components/ui/icons";
import { getLocation, locations, type LocationSlug } from "@/content/locations";
import { cn } from "@/lib/utils";

type AreaMapProps = {
  /** The area to centre on, on its own location page. Without it the map shows all of Greater Vancouver. */
  active?: LocationSlug;
  className?: string;
};

/** Google Maps, keyless embed: a real, pannable map of the service area. */
function mapSrc(query: string, zoom: number) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;
}

/**
 * A real map of the service area with a link to each area underneath. On a
 * location page it centres on that area and marks it as the current page.
 */
export function AreaMap({ active, className }: AreaMapProps) {
  const location = active ? getLocation(active) : undefined;
  const query = location ? `${location.name}, BC, Canada` : "Vancouver, BC, Canada";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl bg-white shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.06]",
        className,
      )}
    >
      <iframe
        title={location ? `Map of ${location.name}` : "Map of Greater Vancouver"}
        src={mapSrc(query, location ? 13 : 11)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[380px] w-full border-0 max-sm:h-[300px]"
      />
      <nav aria-label="Service areas" className="flex flex-wrap gap-2 p-4">
        {locations.map((area) => {
          const isActive = area.slug === active;
          return (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 font-text text-[13px] font-medium no-underline transition-colors",
                isActive
                  ? "bg-brand text-white"
                  : "bg-[#f4f2ef] text-ink-soft hover:bg-brand-tint hover:text-brand",
              )}
            >
              <MapPinIcon className={cn("size-3.5", isActive ? "text-white" : "text-brand")} />
              {area.short}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
