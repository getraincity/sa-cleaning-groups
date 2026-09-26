"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import logo from "@/assets/images/brand/logo.png";
import { BuildingIcon, CarIcon, ChevronDownIcon, HomeIcon, MenuIcon } from "@/components/ui/icons";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

type NavLink = { label: string; href: string };

const services = [
  {
    label: "Home Cleaning",
    href: "/home-cleaning",
    description: "Recurring, deep and move-in/out cleans",
    Icon: HomeIcon,
  },
  {
    label: "Car Detailing",
    href: "/car-detailing",
    description: "Interior and exterior auto detailing",
    Icon: CarIcon,
  },
  {
    label: "Custodian Services",
    href: "/custodian-services",
    description: "Offices and commercial spaces",
    Icon: BuildingIcon,
  },
];

// The order the client asked for; Services sits between About and Blog.
const linksBeforeServices: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
];
const linksAfterServices: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact-us" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass = cn(
  "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[16px] leading-5 font-medium tracking-[0.25px] text-ink no-underline transition-colors hover:text-brand",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050bd]",
  "max-xl:py-[10px]",
);

/** Closes whenever the user clicks outside `ref` or presses Escape. */
function useDismiss(
  ref: React.RefObject<HTMLElement | null>,
  open: boolean,
  onDismiss: () => void,
) {
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) onDismiss();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ref, open, onDismiss]);
}

