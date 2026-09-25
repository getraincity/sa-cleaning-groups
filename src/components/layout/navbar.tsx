"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/brand/logo.png";
import { ChevronDownIcon, MenuIcon } from "@/components/ui/icons";
import { bookingLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinkClass = cn(
  "mx-[5px] px-[10px] py-[5px] text-[16px] leading-5 tracking-[0.25px] text-ink no-underline hover:text-brand",
  "focus-visible:rounded focus-visible:text-[#0050bd] focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#0050bd]",
  "max-lg:w-full max-lg:px-[5px] max-md:inline-block max-md:py-[10px]",
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

function ServicesDropdown({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(ref, open, () => setOpen(false));

  const close = () => {
    setOpen(false);
    onNavigate();
  };
  const linkClass =
    "relative block px-5 py-[10px] text-left whitespace-nowrap text-[#222] no-underline max-lg:text-[16px]";

  return (
    <div ref={ref} className="relative z-[900] inline-block text-left">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative inline-block cursor-pointer p-5 pr-10 text-left align-top whitespace-nowrap text-[#222] select-none"
      >
        <ChevronDownIcon className="absolute inset-y-0 right-0 my-auto mr-5" />
        <span className="flex w-[100px] flex-col text-[16px] leading-5 font-medium max-lg:text-center">
          Services
        </span>
      </button>
      <nav hidden={!open} className="absolute min-w-full bg-[#ddd] max-lg:static">
        <Link href="/home-cleaning" onClick={close} className={linkClass}>
          Home Cleaning
        </Link>
        <Link href="/car-detailing" onClick={close} className={linkClass}>
          Car Detailing
        </Link>
      </nav>
    </div>
  );
}

function MenuItems({ className, onNavigate }: { className?: string; onNavigate: () => void }) {
  return (
    <ul
      className={cn(
        "mb-0 flex list-none items-center justify-between gap-5 pb-0 pl-0 text-[12px] leading-[12px] font-medium",
        className,
      )}
    >
      <li>
        <Link href="/" onClick={onNavigate} className={navLinkClass}>
          Home
        </Link>
      </li>
      <li className="max-lg:w-full">
        <Link href="/about-us" onClick={onNavigate} className={navLinkClass}>
          About
        </Link>
      </li>
      <li>
        <ServicesDropdown onNavigate={onNavigate} />
      </li>
      <li>
        <Link href="/contact-us" onClick={onNavigate} className={navLinkClass}>
          Contact
        </Link>
      </li>
      <li>
        <div className="ml-[120px] flex max-lg:ml-0 max-lg:w-full max-lg:items-center max-lg:justify-center max-md:flex-col max-md:gap-10 max-sm:w-auto">
          <Link
            href={bookingLinks.homeCleaning}
            onClick={onNavigate}
            className="inline-block rounded-xl bg-brand px-6 py-4 text-center font-text text-[14px] leading-[14px] font-medium text-white no-underline max-md:w-[200px] max-md:py-5"
          >
            Book home cleaning
          </Link>
          <a
            href={bookingLinks.carDetailing}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-[22px] inline-block rounded-xl bg-charcoal px-6 py-4 text-center font-text text-[14px] font-medium text-white no-underline max-md:ml-0 max-md:w-[200px] max-md:py-5"
          >
            Book car detailing
          </a>
        </div>
      </li>
    </ul>
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
        className="relative z-[5] mx-auto h-[130px] w-full max-w-[1440px] p-5 max-lg:max-w-full max-md:h-auto max-md:pb-5"
      >
        <div className="mx-auto min-h-[30px] w-full max-w-[1440px]">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} className="relative text-body no-underline">
              <Image
                src={logo}
                alt="SA Cleaning Group"
                sizes="99px"
                loading="eager"
                className="h-[90px] w-auto max-sm:mb-5"
              />
            </Link>

            <nav aria-label="Main" className="relative pl-[86px] font-text max-lg:hidden">
              <MenuItems onNavigate={closeMenu} />
            </nav>

            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setOpenOnPath(menuOpen ? null : pathname)}
              className={cn(
                "relative hidden cursor-pointer p-[18px] text-[24px] select-none max-lg:block max-lg:p-3 max-sm:mt-5",
                menuOpen && "bg-[#a6b1bf] text-white",
              )}
            >
              <MenuIcon className="-my-0.5 block" />
            </button>
          </div>
        </div>

        {/* Mobile menu: slides down below the bar at ≤991px. */}
        <div
          className={cn(
            "absolute inset-x-0 top-full overflow-hidden lg:hidden",
            !menuOpen && "pointer-events-none",
          )}
        >
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className={cn(
              "min-w-[200px] text-center font-text transition-[translate,visibility] duration-400 ease-[ease]",
              menuOpen ? "visible translate-y-0" : "invisible -translate-y-full",
            )}
          >
            <MenuItems
              onNavigate={closeMenu}
              className="relative z-[999] h-full flex-col justify-around gap-10 bg-white py-10 max-md:w-full max-md:pb-[30px]"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