function ServicesDropdown({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  useDismiss(ref, open, () => setOpen(false));

  const active = services.some((service) => isActive(pathname, service.href));
  const close = () => {
    setOpen(false);
    onNavigate();
  };
  // Mouse users get hover-to-open on desktop; touch and keyboard use the button.
  const isDesktopMouse = (event: React.PointerEvent) =>
    event.pointerType === "mouse" && window.matchMedia("(min-width: 1200px)").matches;
  const hover = (value: boolean) => (event: React.PointerEvent) => {
    if (isDesktopMouse(event)) setOpen(value);
  };
  // Hover has already opened the menu by the time a mouse clicks, so a mouse
  // click must not toggle it shut again.
  const hoverOpened = useRef(false);

  return (
    <div
      ref={ref}
      onPointerEnter={hover(true)}
      onPointerLeave={hover(false)}
      className="relative z-[900] max-xl:w-full"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onPointerDown={(event) => (hoverOpened.current = isDesktopMouse(event))}
        onClick={() => {
          const keepOpen = hoverOpened.current;
          hoverOpened.current = false;
          setOpen((value) => keepOpen || !value);
        }}
        className={cn(navLinkClass, "cursor-pointer", active && "text-brand")}
      >
        Services
        <ChevronDownIcon
          className={cn("size-3 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {/* The padding-top bridges the gap to the button so hover isn't lost. */}
      <div
        id={menuId}
        hidden={!open}
        className="absolute top-full left-1/2 w-[380px] -translate-x-1/2 pt-3 max-xl:static max-xl:mx-auto max-xl:w-full max-xl:max-w-[380px] max-xl:translate-x-0 max-xl:pt-2"
      >
        <ul className="mb-0 list-none rounded-2xl bg-white p-2 text-left shadow-[0_24px_48px_-16px_rgba(0,0,0,0.28)] ring-1 ring-black/5 max-xl:bg-[#f7f7f7] max-xl:shadow-none">
          {services.map(({ label, href, description, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={close}
                aria-current={isActive(pathname, href) ? "page" : undefined}
                className="group flex items-center gap-4 rounded-xl p-3 no-underline transition-colors hover:bg-[#f6f6f6] max-xl:hover:bg-white"
              >
                <span className="flex size-11 min-w-11 items-center justify-center rounded-lg bg-brand-tint text-[22px] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon />
                </span>
                <span className="flex flex-col">
                  <span className="font-text text-[15px] leading-5 font-semibold text-ink">
                    {label}
                  </span>
                  <span className="mt-0.5 font-text text-[13px] leading-[18px] text-muted">
                    {description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MenuItems({
  pathname,
  className,
  onNavigate,
}: {
  pathname: string;
  className?: string;
  onNavigate: () => void;
}) {
  const renderLink = ({ label, href }: NavLink) => {
    const active = isActive(pathname, href);
    return (
      <li key={href}>
        <Link
          href={href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={cn(navLinkClass, active && "text-brand")}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <ul className={cn("mb-0 flex list-none items-center gap-1 pb-0 pl-0 font-text", className)}>
      {linksBeforeServices.map(renderLink)}
      <li className="max-xl:w-full">
        <ServicesDropdown pathname={pathname} onNavigate={onNavigate} />
      </li>
      {linksAfterServices.map(renderLink)}
    </ul>
  );
}

function BookingButtons({ onNavigate, className }: { onNavigate: () => void; className?: string }) {
  const buttonClass =
    "inline-block rounded-xl px-6 py-4 text-center font-text text-[14px] leading-[14px] font-medium whitespace-nowrap text-white no-underline transition-opacity hover:opacity-90 max-md:w-[200px] max-md:py-5";
  return (
    <div className={cn("flex items-center gap-[22px] max-md:flex-col max-md:gap-5", className)}>
      <Link
        href={bookingLinks.homeCleaning}
        onClick={onNavigate}
        className={cn(buttonClass, "bg-brand")}
      >
        Book home cleaning
      </Link>
      <a
        href={bookingLinks.carDetailing}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonClass, "bg-charcoal")}
      >
        Book car detailing
      </a>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  // The menu remembers which page it was opened on, so navigating
  // to another page closes it without an extra effect.
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const menuOpen = openOnPath === pathname;
  const closeMenu = () => setOpenOnPath(null);

  const headerRef = useRef<HTMLDivElement>(null);
  useDismiss(headerRef, menuOpen, closeMenu);

  return (
    <header>
      <div
        ref={headerRef}
        className="relative z-[5] mx-auto h-[130px] w-full max-w-[1440px] p-5 max-xl:max-w-full max-md:h-auto max-md:pb-5"
      >
        <div className="mx-auto flex min-h-[30px] w-full max-w-[1440px] items-center justify-between gap-6">
          <Link href="/" onClick={closeMenu} className="relative shrink-0 text-body no-underline">
            <Image
              src={logo}
              alt="SA Cleaning Group"
              sizes="99px"
              loading="eager"
              className="h-[90px] w-auto max-sm:mb-5"
            />
          </Link>

          <nav aria-label="Main" className="flex flex-1 justify-center max-xl:hidden">
            <MenuItems pathname={pathname} onNavigate={closeMenu} />
          </nav>

          <BookingButtons onNavigate={closeMenu} className="max-xl:hidden" />

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setOpenOnPath(menuOpen ? null : pathname)}
            className={cn(
              "relative hidden cursor-pointer p-3 text-[24px] select-none max-xl:block max-sm:mt-5",
              menuOpen && "bg-[#a6b1bf] text-white",
            )}
          >
            <MenuIcon className="-my-0.5 block" />
          </button>
        </div>

        {/* Mobile menu: slides down below the bar under 1200px. */}
        <div
          className={cn(
            "absolute inset-x-0 top-full overflow-hidden xl:hidden",
            !menuOpen && "pointer-events-none",
          )}
        >
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className={cn(
              "relative z-[999] flex min-w-[200px] flex-col items-center gap-8 bg-white px-5 pt-6 pb-10 text-center shadow-[0_16px_24px_-16px_rgba(0,0,0,0.2)] transition-[translate,visibility] duration-400 ease-[ease]",
              menuOpen ? "visible translate-y-0" : "invisible -translate-y-full",
            )}
          >
            <MenuItems
              pathname={pathname}
              onNavigate={closeMenu}
              className="w-full flex-col gap-1"
            />
            <BookingButtons onNavigate={closeMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
}
